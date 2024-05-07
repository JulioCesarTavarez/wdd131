const themeSelector = document.getElementById("bright-mode")
function changeTheme(){
    if (themeSelector.value == "dark"){
        document.body.classList.add("dark-mode");
        document.querySelector("img").src = "byui-logo_white.png"
    } else {
        document.body.classList.remove("dark-mode");
        document.querySelector("img").src = "byui-logo_blue.webp"
    }

    themeSelector.addEventListener('change', changeTheme);
}