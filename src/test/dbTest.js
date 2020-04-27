const db = require('../config/dbInit');
const Post = require('../models').Post;

db.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

try {
  Post.update(
    { test: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets cont' },
    { where: { id: 1 } }
  ).then((err,res)=>{
  	console.log('err',err)
  	console.log('res',res)
  })
} catch (err) {
  handleError(err)
}
