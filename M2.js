let sum1 = +document.getElementById('sum1').value;
let monthlycredit = +document.getElementById('monthlycredit').value;
let percent = +document.getElementById('percent').value;
let period = +document.getElementById('period').value;
let error = document.getElementById('error');
let button = document.getElementById('calculate');
button.addEventListener('click', check);

function calculateSum(sum1, monthlycredit, percent, period) {
   let balance = sum1;
   let time = Math.floor(period / 30);
   for (i = 0; i < time; i++) {
      balance = balance * (1+ percent/100/12) + monthlycredit;
   }
   alert('Баланс будет равен ' + balance);
}
function check() {
   if (sum1 > 0 && monthlycredit >= 0 && percent < 100 && percent > 0 && period> 0 && Number.isInteger(period)) {
      calculateSum(sum1, monthlycredit, percent, period);
   }
   if (sum1 <= 0 || isNaN(sum1)) {
      console.log('Ошибка в первой строке');
      error.insertAdjacentHTML('beforeend', '<p>Ошибка в первой строке</p>');
   }
   if (monthly < 0 || isNaN(monthlycredit)) {
      console.log('Ошибка во второй строке');
      error.insertAdjacentHTML('beforeend', '<p>Ошибка во второй строке</p>');
   }
   if (percent <= 0 || isNaN(percent)) {
      console.log('Ошибка в третьей строке');
      error.insertAdjacentHTML('beforeend', '<p>Ошибка в третьей строке</p>');
   }
   if (period <= 0 || isNaN(period) || !Number.isInteger(period)) {
      console.log('Ошибка в четвертой строке');
      error.insertAdjacentHTML('beforeend', '<p>Ошибка в четвертой строке</p>');
   }
}
