// Function to handle the "Mark as Finished" button click event
function markAsFinished(event) {
    event.preventDefault();
  
    // Create a popup container
    const popupContainer = document.createElement('div');
    popupContainer.id = 'popup-container';
  
    // Create a popup form
    const popupForm = document.createElement('form');
    popupForm.id = 'popup-form';
  
    // Add form elements
    popupForm.innerHTML = `
      <h3>Add Rating, End Date, and Review</h3>
      <label for="rating">Rating:</label>
      <input type="number" id="rating" name="rating" min="1" max="5" required>
      <br>
      <label for="end-date">End Date:</label>
      <input type="date" id="end-date" name="end-date" required>
      <br>
      <label for="review">Short Review:</label>
      <textarea id="review" name="review" rows="4" cols="3  0" required></textarea>
      <br>
      <button type="submit">Submit</button>
      <button type="button" onclick="closePopupForm()">Cancel</button>
    `;
  
    // Append form to the container
    popupContainer.appendChild(popupForm);
  
    // Add the container to the body
    document.body.appendChild(popupContainer);
  
    // Handle form submission
    popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Get form values
      const rating = document.getElementById('rating').value;
      const endDate = document.getElementById('end-date').value;
      const review = document.getElementById('review').value;
  
      // Process the form data (e.g., save the data, update the book card, etc.)
      console.log('Rating:', rating);
      console.log('End Date:', endDate);
      console.log('Short Review:', review);
  
      // Close the form
      closePopupForm();
    });
  }
  
  // Function to close the popup form
  function closePopupForm() {
    const popupContainer = document.getElementById('popup-container');
    if (popupContainer) {
      document.body.removeChild(popupContainer);
    }
  }
  
  // Attach the click event listener to all "Mark as Finished" buttons
  const finishedButtons = document.querySelectorAll('.finished-button');
  finishedButtons.forEach((button) => {
    button.addEventListener('click', markAsFinished);
  });  