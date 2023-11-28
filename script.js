function toggleMenu() {
    // Select the menu links container
    const menu = document.querySelector(".menu-links");

    // Select the hamburger icon (assuming it's a class)
    const icon = document.querySelector("hamburger-icon");

    // Toggle the "open" class on the menu links container
    menu.classList.toggle("open");

    // Toggle the "open" class on the hamburger icon
    icon.classList.toggle("open");
}


//DARK /Light Mode
const btn=document.getElementById("modeToggle");
const btn2=document.getElementById("modeToggle2");
const themeIcons=document.querySelectorAll(".icon");
const currentTheme=localStorage.getItem("theme");

if (currentTheme === "dark") {
    setDarkMode();
  }

btn.addEventListener("click",function(){
    setTheme();
});
btn2.addEventListener("click",function(){
    setTheme();
});
function setTheme(){
    let currentTheme=document.body.getAttribute("theme");
    if(currentTheme==="dark"){
        setLightMode();
    }else{
        setDarkMode();
    }

}
function setDarkMode(){
    document.body.setAttribute("theme","dark");
    localStorage.setItem("theme","dark");
    themeIcons.forEach((icon)=>{
        icon.src=icon.getAttribute("src-dark");
    });
}

function setLightMode(){
    document.body.removeAttribute("theme");
    localStorage.setItem("theme","dark");
    themeIcons.forEach((icon)=>{
        icon.src=icon.getAttribute("src-light");
    });


}