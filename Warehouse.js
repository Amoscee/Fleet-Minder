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

//Checkbox

document.addEventListener("DOMContentLoaded", function () {
  const headerCheckbox = document.querySelector(
    "th.amp input[type='checkbox']"
  );
  const checkboxes = document.querySelectorAll("tbody input[type='checkbox']");

  // Function to handle click event on the header checkbox
  function toggleCheckboxes() {
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = headerCheckbox.checked;
    });
  }

  // Add event listener to the header checkbox
  headerCheckbox.addEventListener("click", toggleCheckboxes);
});
