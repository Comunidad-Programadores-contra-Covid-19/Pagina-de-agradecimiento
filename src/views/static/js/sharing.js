let modal_sharing_div = document.getElementById("sharing-container")
let modalCompleteElement = document.getElementById("sharing-modal")

document.addEventListener("DOMContentLoaded", function(event) { 
  $(document).on('hidden.bs.modal', '#sharing-modal', function(e) {
    let sharingContainerButtons = document.querySelectorAll(".sharing_container_buttons")
    for (const sharingContainerButton of sharingContainerButtons){
      modal_sharing_div.removeChild(sharingContainerButton)  
    }
  })
});



function share_social(shareElement){
  const postId = getPostIdFromElement(shareElement)
  const post = getPostByID(postId)
  const sharingButtonsHTML = templates.sharing_container(post)
  const sharingButtons = CreateElementFromHTML(sharingButtonsHTML)
  modal_sharing_div.appendChild(sharingButtons)
}