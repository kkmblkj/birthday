function checkCombo() {
  const pass = '1981'; // Replace with your password
  const d1 = document.getElementById('digit1').value;
  const d2 = document.getElementById('digit2').value;
  const d3 = document.getElementById('digit3').value;
  const d4 = document.getElementById('digit4').value;

  const inputPass = d1 + d2 + d3 + d4;
  const errorEl = document.getElementById('lock-error');

  if (inputPass === pass) {
    errorEl.style.color = 'green';
    errorEl.textContent = 'Unlocked! Redirecting...';
    setTimeout(() => {
      window.location.href = 'birthday.html';
    }, 1500);
  } else {
    errorEl.style.color = 'red';
    errorEl.textContent = 'Try Again';
  }
}
