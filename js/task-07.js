//Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
//и изменяет инлайн - стиль span#text обновляя свойство font - size.

let controlFont = document.getElementById("font-size-control");

let text = document.getElementById("text");

//В результате при перетаскивании ползунка будет меняться размер текста.
controlFont.oninput = function() {
  text.style.fontSize = controlFont.value + "px";
};