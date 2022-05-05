const toggle = document.querySelector(".site-header__menu-toggle");
const menu = document.querySelector(".site-header");

/* Toggle mobile menu */

function togglemenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fa-solid fa-bars'></i>";
    } else {
        menu.classList.add("active");

        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class='fa-solid fa-xmark'></i>";
    }
}

/* Event Listener */
toggle.addEventListener("click", togglemenu, false);



// ///////////////////////////////////
let scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    scrollfunction()
};

function scrollfunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
});


