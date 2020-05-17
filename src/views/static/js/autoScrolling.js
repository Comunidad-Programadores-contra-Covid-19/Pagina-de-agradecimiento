let autoScrollButton = document.querySelector(".autoScrollButton");
let autoScrolIcon = document.querySelector(".autoScrollIcon");
let body = document.querySelector("body");
var autoScrolling = false
let timeout

if (autoScrollButton){
  autoScrollButton.addEventListener("click", function(){ 
    autoScrolling = !autoScrolling
    changeIcon(this,autoScrolling)
    setTimeout(() => ToggleVisibility(autoScrollButton,false), 3000)
    pageScroll() 
  });

  autoScrollButton.addEventListener("mouseover", function(){ 
    ToggleVisibility(this,true)
    clearTimeout(timeout);
    timeout = setTimeout(() => ToggleVisibility(autoScrollButton,false), 3000)
  });

  body.addEventListener("touchmove", function(){
    scrollEvent()
  })

  body.addEventListener("wheel", function(){
    scrollEvent()
  })
}

function pageScroll() {
  if(autoScrolling){
    window.scrollBy(0,2);
    scrolldelay = setTimeout(pageScroll,10);
  }
}


function scrollEvent(){
  autoScrolling = false
  ToggleVisibility(autoScrollButton,true)
  changeIcon(autoScrollButton,autoScrolling)
}

function changeIcon(element,autoScrolling){
  if(autoScrolling){
    autoScrolIcon.src = '/img/pause_icon.png'
  }else{
    autoScrolIcon.src = '/img/play_icon.png'
  }
}

function ToggleVisibility(autoScrollButton,visible){
  if(autoScrollButton){
    if(visible){
    autoScrollButton.classList.remove('hide')
    autoScrollButton.classList.add('show')
    }else if (!visible && autoScrolling){
      autoScrollButton.classList.remove('show')
      autoScrollButton.classList.add('hide')
    }  
  }  
}