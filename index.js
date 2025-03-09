let isOpened = false;

const allButtons = document.querySelectorAll("button");
const contents = document.getElementsByClassName("content");
const theMinus = document.getElementsByClassName("minus");
const thePlus = document.getElementsByClassName("plus");


allButtons.forEach(function(element, index) {
    element.addEventListener("click", function() {

        if(!isOpened) {
            contents[index].style.display="block";
            theMinus[index].style.display="block";
            thePlus[index].style.display="none"
        } else {
            contents[index].style.display="none";
            theMinus[index].style.display="none";
            thePlus[index].style.display="block"
        }

        isOpened = !isOpened;
        
    })
})