let btn=document.querySelector(".my_btn");
btn.addEventListener("click",click_btn);
function click_btn(){
   document.querySelector("body").classList.toggle("new_class");
   btn.classList.toggle("new_class")
}
