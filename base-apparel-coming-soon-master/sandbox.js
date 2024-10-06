let btn = document.querySelector("button");
let email = document.querySelector("input.email");
let msg = document.querySelector("p#errormsg"); 
let realemail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;




function validateEmail(email){

    if(email.value == undefined ||  email.value == "")

        {

            let email = document.querySelector("input.email");
            // let msg = document.querySelector("p#errormsg");
            let btn = document.querySelector("button");
            msg.innerText = "Please enter your email";
            email.classList.add("error");
            btn.classList.add("error"); 

            

        }
    else if( !email.value.match(realemail))
    
        {   
        let btn = document.querySelector("button");
        // let msg = document.querySelector("p#errormsg");
        msg.innerText = "Please enter a valid email";
        btn.classList.add("error"); 
        email.classList.add("error"); 
    }
    else{
        email.classList.add("success");
        msg.classList.add("success");
        msg.innerText = "Thanks :)";
        btn.classList.add("success");

    }


















}


















btn.addEventListener( "click", (e) => {


e.preventDefault();

validateEmail(email);


});