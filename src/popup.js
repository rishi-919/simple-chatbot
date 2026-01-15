const chatbtn=document.querySelector(".chatbtn");
let icon=document.querySelector(".fa-message");
let chatbotpopup=document.querySelector(".chatbot-popup");

chatbtn.addEventListener("click",function (){
// console.log("close clicked");
icon.classList.toggle("fa-message");
icon.classList.toggle("fa-x");
chatbotpopup.classList.toggle("active");
});
