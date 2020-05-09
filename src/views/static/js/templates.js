const templates = {}
const partials = {}

templates.post = (post) => {
  const {color,height,width,text,author,id,likes,imgPath} = post
  const NonLightcolor = post.color.split('-')[1] || 'purple'

  const html =
  `<div class="item ${color} ${height} ${width}" onClick="createLightbox(this,${id})">
    ${imgPath ? partials.imgTag(post) : partials.mainText(post)}
    <div class="overlay overlayFade ${NonLightcolor}">
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

partials.imgTag = ({height,width,imgPath}) => `<img class='image ${height} ${width}' src="${imgPath}">`
partials.mainText = ({text}) => `<span>${text}</span>`

templates.testPost = (post) => {
  const html =
  `
  <div class="item light-orange height width" onClick="createLightbox(this,${id})">
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
  return html
}



