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

