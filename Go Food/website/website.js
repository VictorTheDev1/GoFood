  // Extract the username from the query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('name');

  // Set the username dynamically
  if (username) {
    document.getElementById('username').textContent = username;
  } else {
    document.getElementById('username').textContent = "Guest";
  }


let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};

document.addEventListener("DOMContentLoaded", function () {
  const termsPopup = document.getElementById("termsPopup");
  const acceptBtn = document.getElementById("acceptBtn");

  // Check if the user has already accepted the terms
  if (localStorage.getItem("termsAccepted") === "true") {
      termsPopup.style.display = "none";
  }

  // Handle accept button click
  acceptBtn.addEventListener("click", function () {
      termsPopup.style.display = "none";
      localStorage.setItem("termsAccepted", "true");
  });
});

  document.addEventListener("DOMContentLoaded", function () {
    const termsPopup = document.getElementById("termsPopup");
    const closePopup = document.getElementById("closePopup");

    // Show the popup when the page loads
    termsPopup.style.display = "flex";

    // Close the popup when the button is clicked
    closePopup.addEventListener("click", function () {
      termsPopup.style.display = "none";
    });
  });
