


/*---------------------------------
testimonial slider
-----------------------------------*/
function testimonialSlider(){
    const carouselOne = document.getElementById('carouselOne');
    if(carouselOne){ /* if the element  exists*/
        carouselOne.addEventListener('slid.bs.carousel', function () {
            const activeItem = this.querySelector(".active");
            document.querySelector(".js-testimonial-img").src = 
            activeItem.getAttribute("data-js-testimonial-img");
        })
    }
}
testimonialSlider();


/*---------------------------------
header menu
-----------------------------------*/
(() =>{
    const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 991;

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);
    
    function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }

    navMenu.addEventListener("click", (event) =>{
        if(event.target.hasAttribute("data-toggle") && 
        window.innerWidth <= mediaSize){
        // prevent default anchor click behavior
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if(menuItemHasChildren.classList.contains("active")){
            collapseSubMenu();
        }
        else{
            // collapse existing expanded menuItemHasChildren
            if(navMenu.querySelector(".menu-item-has-children.active")){
                collapseSubMenu();
            }
            // expand new menuItemHasChildren
            menuItemHasChildren.classList.add("active");
            const subMenu = menuItemHasChildren.querySelector(".sub-menu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
       }
    });
    function collapseSubMenu(){
      navMenu.querySelector(".menu-item-has-children.active .sub-menu")
      .removeAttribute("style");
      navMenu.querySelector(".menu-item-has-children.active")
      .classList.remove("active");
    }
    function resizeFix(){
        // if navMenu is open, close it
        if(navMenu.classList.contains("open")){
            toggleNav();
        }
        // if menuItemHasChildren is expanded, collapse it
        if(navMenu.querySelector(".menu-item-has-children.active")){
                collapseSubMenu();
        }
    }

    window.addEventListener("resize", function(){
        if(this.innerWidth > mediaSize){
            resizeFix();
        }
    });

})();

/*---------------------------------
sponsor
-----------------------------------*/
$('.sponsor-logos').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
responsive: [
{
  breakpoint: 768,
  settings: {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    dots: false
  }
},
{
  breakpoint: 520,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 3
  }
},
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});


/*---------------------------------
accordian
-----------------------------------*/
$(document).ready(function(){
    $(".card-header").click(function(){
        // self clicking close
        if($(this).next(".card-body").hasClass("active")){
            $(this).next(".card-body").removeClass("active").slideUp()  
            $(this).children("span").removeClass("fa-minus").addClass("fa-plus")
        }
        else{
            $(".card .card-body").removeClass("active").slideUp()
            $(".card .card-header span").removeClass("fa-minus").addClass("fa-plus");
            $(this).next(".card-body").addClass("active").slideDown()  
            $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
        }
    })
})


/*---------------------------------
theme light & dark mode
-----------------------------------*/




window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 200;
    header.classList.toggle('scrolling-active', windowPosition);
  })


  /*---------------------------------
modal boxes for courses
-----------------------------------*/

let modals = document.getElementsByClassName("curses-modal");
let spans = document.getElementsByClassName("close-curses-modal");

function openCursesModalBox(boxNum) {
	modals[boxNum-1].style.display = "block";
}

for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        modals[i].style.display = "none";
        event.stopPropagation();
        event.preventDefault();
    }
}

window.onclick = function(event) {
    event.preventDefault();
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
