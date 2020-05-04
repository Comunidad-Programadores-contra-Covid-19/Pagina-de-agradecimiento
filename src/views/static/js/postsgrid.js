let overlayButtons = document.querySelectorAll(".postscontainer");
overlayButtons[0].addEventListener('click', function(e) {
    // do cool stuff
});

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
  }else{
    element.src = 'img/report1.png'
  }
}
