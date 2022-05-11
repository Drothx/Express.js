window.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementsByTagName('form')[0];
  const message = document.getElementById('notifMessage');
  const messageInput = document.getElementById('message');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new URLSearchParams(new FormData(contactForm));
    
    fetch('http://127.0.0.1:5050/contact', {
      method: 'POST',
      body: data,
    })
      .then(response => {
        messageInput.value = '';
        return response.json();
      })
      .then(jsonResponse => {
        message.innerText = jsonResponse.message;
        setTimeout(() => {
          message.innerText = '';
        }, 3000);
      })
      .catch(error => {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error(error);
        };
      })
  })
});
