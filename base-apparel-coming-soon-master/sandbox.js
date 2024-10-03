let btn = document.querySelector("button");
let email = document.querySelector("input.email");
let realemail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;




function validateEmail(){


    if(email.value == undefined ||  email.value == null)

        {

            let msg = document.querySelector("p#errormsg");
            msg.innerText = "Please enter your email";
            
        }
















}


















btn.addEventListener( "click", (e) => {


e.preventDefault();

validateEmail(email);


});