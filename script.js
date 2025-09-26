document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Thank you for your message!');
    // Here, you can add functionality to send the form data to your email or a server
  } else {
    alert('Please fill in all fields.');
  }
});
