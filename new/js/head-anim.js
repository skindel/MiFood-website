var prevScrollpos = window.scrollY;

function toggleHead(newCircumference,newHeight,newImgHeight){
    document.documentElement.style.setProperty('--head-circumference', newCircumference + 'px');
    document.documentElement.style.setProperty('--head-height', newHeight + 'px');
    document.documentElement.style.setProperty('--logo-height', newImgHeight + 'px');
}

function toggleHeadMobile(headerHeight){
    document.documentElement.style.setProperty('--head-circ-height', headerHeight + 'px')
}



var maxCircumference = 14000; 
var minCircumference = 300;
var newCircumference;

var width = window.innerWidth;

var maxHeight = 100;
var minHeight = 100;
var newHeight;

var maxImgHeight = 50;
var minImgHeight = 40;
var newImgHeight;

if (screen.width > 1000){
    window.onscroll = function() {
        var currentScrollPos = window.scrollY;
        
        if (currentScrollPos < 5) {
            newCircumference = maxCircumference; 
            newHeight = maxHeight;
            newImgHeight = maxImgHeight;
            console.log(newHeight);
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
        if(window.scrollY >= 100){
            toggleHead(minCircumference, minHeight, minImgHeight);
        }
    });
} else {
    if(screen.width <= 500){
        maxHeight = 60;
        minHeight = 0;
    } else {
        maxHeight = 80;
        minHeight = 0;  
    }   

    window.onscroll = function() {
        var currentScrollPos = window.scrollY;
        
        if (currentScrollPos != 5) {
            newHeight = maxHeight;
        } else {
            newHeight = minHeight;
        }

        if (currentScrollPos>prevScrollpos){
            if (newHeight==maxHeight){
                newHeight = minHeight;
            }else{
                newHeight = maxHeight;
            }
        }

        toggleHeadMobile(newHeight);
        prevScrollpos = currentScrollPos;
    }


}
