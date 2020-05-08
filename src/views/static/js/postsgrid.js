const postscontainer = document.querySelector(".postscontainer");
const loader = document.querySelector('.loader');
let last_known_scroll_position = 0;
let loading = false
let page = 2

//get first page of posts
getPosts(1)

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if(clientHeight + scrollTop >= scrollHeight - 300 & !loading ) {
    loading = true
    showLoading(page);
    page += 1
  }
  if(clientHeight + scrollTop < scrollHeight - 100) {
    loading = false
  }
})

function showLoading(page) {
  loader.classList.add('show');
  
  getPosts(page)
}

async function getPosts (page = 1){
  const response = await fetch(`/posts/${page}`);
  const postsData = await response.json();
  addDataToDOM(postsData)
}


function addDataToDOM(posts) {
  loader.classList.remove('show');
  posts = addHeightWidthToPosts(posts)
  
  for (post of posts){
    const postHTML = templates.post(post)
    const postElement = CreateElementFromHTML(postHTML)
    postscontainer.appendChild(postElement);  
  }
  
  
}

function CreateElementFromHTML(html){
  let template = document.createElement('div')
  template.innerHTML = html
  return template.firstElementChild
}

function addHeightWidthToPosts (posts){
  for (const post of posts) {
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
  }
  return posts
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

