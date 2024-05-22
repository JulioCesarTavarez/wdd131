// document.querySelector("menuButton").addEventListener("click", function() {
//     menuButton.classList.add("hide");
//   });
  
  const menuButton = document.querySelector(".menuButton");
  function toggleMenu(){
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
  }
  menuButton.addEventListener("click", toggleMenu);

  function handleResize(){
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 700){
        menu.classList.remove("hide");
    }else{
        menu.classList.add("hide");
    }

  }
  handleResize();
  window.addEventListener("resize", handleResize)

