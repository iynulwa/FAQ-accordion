let isOpened = false;

document.querySelectorAll("h2")[0].addEventListener("click", function() {

    isOpened = !isOpened;

    if (!isOpened) {
        document.getElementById("minus1").style.display = "block";
        document.getElementById("plus1").style.display = "none";
        document.querySelector("p").style.display = "block";
    } else {
        document.getElementById("minus1").style.display = "none";
        document.getElementById("plus1").style.display = "block";
        document.querySelector("p").style.display = "none";
    }
})


document.querySelectorAll("h2")[1].addEventListener("click", function() {

    isOpened = !isOpened;

    if (!isOpened) {
        document.getElementById("minus2").style.display = "block";
        document.getElementById("plus2").style.display = "none";
        document.querySelectorAll("p")[1].style.display = "block";
    } else {
        document.getElementById("minus2").style.display = "none";
        document.getElementById("plus2").style.display = "block";
        document.querySelectorAll("p")[1].style.display = "none";
    }
})


document.querySelectorAll("h2")[2].addEventListener("click", function() {

    isOpened = !isOpened;

    if (!isOpened) {
        document.getElementById("minus3").style.display = "block";
        document.getElementById("plus3").style.display = "none";
        document.querySelectorAll("p")[2].style.display = "block";
    } else {
        document.getElementById("minus3").style.display = "none";
        document.getElementById("plus3").style.display = "block";
        document.querySelectorAll("p")[2].style.display = "none";
    }
})


document.querySelectorAll("h2")[3].addEventListener("click", function() {

    isOpened = !isOpened;

    if (!isOpened) {
        document.getElementById("minus4").style.display = "block";
        document.getElementById("plus4").style.display = "none";
        document.querySelectorAll("p")[3].style.display = "block";
    } else {
        document.getElementById("minus4").style.display = "none";
        document.getElementById("plus4").style.display = "block";
        document.querySelectorAll("p")[3].style.display = "none";
    }
})