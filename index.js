let icon = document.querySelector("#icon i");
let ans = document.getElementById("ans");

icon.addEventListener("click",()=>{
    icon.classList.toggle("fa-x");
    ans.classList.toggle("hide");
    
})