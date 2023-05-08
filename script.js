document.getElementById('waitlist-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const response = await fetch(event.target.action, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ parameter: data }),
  });

  if (response.ok) {
    const result = await response.json();
    if (result.result === 'success') {
      // Display success message
      alert('Thank you for joining the waitlist!');
      window.location.href = 'https://tally.so/r/wQM2QG';
    } else {
      // Display an error message
      alert('An error occurred. Please try again later.');
    }
  } else {
    // Display an error message
    alert('An error occurred. Please try again later.');
  }
});
