

function create_post() {
    console.log(document.getElementById('destinatario').value)
    console.log(document.getElementById('carta').value)
    console.log(document.getElementById('firma').value)
}

function style_bckg(bck){
    console.log(bck.value);
    if (bck.value == 'light-purple'){
        document.getElementById('bckcolor').style["background-color"] = '#c0a5d6';
        return
    }
    if (bck.value == 'light-orange'){
        document.getElementById('bckcolor').style["background-color"] = '#f3b163';
        return;
    }
    if (bck.value == 'light-pink'){
        document.getElementById('bckcolor').style["background-color"] = '#eba293';
        return;
    }
    if (bck.value == 'cyan'){
        document.getElementById('bckcolor').style["background-color"] = '#6dd3c4';
        return;
    }
}