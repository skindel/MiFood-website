var prevScrollpos = window.scrollY;

window.onscroll = function() {
var currentScrollPos = window.scrollY;

    var maxHeight = 15000; 
    var minHeight = 13000; 
    var newHeight;

    // Calculate new height based on scroll direction
    if (prevScrollpos > currentScrollPos) {
        newHeight = maxHeight; // Scroll up
    } else {
        newHeight = minHeight; // Scroll down
    }

    // Set the height CSS variable smoothly
    document.documentElement.style.setProperty('--head-circumference', newHeight + 'px');
prevScrollpos = currentScrollPos;
}