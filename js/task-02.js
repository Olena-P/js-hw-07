//Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
console.log(ingredients);

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
const itemUl = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  return item;
});
console.log(itemUl);

//после чего вставит все li за одну операцию в список ul.ingredients.
const list = document.querySelector('#ingredients');
list.append(...itemUl);
console.log(list);