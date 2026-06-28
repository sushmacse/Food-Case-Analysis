/* ==========================================
   Loader
========================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});


/* ==========================================
   Dark / Light Mode
========================================== */

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");

    }

}

window.onload = function () {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");

    }

};


/* ==========================================
   Button Hover Animation
========================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", function () {

        this.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", function () {

        this.style.transform = "scale(1)";

    });

});


/* ==========================================
   Card Hover Animation
========================================== */

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0px)";

    });

});


/* ==========================================
   Fade Animation on Scroll
========================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card,.about-section").forEach(el => {

    observer.observe(el);

});


/* ==========================================
   Welcome Message
========================================== */

console.log("College Food Choices Analytics Loaded Successfully");