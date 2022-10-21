/** THIS IS FOR THE SLIDESHOW. WHEN THE USER CLICKS ON THE
 * "PREVIOUS OR NEXT BUTTON" IT WILL GO TO THE NEXT SLIDE
 */

//Define the index of the slide and set it to 1
var slideIndex = 1;

//Define the timer
var myTimer;

//Define the slideshow container
var slideShowContainer;

/**
 * The number of dots will correspond to the number of pictures, 
 * the slideIndex can be applied as the current index for slides as well as the dots
 */
window.addEventListener("load", function(){
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000) /*setInterval: sets the interval in which you determine
    a function to execute, and when/how often you want to execute it.*/

slideShowContainer = document.getElementsByClassName('slideshow-inner')[0];

slideShowContainer.addEventListener('mouseenter', pause)

slideShowContainer.addEventListener('mouseleave', resume)
});


/** Set a function for the additional slides,
 * and set it that it will show the next available ones
 */
 //The n determines the forward/backward functionality
function plusSlides(n) {
    clearInterval(myTimer);
    if(n < 0){
        //If n is negative, the slideshow index selected will be the index prior to the current one.
        showSlides(slideIndex -= 1);
    } else {
        //If n is positive, the slideshow index selected will be the index after the current one.
        showSlides(slideIndex += 1);
    }   
}


if(n === -1){
    myTimer = setInterval(function(){
        plusSlides(n + 2)}, 4000);
} else {
    myTimer = setInterval(function() {
        plusSlides(n + 1)}, 4000);
}


/** Set a function for currentSlide.
 * This function serves to allow the user to select a specific picture in the slideshow.
 */
function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    showSlides(slideIndex = n);
}

/** Define the showSlides function.
 * It will go back/forward a slide when user clicks on
 * either prev/next click.
 */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} //if the (last) has reached its end, set it to the 1st one
    if (n < 1) {slideIndex = slides.length} //if the slide is less that 1 (the first) then its equal to the length
    
    //for loop for the slides
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    //for loop for the dots or bullets or indicators
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    /**
     * The clearInterval is used to stop the timed interval of automatic slideshow switching. 
     * By hovering over the container, 
     * myTimer is cleared and the slideshow can only be moved by clicking the Prev/Next click 
     * or the dots below.
     */
    pause = () => {
        clearInterval(myTimer);
    }

    /**
     * The clearInterval is used to interact with the (prev/next) click and dots
     * that may create conflicts with the new interval. 
     * Just after clearInterval, reset the value of myTimer to a new interval, 
     * which will execute the plusSlides function, and pass it the current slideIndex. 
     */
    resume = () => {
        clearInterval(myTimer);
        myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
    }
}