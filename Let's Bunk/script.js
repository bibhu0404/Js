document.getElementById('btn-submit').addEventListener('click', () => {
  const totalClasses = parseInt(document.querySelector('.cc-input').value);
  const attendedClasses = parseInt(document.querySelector('.cp-input').value);
  const requiredPercentage = parseInt(document.querySelector('.btns-percent .active').innerText);

  if (isNaN(totalClasses) || isNaN(attendedClasses) || isNaN(requiredPercentage)) {
      alert('Please enter valid numbers and select a required percentage.');
      return;
  }

  const currentPercentage = (attendedClasses / totalClasses) * 100;
  let message = `Your current attendance is ${currentPercentage.toFixed(2)}%. `;

  if (currentPercentage >= requiredPercentage) {
      const maxBunkable = Math.round((100/requiredPercentage*attendedClasses)-totalClasses);
      message += `You can bunk ${maxBunkable} more classes.`;
  } else {
      const minAttend = Math.round((requiredPercentage*totalClasses/100-attendedClasses)/(1-requiredPercentage/100));
      message += `You need to attend ${minAttend} more classes to reach ${requiredPercentage}%.`;
  }

  document.querySelector('.resultPage').innerText = message;
});

document.querySelectorAll('.btns-percent button').forEach(btn => {
  btn.addEventListener('click', () => {
      document.querySelectorAll('.btns-percent button').forEach(button => button.classList.remove('active'));
      btn.classList.add('active');
  });
});
