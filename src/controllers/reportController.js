const Post = require('../models').Post;
const Report = require('../models').Report;
const reportValidator = require('../validators/reportValidator');
const config = require('../config/config.js');

const MAX_REPORTS_ALLOWED_PER_POST = 3

exports.new_report = async function (req,res) {
  const IP = req.ip.toString()
  let {postId, details, reasonId} = req.body;
  postId = parseInt(postId)
  try{
    const post = await Post.findByPk(postId,{raw:true})
    const report = await Report.create({
      PostId:postId,
      userIP: IP
    })
    disablePostIfTooManyReports(postId)
    res.status(200).send()
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

async function disablePostIfTooManyReports(postId){
  console.log('disablePostIfTooManyReports')
  
  const reportCount = await Report.count({
    raw:true,
    where: {PostId:postId}
  })
  if( reportCount >= MAX_REPORTS_ALLOWED_PER_POST){
    Post.update(
      { isActive: false, },
      { where: {id:postId} }
    )
  }
}

exports.getReportedPostIDsByIP = async function (req,res) {
  const IP = req.ip.toString()
  try{
    const reportsObj = await Report.findAll({
      where:{userIP:IP},
      attributes:['PostId'],
      raw:true
    })
    const posts = reportsObj.map(report => report.PostId)
    res.json(posts)
  }catch(e){
    console.log(e)
    res.status(500)
  }

}