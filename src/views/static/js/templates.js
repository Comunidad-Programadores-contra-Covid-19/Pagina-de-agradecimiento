let partials = {}
let templates = {}

templates.post = (post) => {
  const {color,height,width,text,author,id,likes,imgPath} = post
  let html = 
  `<div class="item ${color} ${height} ${width}">
    ${imgPath ? imgTag(post) : mainText(post)}
    <div class="overlay overlayFade ${color}">
      <div class="overlay-from">De: ${author} </div>
      <div class="overlay-buttons-1" onclick="like(this,${id})">
          <img src="img/clap1.png" width="35" height="35">
          <span>${likes}</span>
      </div>
      <img class="overlay-buttons-2" src="img/share.png" onclick="share(this,${id})" width="35" height="35">
      <img class="overlay-buttons-3" src="img/report1.png" onclick="report(this,${id})" width="35" height="35">
    </div>
  </div>  
  `
  return html
}

const imgTag = ({height,width,imgPath}) => `<img class='image ${height} ${width}' src="${imgPath}">`
const mainText = ({text}) => `<span>${text}</span>`

sliderHTML =
`
`

testPostHTML = 
`
<div class="item light-orange height width">
  <span>testPost</span>
  <div class="overlay overlayFade light-orange">
  <div class="overlay-from">De: Julian </div>
    <div class="overlay-buttons-1">
        <img src="img/clap1.png" width="35" height="35">
        <span>30</span>
    </div>
    <img class="overlay-buttons-2" src="img/share.png" width="35" height="35">
    <img class="overlay-buttons-3" src="img/report1.png" width="35" height="35">
  </div>  
`
templates.testPost = (post) => testPostHTML
templates.slider = sliderHTML

