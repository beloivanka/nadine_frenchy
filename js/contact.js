const titleInput = document.getElementById("first-name");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("sendBtn");

const handleEmailRedirect = () => {
  const receiver = 'nadyafrenchy@gmail.com';
  const link = `https://mail.google.com/mail/u/0/?fs=1&to=${receiver}&su=${titleInput.value}&body=${messageInput.value}&tf=cm`;
  window.open(link, '_blank');
};
sendButton.addEventListener('click', handleEmailRedirect);
