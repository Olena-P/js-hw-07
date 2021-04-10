// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

const wrap_button = {
  sub: document.querySelector('[data-action="increment"]'),
  add: document.querySelector('[data-action="decrement"]'),
  span: document.querySelector('#value'),
  wrapper: document.querySelector('#counter'),
};


// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
let counterValue = 0;

// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
const increment = () => {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue;
};

// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
wrap_button.sub.addEventListener('click', increment);

wrap_button.add.addEventListener('click', decrement);