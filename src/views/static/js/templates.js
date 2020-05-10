
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
      <img class="overlay-buttons-2" src="img/share.png" onclick="share_social(this,${id})" width="35" height="35">
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

templates.sharing_container = (post) => {
  const url = `Graciasporcuidarnos.com.ar/post/${post.id}` 
  const html = `
  <a class="mobile" href="whatsapp://send?text=te%20envio%20carta%20de%20agradecimiento%20para%20vos%20${url}">
      <img src="img/whatsapp_logo.png">
  </a>
  <a class="large" href="https://web.whatsapp.com/send?text=te%20envio%20carta%20de%20agradecimiento%20para%20vos%20${url}" target="_blank">
      <img src="img/whatsapp_logo.png">
  </a>

  <a  href="https://twitter.com/intent/tweet?text=Escribi%20este%20agradecimiento%20en%20graciasporcuidarnos.com.ar%20y%20me%20gustaria%20compartirtelo&url=${url}&hashtags=graciasporcuidarnos" target="_blank">
      <img src="img/twitter_logo.png">    
  </a>
  `

  return html 
}

templates.share_email = (post) => {
  const url = `Graciasporcuidarnos.com.ar/post/${post.id}`
  const html = `<button type="button" class="btn send-btn btn-primary" onclick="send_email('${post.text}','${post.author}','${url}')">Enviar</button>`
  return html;
}


