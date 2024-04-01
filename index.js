//Accordion
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    item.addEventListener("click", function () {
      faqItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      item.classList.toggle("active");
    });
  });
});

//Header

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//Footer
document
  .getElementById("newsletterForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the email input value
    var email = document.getElementById("emailInput").value;

    // Check if the email is valid
    if (validateEmail(email)) {
      // If email is valid, show confirmation alert
      alert("Email confirmed: " + email);
    } else {
      // Email is not valid, show error alert
      alert("Please enter a valid email address.");
    }
  });

// Function to validate email
function validateEmail(email) {
  // Normal expression for basic email validation
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

//Themes

function toggleTheme() {
  const body = document.body;
  const toggleButton = document.querySelector(".togg");
  body.classList.toggle("dark-theme");

  // Change button icon
  const isDarkTheme = body.classList.contains("dark-theme");
  toggleButton.innerHTML = isDarkTheme
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon fa-spin"></i>';
}
