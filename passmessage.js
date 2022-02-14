/* Selects the submit button, textArea, and h3 that changes */
let submit = document.querySelector("#submit");
let text = document.querySelector("#textEntry");
let message = document.querySelector("#changeMessage");

submit.addEventListener("click", function(){
    if(text.value === ""){
        alert("IT'S EMPTY, TRY AGAIN");
    }else{
        message.textContent = text.value;
        text.value = "";
    }
})