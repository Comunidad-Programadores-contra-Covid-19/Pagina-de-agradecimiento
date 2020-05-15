let modal_sharing_div = document.getElementById("sharing-container")
let share_email_div = document.getElementById("share-email")
let modalCompleteElement = document.getElementById("sharing-modal")

document.addEventListener("DOMContentLoaded", function(event) { 
  $(document).on('hidden.bs.modal', '#sharing-modal', function(e) {
    let sharingContainerButtons = document.querySelectorAll(".sharing_container_buttons")
    let send_email_buttons = document.querySelectorAll(".send_email_buttons")
    for (const sharingContainerButton of sharingContainerButtons){
      modal_sharing_div.removeChild(sharingContainerButton) 
    }
    for (const send_email_button of send_email_buttons){
      share_email_div.removeChild(send_email_button)
    }
    
  })
});



function share_social(shareElement){
  const postId = getPostIdFromElement(shareElement)
  const post = getPostByID(postId)
  const sharingButtonsHTML = templates.sharing_container(post)
  const sharingButtons = CreateElementFromHTML(sharingButtonsHTML)
  modal_sharing_div.appendChild(sharingButtons)

  const sendEmailHTML = templates.share_email(post)
  const sendEmailButton = CreateElementFromHTML(sendEmailHTML)
  share_email_div.appendChild(sendEmailButton)
}

function wait(time) {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve();
      }, time);
  });
}

function send_email(text,author='Anonimo',url){
  let email = document.getElementById('email').value

  document.getElementById('email-error').style.display = 'none';
  document.getElementById('email-empty').style.display = 'none';
  if(!email){
      document.getElementById('email-empty').style.display = 'block';
      document.getElementById('email').focus();
      document.getElementById('email-empty').value = 'El email no puede estar vacio';
      return
  }
  if(!email.includes('@')){
      document.getElementById('email-error').style.display = 'block';
      document.getElementById('email-error').value = 'Formato de email invalido';
      return
  }

  document.getElementById('loading').style.display = 'block';


  const obj = {
    subject: 'Alguien quiere compartirte una carta de graciasporcuidarnos.com.ar',
    text:   '<p>Te compartieron una carta de https://www.graciasporcuidarnos.com.ar</p>'+
            '<p>Visita el sitio para verla</p>' + 
            '<a href="'+url+'">click aca!</a>',
    to: email
}
  let x = JSON.stringify(obj);
  console.log(x);

  fetch('/mail',{
      method: 'POST', 
      body: x,
      headers: new Headers({
          'Content-Type': 'application/json',
      })
  })
  .then(async function(){
      await wait(3000)
      window.location.href = "/";
  })

}