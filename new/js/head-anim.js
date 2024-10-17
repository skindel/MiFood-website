var prevScrollpos = window.scrollY;

function toggleHead(newCircumference,newHeight,newImgHeight){
    document.documentElement.style.setProperty('--head-circumference', newCircumference + 'px');
    document.documentElement.style.setProperty('--head-height', newHeight + 'px');
    document.documentElement.style.setProperty('--logo-height', newImgHeight + 'px');
}

var maxCircumference = 14000; 
var minCircumference = 300;
var newCircumference;

var maxHeight = 140;
var minHeight = 100;
var newHeight;

var maxImgHeight = 80;
var minImgHeight = 40;
var newImgHeight;

window.onscroll = function() {
    var currentScrollPos = window.scrollY;

    
    if (currentScrollPos < 5) {
        newCircumference = maxCircumference; 
        newHeight = maxHeight;
        newImgHeight = maxImgHeight;
    } else {
        newCircumference = minCircumference; 
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