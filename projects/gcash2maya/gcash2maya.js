const inputMoneyOriginal = document.querySelector('#moneyOriginal');
const inputMoneyGcash = document.querySelector('#moneyGcash');
const inputMoneyMaya = document.querySelector('#moneyMaya');
const buttonConvert = document.querySelector('#convert');

buttonConvert.addEventListener('click', () => {
  if (!inputMoneyOriginal.value == '') {
    gcash2maya();
  }
});

// eslint-disable-next-line require-jsdoc
function gcash2maya() {
  const moneyOriginal = inputMoneyOriginal.value;

  const rate = 0.01;
  const transferFee = 15;

  const fee1 = moneyOriginal * rate;

  const moneyGcash = moneyOriginal - fee1;

  const moneyMaya = moneyGcash - transferFee;

  const moneyLost = fee1 + transferFee;

  inputMoneyGcash.value = moneyGcash;
  inputMoneyMaya.value = moneyMaya;

  console.log(`You lost ${moneyLost}`);
}
