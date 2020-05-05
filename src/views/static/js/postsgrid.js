let postscontainer = document.querySelectorAll(".postscontainer")[0];
const loader = document.querySelector('.loader');
let last_known_scroll_position = 0;
let loading = false

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if(clientHeight + scrollTop >= scrollHeight - 100 && !loading ) {
    loading = true
    showLoading();
  }
  if(clientHeight + scrollTop < scrollHeight - 100) {
    loading = false
  }
})

function showLoading() {
  loader.classList.add('show');
  
  // load more data
  setTimeout(getPosts, 500)
  //getPosts()
}

async function getPosts (){
  const response = await fetch('/posts/1');
  const postsData = await response.json();  
  addDataToDOM(postsData)
}


function addDataToDOM(postsData) {
  loader.classList.remove('show');

  for (post of postsData){
    post.height = 'height'
    post.width = 'width'
    if (!post.imgPath) {
      if (post.text.length > 175) {
        if (Math.random() < 0.5)
          post.height = 'height2'
        else
          post.width = 'width2'
      }
      if (post.text.length > 350) {
        post.text = post.text.substring(1, 350) + '...';
      }
    } else {
      if (post.imgWidth > 1000 && post.imgHeight > 1000) {
        post.height = 'height2'
        post.width = 'width2'
      } else {
        if (post.imgWidth > 1.6 * post.imgHeight) {
          post.width = 'width2'
        }
        if (post.imgHeight > 1.6 * post.imgWidth) {
          post.height = 'height2'
        }
      }
    }
    const postElement = document.createElement('div');
    postElement.classList.add('item',post.color,post.height,post.width);
    let innerHTML = ''
     if (post.imgPath) {
        innerHTML += `<img class='image ${post.height} ${post.width}' src="${post.imgPath}">`
     } else{
        innerHTML += `<span>${post.text}</span>`
     }
    innerHTML +=
      `<div class="overlay overlayFade ${post.color}">
        <div class="overlay-from">De: ${post.author} </div>
        <div class="overlay-buttons-1" onclick="like(this, ${post.id})">
          <img src="img/clap1.png" width="35" height="35">
          <span> ${post.likes}</span>
        </div>
        <img class="overlay-buttons-2" src="img/share.png" onclick="share(this, ${post.id})" width="35" height="35">
        <img class="overlay-buttons-3" src="img/report1.png" onclick="report(this, ${post.id})" width="35" height="35">
      </div>
    </div>
    `
    postElement.innerHTML = innerHTML
    postscontainer.appendChild(postElement);  
  }
  
  
}

function like(element,postId) {
  let like = true
  for (const childElem of element.childNodes){
    if (childElem.nodeName === "IMG"){
      if(childElem.src.slice(-5) == '1.png'){
        childElem.src = 'img/clap-filled2.png'        
      }else{
        like = false
        childElem.src = 'img/clap1.png'
      }
    }
    if (childElem.nodeName === "SPAN"){
      if (like){
        childElem.innerHTML = parseInt(childElem.innerHTML,10) + 1
      }else{
        childElem.innerHTML = parseInt(childElem.innerHTML,10) - 1
      }
    }    
  }
  fetch('/like', {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({postId:postId})
  })
}

function report(element,postId){
  if(element.src.slice(-5) == '1.png'){
    element.src = 'img/report-filled2.png'
    overlay = element.parentElement
    overlay.style.opacity = 1
  }else{
    element.src = 'img/report1.png'
    overlay = element.parentElement
    overlay.style.opacity = 0
  }
}



