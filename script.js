document.getElementById("yesButton").addEventListener("click", function() {
  // Show confetti when 'Yes' is clicked
  confetti();

  // Optionally, show a message after confetti
  alert("Yay! Thank you for being my Valentine!");
});

document.getElementById("noButton").addEventListener("click", function() {
  alert("Oh no! Ur gor no option its just yes.");
});