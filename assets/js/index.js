// preloader
var preloader = document.getElementById('loading');
function preloading() {
  setTimeout(timeout, 2000);
}
function timeout() {
  preloader.style.display = 'none';
}

// home page reveal
myID = document.getElementById("head");

var myScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 350) {
    myID.className = "show"
  } else {
    myID.className = "hide"
  }
};

// intro typewriter
var typed = new Typed(".multi", {
  strings: ["Software Engineer", "Frontend Developer", "Illustrator", "Blogger", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// skills canvas
window.addEventListener("scroll", myScrollFunc);
$(document).ready(function () {
  if (!$("#myCanvas").tagcanvas({
    textColour: "#FFFEFF",
    outlineColour: "transparent",
    reverse: true,
    depth: 0.8,
    initial: [0.3, 0.1],
    maxSpeed: 0.05,
    weight: true,
  }, "tags")) {
    // something went wrong hide the canvas container,
    $("#myCanvasContainer");
  }
})

// filter work
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Link active work 
const workLinks = document.querySelectorAll(".work__item");
function activeWork(workLink) {
  workLinks.forEach((wl) => {
    wl.classList.remove("active-work");
  });
  workLink.classList.add("active-work");
}
workLinks.forEach((wl) => {
  wl.addEventListener("click", () => {
    activeWork(wl);
  });
});


// glass effect
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.5,
});
VanillaTilt.init(document.querySelectorAll(".contact__card"), {
  max: 10,
  speed: 80,
  glare: true,
  "max-glare": 0.5,
});
VanillaTilt.init(document.querySelectorAll(".nft"), {
  max: 10,
  speed: 80,
  glare: true,
  "max-glare": 0.2,
});


// header active link
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);


// reveal animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

function reveal1() {
  var reveals = document.querySelectorAll(".reveal1");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal1);

//SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal('.home, .multi, .home_button, .illustration, .skills-charts', {
  delay: 100,
  origin: "top",
  scale: 0.9,
  distance: "30px",
});

sr.reveal('.about_img', {
  delay: 100,
  origin: "left",
  scale: 0.9,
  distance: "30px",
});

sr.reveal(`.about_description, .about__button-contact`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.skill_description`, {
  delay: 100,
  scale: 0.9,
  origin: "left",
  distance: "40px",
});

sr.reveal('.card, .services_description, .work_description', {
  delay: 100,
  scale: 0.9,
  origin: "top",
  distance: "30px",
});

// text hover effect
const element = document.getElementsByClassName("alpha");
for (let i = 0; i <= element.length; i++) {
  element[i].addEventListener('animationend', function (e) {
    element[i].classList.remove('animated');
  })
  element[i].addEventListener('mouseover', function (e) {
    element[i].classList.add('animated');
  })
}

const elements = document.getElementsByClassName("skills_alpha");
for (let i = 0; i <= elements.length; i++) {
  elements[i].addEventListener('animationend', function (e) {
    elements[i].classList.remove('animated');
  })
  elements[i].addEventListener('mouseover', function (e) {
    elements[i].classList.add('animated');
  })
}
