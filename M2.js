let answer = document.getElementById('answer');
let button = document.getElementById('calculate');
let sum2 = 0;

function checkInfo() {
   let sum1 = +document.getElementById('sum1').value;
   let monthlyCredit = +document.getElementById('monthlycredit').value;
   let percent = +document.getElementById('percent').value;
   let per = +document.getElementById('period').value;
   let time = 0;

   if (sum1 > 0 && monthlyCredit >= 0 && percent < 100 && percent > 0 && per > 0 && Number.isInteger(per)){
      time = Math.floor(per / 30);
      calculator(sum1, monthlyCredit, percent, per, time);
      answer.innerHTML = `<p class='new-sum'>${calculator(sum1, monthlyCredit, percent, per, time)}</p>`;
  } else {
   console.error('NaN');
      answer.innerHTML = "<p class='error'>Неверные данные!</p>";
 }
 }



function calculator(sum1, monthlyCredit, percent, period, time) {

  sum2 = sum1;

   if (sum1 <= 0 || monthlyCredit < 0 || percent <= 0 && percent > 100 || period < 0) {
      answer.innerHTML = "<p class='error'>Неверные данные!</p>";
      return NaN;
   }

   for (let i = 0; i < time ; i++) {
      sum2 = sum2 * (1+ percent/100/12) + monthlyCredit;
      return Math.ceil(sum2);  
   }

}

button.addEventListener('click', checkInfo);
