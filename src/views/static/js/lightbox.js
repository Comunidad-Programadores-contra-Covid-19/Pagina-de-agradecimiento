const lightboxContainer = document.querySelector('.lightbox-container')
const lightboxBackground = document.querySelector('.lightbox-background')
const lightboxImg = document.querySelector('.lightbox-image')
const lightboxText = document.querySelector('.lightbox-text')
const lightboxBox = document.querySelector('.lightbox-box')
const colors = ['green','grey','pink','cyan','orange','purple']
const lightboxLikes = document.querySelector('.lightbox-likes')
const lightboxButtonLike =  document.querySelector('.lightbox-button-like')
const lightboxButtonShare =  document.querySelector('.lightbox-button-share')
const lightboxButtonReport =  document.querySelector('.lightbox-button-report')

createClickEventListenerButtons()

const createLightbox = (postElement,postId) => {
  if (!event.target.classList.contains('overlay')){
    return null
  }
  post = getPostByID(postId)
  lightboxContainer.style.display = 'flex'
  lightboxBackground.style.display = 'block'

  lightboxButtonLike.classList.add(`id:${postId}`)
  lightboxButtonShare.classList.add(`id:${postId}`)
  

  if(post.imgPath){
    var maxWidth = document.body.clientWidth*0.6; // Max width for the image
    var maxHeight = document.body.clientWidth*0.8;    // Max height for the image
    var ratio = 0;  // Used for aspect ratio
    var width = post.imgWidth;    // Current image width
    var height = post.imgHeight;  // Current image height
    lightboxImg.style.height = height  + 'px'
    lightboxImg.style.width = width  + 'px'

    // Check if the current width is larger than the max
    if(width > maxWidth){
        ratio = maxWidth / width;   // get ratio for scaling image
        lightboxImg.style.width= maxWidth + 'px' // Set new width
        lightboxImg.style.height= height * ratio + 'px'// Scale height based on ratio
        height = height * ratio;    // Reset height to match scaled image
        width = width * ratio;    // Reset width to match scaled image
    }

    // Check if current height is larger than max
    if(height > maxHeight){
        ratio = maxHeight / height; // get ratio for scaling image
        lightboxImg.style.height = maxHeight  + 'px'  // Set new height
        lightboxImg.style.width = height * ratio + 'px'   // Scale width based on ratio
        width = width * ratio;    // Reset width to match scaled image
        height = height * ratio;    // Reset height to match scaled image
    }
    lightboxImg.src=post.imgPath
    lightboxBox.style.width = lightboxImg.style.width
    lightboxImg.style.display = 'block'
    lightboxText.style.margin = '2%'
  }
  else{
    lightboxText.style.marginTop = '4%'
    lightboxText.style.marginLeft = '7%'
    lightboxText.style.marginRight = '7%'
    lightboxText.style.marginBottom = '2%'
    lightboxImg.style.display = 'none'
    
  }
  
  lightboxLikes.innerHTML = post.likes
  lightboxText.innerHTML = post.text
}
const getPostByID = (postId) => {
  const myPost = postList.filter((post)=>post.id == postId)[0]
  return myPost
}


document.onkeydown = function(event) {
  event = event || window.event;
  if (event.key === "Escape") {
    removeLightboxBackground()    
  }
};

const removeLightboxBackground = ()=>{
  lightboxContainer.style.display = 'none'
  lightboxBackground.style.display = 'none'
  lightboxImg.style.display = 'none'
  lightboxImg.src=''
}


lightboxContainer.onclick = function(e){
  for(const aClass of e.target.classList)
  for (var i = 0; i < e.target.classList.length; i++){
      if (e.target.classList[i] === 'lightbox-container'){
        removeLightboxBackground()
    }    
  }
}

function createClickEventListenerButtons(){

  lightboxButtonLike.addEventListener("click", ()=>like(lightboxButtonLike)); 
  lightboxButtonShare.addEventListener("click", ()=>share_social(lightboxButtonShare)); 
  //lightboxButtonReport.addEventListener("click", ()=>reportLightBox(lightboxButtonReport,postId)); 

}

function reportLightBox(reportElement,postId){
  if(reportElement.src.slice(-5) == '1.png'){
    reportElement.src = '/img/report-filled2.png'
  }else{
    reportElement.src = '/img/report1.png'
  }
}