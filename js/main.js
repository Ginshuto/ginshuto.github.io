// Initialisation de wow.js
new WOW({ mobile: false }).init();
new WOW({ boxClass: "canvas__title" }).init();

// Initialisation du localScroll
$(document).ready(function () {
  $("body").localScroll();
});

var keyCodeArray = [];
// Script activant et désactivant la transparence du header, en fonction de la position sur la page
$(document).ready(function () {
  let header = $("header").height();
  let whoAmI = $("#Qui-suis-je").height();
  let skills = $("#Competences").height();
  let work = $("#Realisations").height();
  let index = 0;
  if ($(document).scrollTop() > header - 35) {
    $(".navigation").addClass("visible");
    $("#trigger-overlay").addClass("visible");
  } else {
    $(".navigation").removeClass("visible");
    $("#trigger-overlay").removeClass("visible");
    index = 0;
    $(".navigation__link").removeClass("active");
    $(".navigation__link").eq(0).addClass("active");
  }
  $(window).scroll(function () {
    if ($(document).scrollTop() > header - 35) {
      $(".navigation").addClass("visible");
      $("#trigger-overlay").addClass("visible");
    } else {
      $(".navigation").removeClass("visible");
      $("#trigger-overlay").removeClass("visible");
      index = 0;
      $(".navigation__link").removeClass("active");
      $(".navigation__link").eq(0).addClass("active");
    }
  });
  // Ajout de classe pour section active, et modification de l'index pour navigation clavier
  $(window).scroll(function () {
    if ($(document).scrollTop() > header - 50) {
      index = 1;
      $(".navigation__link").removeClass("active");
      $(".navigation__link").eq(1).addClass("active");
    }
    if ($(document).scrollTop() > header + whoAmI - 50) {
      index = 2;
      $(".navigation__link").removeClass("active");
      $(".navigation__link").eq(2).addClass("active");
    }
    if ($(document).scrollTop() > header + whoAmI + skills - 50) {
      index = 3;
      $(".navigation__link").removeClass("active");
      $(".navigation__link").eq(3).addClass("active");
    }
    if ($(document).scrollTop() > header + whoAmI + skills + work - 50) {
      index = 4;
      $(".navigation__link").removeClass("active");
      $(".navigation__link").eq(4).addClass("active");
    }
  });
  // Navigation clavier up and down entre les sections
  $("body").bind("keyup", function (e) {
    if (!$("textarea").is(":focus")) {
      if (e.keyCode == 38) {
        index -= 1;
        $(".navigation__link").eq(index).click();
        $(".navigation__link").removeClass("active");
        $(".navigation__link").eq(index).addClass("active");
      }
      if (e.keyCode == 40) {
        index += 1;
        $(".navigation__link").eq(index).click();
        $(".navigation__link").removeClass("active");
        $(".navigation__link").eq(index).addClass("active");
      }
    }
    // Projet secret
    keyCodeArray.push(e.keyCode);
    if ((keyCodeArray[0] != 38) & (keyCodeArray[1] != 38)) {
      keyCodeArray = [];
    }
    if (_.isEqual(keyCodeArray, [38, 38, 40, 40, 37, 39, 37, 39, 66, 65])) {
      console.log("KONAMI CODE ACTIVATED");
      alert("KONAMI CODE ACTIVATED");
      // $("body").html("<p style='color:blue'>KONAMI CODE ACTIVATED</p>")
    }
  });
});

// Slideshow splide.js
new Splide("#splide", {
  type: "loop",
  autoplay: true,
  rewind: true,
  height: "500px",
  cover: true,
  accessibility: true,
  keyboard: true,
  lazyLoad: "nearby",
}).mount();

// Script d'envoi de mail https://formspree.io
var dataLayer = [{}];
function formulaire() {
  dataLayer.push({
    event: "portfolioEvent",
    eventCategory: "Utilisateur",
    eventAction: "Formulaire de Contact",
    eventLabel: "Message Envoyé",
    eventValue: "1",
  });
}
