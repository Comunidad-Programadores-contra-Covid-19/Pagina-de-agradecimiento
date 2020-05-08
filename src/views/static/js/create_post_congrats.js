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
        text: text,
        author: author,
        to: email,
        url: url
    }
    let x = JSON.stringify(obj);
    console.log(x);

    fetch('http://localhost:8000/mail',{
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