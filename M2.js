let sum1 = +document.getElementById('sum1').value;
let monthlyCredit = +document.getElementById('monthlycredit').value;
let percent = +document.getElementById('percent').value;
let period = +document.getElementById('period').value;
let error = document.getElementById('error');
let button = document.getElementById('calculate');

function check() {
   if (sum1 > 0 && monthlyCredit >= 0 && percent < 100 && percent > 0 && period> 0 && Number.isInteger(period)){
      calculator(sum1, monthlyCredit, percent, period);
      alert(calculator(sum1, monthlyCredit, percent, period));
  }
   else {
   console.error('NaN');
 }
}
   
function calculator(sum1, monthlyCredit, percent, period) {
   let time = Math.floor(period / 30);
   let sum2 = sum1;
if (sum1 <= 0 || monthlyCredit < 0 || percent <= 0 && percent > 100 || period < 0) {

   error.insertAdjacentHTML('beforeend', '<p>Неверные данные</p>');
   return NaN;
}
for (i = 1; i < time ; i++) {

   sum2 = sum2 * (1+ percent/100/12) + monthlyCredit;
}

return ( Math.ceil(sum2));

}

button.addEventListener('click', check);
