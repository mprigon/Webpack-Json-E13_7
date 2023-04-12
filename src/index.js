// index.js - точка входа, основной файл js
import './style.css';
import _ from 'lodash';
import './requestGet.js';
//обновляемый модуль при включенном HMR
import printMe from './print.js';

import { useRequestGET } from './requestGet.js';
// import { displayResult } from "./requestGet.js";


// создает div элемент с заданным id
function componentDiv(tagId) {
  const element = document.createElement('div');
  element.id = tagId;
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello,', 'webpack is working!'], ' ');
  element.classList.add('result');
  return element;
}

// создает кнопку с заданными надписью и id
function componentButton(textOnButton, buttonId) {
    const element = document.createElement('button');
    element.id = buttonId;
    element.innerHTML = textOnButton;
    element.classList.add('btn');
    return element;
}

document.body.appendChild(componentButton('Запросить список','btnRequestGet'));
document.body.appendChild(componentDiv('resultGet'));
document.body.appendChild(componentDiv('resultGetAllNames'));

// document.body.innerHTML = '<div class="base">Hello from CSS Modules.</div>';

// Ищем кнопку, по нажатии на которую будет GET запрос
const btnNode = document.getElementById('btnRequestGet');
// Ищем тег для вставки результата GET запроса - JSON
const resultNode = document.getElementById('resultGet');
// Ищем тег для вставки GET запроса, туда выведем строку список
// всех имен
const resultNodeJSON = document.getElementById('resultGetAllNames');

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', () => {
  useRequestGET('http://localhost:3000/people', resultNode, resultNodeJSON);
})

// обновляемый модуль в режиме development 
// при включенном HMR
if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module! New text added,..');
    printMe();
  })
}
