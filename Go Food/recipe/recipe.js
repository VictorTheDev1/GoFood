function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const productCards = document.querySelectorAll('.card');

    productCards.forEach(card => {
        const title = card.querySelector('.title').textContent.toLowerCase();
        const desc = card.querySelector('.desc').textContent.toLowerCase();

        if (title.includes(searchInput) || desc.includes(searchInput)) {
            card.style.display = 'block'; // Show matching card
        } else {
            card.style.display = 'none'; // Hide non-matching card
        }
    });
}

const readLaterItems = new Map(); // Map to store items (title and link)

function addToReadLater(title) {
    const cartCount = document.getElementById("cartCount");

    // Check if the item is already added
    if (!readLaterItems.has(title)) {
        // Add the item to the map (fallback to product-details.html)
        const generatedLink = `/product-details.html?name=${encodeURIComponent(title)}`;
        readLaterItems.set(title, generatedLink);

        // Update the badge count
        cartCount.textContent = readLaterItems.size;

        // Refresh the dropdown
        updateCartDropdown();
    } else {
        alert(`${title} is already in your Read Later list!`);
    }
}

function toggleCart() {
    const dropdown = document.querySelector(".dropdown11");

    // Toggle dropdown visibility
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function removeItem(title) {
    const cartCount = document.getElementById("cartCount");

    // Remove the item from the map
    if (readLaterItems.has(title)) {
        readLaterItems.delete(title);

        // Update the badge count
        cartCount.textContent = readLaterItems.size;

        // Refresh the dropdown
        updateCartDropdown();
    }
}

function updateCartDropdown() {
    const dropdown = document.querySelector(".dropdown11");

    // Clear the dropdown content
    dropdown.innerHTML = "";

    // Populate the dropdown with items in the map
    readLaterItems.forEach((link, title) => {
        // Create list item container
        const itemDiv = document.createElement("div");
        itemDiv.className = "dropdown-item";

        // Add the link to the item
        const itemLink = document.createElement("a");
        itemLink.href = link;
        itemLink.target = "_blank";
        itemLink.textContent = title;

        // Add the remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        removeButton.addEventListener("click", () => removeItem(title));

        // Append the link and remove button to the item container
        itemDiv.appendChild(itemLink);
        itemDiv.appendChild(removeButton);

        // Add the item container to the dropdown
        dropdown.appendChild(itemDiv);
    });
}
function updateCartDropdown() {
    const dropdown = document.querySelector(".dropdown11");

    // Clear the dropdown content
    dropdown.innerHTML = "";

    // Populate the dropdown with items in the map
    readLaterItems.forEach((link, title) => {
        // Create list item container
        const itemDiv = document.createElement("div");
        itemDiv.className = "dropdown-item";

        // Add the link to the item
        const itemLink = document.createElement("a");
        itemLink.href = "#";
        itemLink.textContent = title;
        itemLink.addEventListener("click", () => {
            // Populate the search input and trigger the search
            const searchInput = document.getElementById('searchInput');
            searchInput.value = title;
            searchProducts();
        });

        // Add the remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        removeButton.addEventListener("click", () => removeItem(title));

        // Append the link and remove button to the item container
        itemDiv.appendChild(itemLink);
        itemDiv.appendChild(removeButton);

        // Add the item container to the dropdown
        dropdown.appendChild(itemDiv);
    });
}






// Handle Star Rating Selection
const stars = document.querySelectorAll('.rating .star');
const ratingInput = document.getElementById('rating-input');
const formResponse = document.getElementById('form-response');
const popup = document.getElementById('ratingPopup');
const closePopup = document.getElementById('closePopup');

// Open Popup after 20 seconds
setTimeout(() => {
    popup.style.display = 'block';
}, 15000);

// Close Popup
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Star Selection Logic
stars.forEach((star) => {
    star.addEventListener('click', () => {
        const value = star.getAttribute('data-value');
        ratingInput.value = value; // Set rating value in hidden input

        // Highlight selected stars
        stars.forEach((s, i) => {
            if (i < value) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
});

// AJAX Form Submission
document.getElementById('ratingForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    if (!ratingInput.value) {
        formResponse.style.color = 'red';
        formResponse.textContent = ' Please select a rating before submitting.';
        return;
    }

    const formData = new FormData(this);

    try {
        const response = await fetch('https://formsubmit.co/ajax/moradeyovictor@gmail.com', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            formResponse.style.color = 'green';
            formResponse.textContent = ' Rating and Feedback Submitted Successfully!';
            this.reset(); // Reset the form
            ratingInput.value = ''; // Clear the rating input
            stars.forEach(s => s.classList.remove('active')); // Clear star selection
        } else {
            formResponse.style.color = 'red';
            formResponse.textContent = ' Submission Failed. Please try again.';
        }
    } catch (error) {
        formResponse.style.color = 'red';
        formResponse.textContent = ' An error occurred. Please try again later.';
    }
});
