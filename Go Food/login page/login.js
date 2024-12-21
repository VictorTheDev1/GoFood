function handleSubmit(event) {
    // Get the name input value
    const name = document.getElementById('name').value;

    // Redirect to website.html after form submission
    setTimeout(() => {
      window.location.href = `/website/website.html?name=${encodeURIComponent(name)}`;
    }, 500); // Delay to ensure form submission
  }