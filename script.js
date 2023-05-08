  // Replace YOUR_WEB_APP_URL with the URL of your Google Apps Script Web App
const webAppUrl = "https://script.google.com/macros/s/AKfycbyPX3H8GS5oE2_RIEE4JBYG89iR8KrjbwVPsBjnK6wvdYxZzHFQiqWrnRBMe8jLjXHrvA/exec";

function submitEmail() {
  const email = document.getElementById("email").value;
  if (email) {
    fetch(webAppUrl, {
      method: "POST",
      body: JSON.stringify({ email: email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          document.getElementById("email-form").innerHTML =
            "Thank you for joining the waitlist!";
        } else {
          alert("Error submitting your email. Please try again.");
        }
      })
      .catch((error) => {
        alert("Error submitting your email. Please try again.");
      });
  } else {
    alert("Please enter your email address.");
  }
}
