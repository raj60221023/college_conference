// const x = document.getElementById("demo");
// 
// function getLocation() {
    // if (navigator.geolocation) {
        // navigator.geolocation.getCurrentPosition(showPosition, showError);
    // } else {
        // x.innerHTML = "Geolocation is not supported by this browser.";
    // }
// }
// 
// function showPosition(position) {
    // x.innerHTML = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`;
// }
// 
// function showError(error) {
    // switch (error.code) {
        // case error.PERMISSION_DENIED:
            // x.innerHTML = "User denied the request for Geolocation.";
            // break;
        // case error.POSITION_UNAVAILABLE:
            // x.innerHTML = "Location information is unavailable.";
            // break;
        // case error.TIMEOUT:
            // x.innerHTML = "The request to get user location timed out.";
            // break;
        // case error.UNKNOWN_ERROR:
            // x.innerHTML = "An unknown error occurred.";
            // break;
    // }
// }
// 
// Call the function to get the user's location
// getLocation();

// Get the screen width
 // Toggle navigation menu on mobile devices
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Add active class to current page link
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((otherLink) => {
      otherLink.classList.remove('active');
    });
    link.classList.add('active');
  });
});

  
  
  
 
 
 
 