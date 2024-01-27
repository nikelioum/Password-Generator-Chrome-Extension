document.addEventListener('DOMContentLoaded', function() {
  const generatePasswordBtn = document.getElementById('generatePassword');
  const passwordElement = document.getElementById('password');
  const passwordLengthSelect = document.getElementById('passwordLength');

  if (generatePasswordBtn && passwordElement && passwordLengthSelect) {
    generatePasswordBtn.addEventListener('click', function() {
      const passwordLength = parseInt(passwordLengthSelect.value, 10);
      const password = generatePassword(passwordLength);
      displayPassword(password);
    });

    // Add click event listener to copy the password
    passwordElement.addEventListener('click', function() {
      copyToClipboard(passwordElement.innerText);
    });
  } else {
    console.error('Button, password element, or length dropdown not found.');
  }

  function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:'<>,.?/`~";
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }

    return password;
  }

  function displayPassword(password) {
    passwordElement.textContent = password;
  }

  function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Password copied to clipboard!');
  }
});
