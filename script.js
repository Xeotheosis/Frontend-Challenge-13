
  // Get the necessary elements
  const emailInput = document.getElementById('input');
  const errorElement = document.getElementById('error');
  const heading = document.getElementById("h1");
  const heading2 = document.getElementById("h2");

  // Add event listener for button click
  document.querySelector('button').addEventListener('click', validateEmail);

  // Function to validate email address
  function validateEmail(event) {
    event.preventDefault(); // Prevent form submission

    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      // Valid email address
      errorElement.style.display = 'none';
      emailInput.style.borderColor = '';
      heading.innerHTML = ("Congratulations!");
      heading2.innerHTML = ("You are now subscribed.")
      // Continue with form submission or other actions
    } else {
      // Invalid email address
      errorElement.style.display = 'block';
      emailInput.style.borderColor = 'red';
    }
  }

