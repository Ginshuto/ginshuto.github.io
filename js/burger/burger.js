!(function () {
  var e = document.getElementById("trigger-overlay"),
    i = document.querySelector("div.overlay"),
    n = i.querySelector("button.overlay-close");
  function t() {
    if (classie.has(i, "open")) {
      classie.remove(i, "open"), classie.add(i, "close");
      var n = function (e) {
        if (support.transitions) {
          if ("visibility" !== e.propertyName) return;
          this.removeEventListener(transEndEventName, n);
        }
        classie.remove(i, "close");
      };
      support.transitions ? i.addEventListener(transEndEventName, n) : n();
    } else classie.has(i, "close") || classie.add(i, "open");
  }
  (link1 = i.querySelector("nav ul li .un")),
    (link2 = i.querySelector("nav ul li .deux")),
    (link3 = i.querySelector("nav ul li .trois")),
    (link4 = i.querySelector("nav ul li .quatre")),
    (link5 = i.querySelector("nav ul li .cinq")),
    (transEndEventNames = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd",
      msTransition: "MSTransitionEnd",
      transition: "transitionend",
    }),
    (transEndEventName = transEndEventNames[Modernizr.prefixed("transition")]),
    (support = { transitions: Modernizr.csstransitions }),
    e.addEventListener("click", t),
    n.addEventListener("click", t),
    link1.addEventListener("click", t),
    link2.addEventListener("click", t),
    link3.addEventListener("click", t),
    link4.addEventListener("click", t),
    link5.addEventListener("click", t);
})();
