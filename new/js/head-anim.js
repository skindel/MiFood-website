var prevScrollpos = window.scrollY;

function toggleHead(newCircumference,newHeight,newImgHeight){
    document.documentElement.style.setProperty('--head-circumference', newCircumference + 'px');
    document.documentElement.style.setProperty('--head-height', newHeight + 'px');
    document.documentElement.style.setProperty('--logo-height', newImgHeight + '%');
}

var maxCircumference = 14000; 
var minCircumference = 300;
var newCircumference;

var maxHeight = 120;
var minHeight = 120;
var newHeight;

var maxImgHeight = 100;
var minImgHeight = 50;
var newImgHeight;

window.onscroll = function() {
    var currentScrollPos = window.scrollY;

    // Calculate new Circumference based on scroll direction
    if (currentScrollPos < 70) {
        newCircumference = maxCircumference; // Scroll up
        newHeight = maxHeight;
        newImgHeight = maxImgHeight;
    } else {
        newCircumference = minCircumference; // Scroll down
        newHeight = minHeight;
        newImgHeight = minImgHeight;
    }

    // Set the Circumference CSS variable smoothly
    toggleHead(newCircumference,newHeight,newImgHeight);
prevScrollpos = currentScrollPos;
}

const headbar = document.getElementById("head-container");

headbar.addEventListener('mouseover', () => {
    toggleHead(maxCircumference, maxHeight, maxImgHeight);

});

headbar.addEventListener('mouseout', () => {
    console.log("out")
    if(window.scrollY >= 100){
        toggleHead(minCircumference, minHeight, minImgHeight);
    }
});