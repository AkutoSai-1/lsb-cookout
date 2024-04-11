// Get the hamburger menu and close button
var hamburger = document.querySelector(".hamburger-menu");
var closeButton = document.querySelector(".close-menu");

// Get the navigation menu
var navMenu = document.querySelector(".menu");

// Add click event listener to the hamburger menu
hamburger.addEventListener("click", function () {
  // Show the navigation menu
  navMenu.style.top = "0";
  navMenu.style.opacity = "1";

  // Hide the hamburger menu
  hamburger.style.display = "none";

  // Show the close button
  closeButton.style.display = "flex";
});

// Add click event listener to the close button
closeButton.addEventListener("click", function () {
  // Collapse the navigation menu
  navMenu.style.top = "100%";
  navMenu.style.opacity = "0";

  // Show the hamburger menu
  hamburger.style.display = "flex";

  // Hide the close button
  closeButton.style.display = "none";
});
