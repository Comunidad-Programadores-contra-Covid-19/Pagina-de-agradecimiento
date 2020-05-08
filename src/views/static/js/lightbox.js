const lightboxContainer = document.querySelector('.lightbox-container')
const lightboxBackground = document.querySelector('.lightbox-background')
const lightboxImg = document.querySelector('.lightbox-image')
const lightboxText = document.querySelector('.lightbox-text')
const lightboxBox = document.querySelector('.lightbox-box')
const lightboxLikes = document.querySelector('.lightbox-likes')
const colors = ['light-green','grey','light-pink','cyan','light-orange','light-purple']
 
const createLightbox = (postElement,postId) => {

  post = getPostByID(postId)
  lightboxContainer.style.display = 'flex'
  lightboxBackground.style.display = 'block'
  lightboxBackground.classList.remove(...colors)
  lightboxBackground.classList.add(post.color)
  lightboxBox.classList.remove(...colors)
  lightboxBox.classList.add(post.color)

  if(post.imgPath){
    lightboxImg.src=post.imgPath
    const aspectRatio = Math.round(post.imgWidth / post.imgheight)
    const width = Math.min(post.imgWidth,document.body.clientWidth*0.6)
    lightboxImg.style.width= width + 'px'
    lightboxImg.style.height= Math.round(width / aspectRatio) + 'px'
  }
  lightboxLikes.innerHTML = post.likes
  lightboxText.innerHTML = post.text
}
const getPostByID = (postId) => postList.filter((post)=>post.id === postId)[0]


document.onkeydown = function(event) {
  event = event || window.event;
  if (event.key === "Escape") {
    removeLightboxBackground()    
  }
};

const removeLightboxBackground = ()=>{
  lightboxContainer.style.display = 'none'
  lightboxBackground.style.display = 'none'
  lightboxImg.src=''
}



/*lightboxBackground.onClick = function(e){
  console.log('asd')
}


lightboxImg.onClick = function(e){
  console.log('asd')
}

function testFunc(e){
  console.log(e)
}
*/
lightboxContainer.onclick = function(e){
  for (var i = 0; i < e.target.classList.length; i++){
      if (e.target.classList[i] === 'lightbox-container'){
        removeLightboxBackground()
    }    
  }
}