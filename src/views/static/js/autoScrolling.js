let autoScrollButton = document.querySelector(".autoScrollButton");
let body = document.querySelector("body");
var autoScrolling = false
autoScrollButton.addEventListener("click", function(){ 
  autoScrolling = !autoScrolling
  changeIcon(this,autoScrolling)
  setTimeout(() => ToggleVisibility(autoScrollButton,false), 3000)
  pageScroll() 
});

autoScrollButton.addEventListener("mouseover", function(){ 
  ToggleVisibility(this,true)
  setTimeout(() => ToggleVisibility(autoScrollButton,false), 3000)
});

function pageScroll() {
  if(autoScrolling){
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10);
  }
}

body.onwheel = function(){
  autoScrolling = false
  ToggleVisibility(autoScrollButton,true)
  changeIcon(autoScrollButton,autoScrolling)
};

function changeIcon(element,autoScrolling){
  for (const childElem of element.childNodes){
    if (childElem.nodeName == "I"){
      iconElement = childElem
    }
  }
  if(autoScrolling){
    iconElement.classList.remove('fa-play')
    iconElement.classList.add('fa-pause')
  }else{
    iconElement.classList.add('fa-play')
    iconElement.classList.remove('fa-pause')
  }
}

function ToggleVisibility(autoScrollButton,visible,log){
  if(visible){
    autoScrollButton.classList.remove('hide')
    autoScrollButton.classList.add('show')
  }else if (!visible && autoScrolling){
    autoScrollButton.classList.remove('show')
    autoScrollButton.classList.add('hide')
    console.log(log)
  }
  

}