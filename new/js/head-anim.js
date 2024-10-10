var prevScrollpos = window.scrollY;

window.onscroll = function() {
var currentScrollPos = window.scrollY;

    var maxCircumference = 15000; 
    var minCircumference = 400;
    var newCircumference;

    var maxHeight = 200;
    var minHeight = 150;
    var newHeight;

    var maxImgHeight = 100;
    var minImgHeight = 50;
    var newImgHeight;

    // Calculate new Circumference based on scroll direction
    if (prevScrollpos > currentScrollPos) {
        newCircumference = maxCircumference; // Scroll up
        newHeight = maxHeight;
        newImgHeight = maxImgHeight;
    } else {
        newCircumference = minCircumference; // Scroll down
        newHeight = minHeight;
        newImgHeight = minImgHeight;
    }

    // Set the Circumference CSS variable smoothly
    document.documentElement.style.setProperty('--head-circumference', newCircumference + 'px');
    document.documentElement.style.setProperty('--head-height', newHeight + 'px');
    document.documentElement.style.setProperty('--logo-height', newImgHeight + '%');
prevScrollpos = currentScrollPos;
}