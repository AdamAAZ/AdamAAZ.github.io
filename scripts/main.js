const falvourImage = document.querySelector("img");

falvourImage.onclick = function () {
    const flavourSrc = falvourImage.getAttribute("src");
    if (flavourSrc === "images/monster-logo.png") {
        falvourImage.setAttribute("src", "images/monster-flavours.jpg");
    } 
    else {
        falvourImage.setAttribute("src", "images/monster-logo.png")
    }
}

/*
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Release the beast, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Release the beast, ${storedName}`
}

myButton.onclick = () => {
    setUserName();
}
*/