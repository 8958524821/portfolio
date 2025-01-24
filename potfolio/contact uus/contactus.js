
const send = document.getElementById('send');
let name =document.getElementById('name')
let username =document.getElementById('username')
let insidetext =document.getElementById('inside-text')

if (send) { 
    send.addEventListener('click', function() {
        alert("Successfully sent");
       name.value=""
       username.value=""
       insidetext.value=""

    })}