let postIdParam = parseInt(window.location.pathname.split('/').slice(-1))
if (!postIdParam || postIdParam < 1){
  alert('invalid post id, must be a number')
}else{
  getPost(postIdParam)
}

async function getPost(postIdParam){
  try{
    const response = await fetch(`/api/post/${postIdParam}`);
    if (response.status === 200){
      const post = await response.json();
      if(post.text){
        addDataToDOM([post])  
        clickFirstPost()
      }else{
        alert('post not found')
      }
    }else{
        alert('post not found')
  }
  }catch(e){
    console.log(e)
  }
  getPosts(0)
}

function clickFirstPost(){
  const allElements = postscontainer.children
  let foundElement = false
  let firstPost
  for (element of allElements){
    if (!foundElement){
      if (element.classList.contains('item')){
        found = true
        firstPost = element 
      }
    }
  }
  if(firstPost){
      const overlayElement = Array.from(firstPost.children).filter((child)=>child.classList.contains('overlay'))[0]
       overlayElement.click()
  }
}