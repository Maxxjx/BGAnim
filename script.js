function log(){
  document.getElementById("full-card").style.display="block";
  document.getElementById("body").style.overflow="hidden";
}
function logout(){
  document.getElementById("full-card").style.display="none";
  document.getElementById("body").style.overflow="auto";
}
// navbar-background-change
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 630 || document.documentElement.scrollTop > 630) {
    document.getElementById("nav-bar").style.backgroundColor="black";
    console.log("ooooooooooooooooooo");
  } else {
    document.getElementById("nav-bar").style.backgroundColor="transparent";
    console.log("ooppppppppppppppppppppp");
  }
} 