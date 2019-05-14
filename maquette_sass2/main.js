window.onload = function () {
    var back = document.getElementsByClassName("back")[0];
    var next = document.getElementsByClassName("next")[0];
    var slider1 = document.getElementsByClassName("slider1")[0];
    var slider2 = document.getElementsByClassName("slider2")[0];
    back.onclick = function () {
        slider1.style.display = "block";
        slider2.style.display = "none";
    }
    next.onclick = function () {
        slider1.style.display = "none";
        slider2.style.display = "block";
    }
}

function SUBMIT() {
    alert("Vous êtes maintenant inscrit à la newsletter !");
    return true;
}