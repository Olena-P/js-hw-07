//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

const inputVal = document.querySelector('#validation-input');

const lengthEl = inputVal.getAttribute('data-length');

inputVal.addEventListener('blur', eventList);

/*
ecли введено подходящее количество, то border инпута становится зеленым, 
если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.
*/
function eventList() {
  if (inputVal.value.length >= lengthEl) {
    inputVal.setAttribute('class', 'valid');
  } else if (inputVal.value === '') {
    inputVal.setAttribute('class', '');
  } else {
    inputVal.setAttribute('class', 'invalid');
  }
};
console.log(eventList);