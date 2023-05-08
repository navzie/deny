document.getElementById('waitlist-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const response = await fetch(event.target.action, {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    const result = await response.json();
    if (result.result === 'success') {
      // Display success message
      alert('Thank you for joining the waitlist!');
    } else {
      // Display an error message
      alert('An error occurred. Please try again later.');
    }
  } else {
    // Display an error message
    alert('An error occurred. Please try again later.');
  }
});
