// GET запрос к бэкэнду - json серверу, - при нажатии на кнопку,
// результат выводится в область div на странице и в консоль
// JSON и объект

/*
Функция-обертка над XMLHttpRequest, осуществляющая GET запрос
url, по которому будет осуществляться запрос
callback - функция, которая вызовется при успешном выполнении
и первым параметром получит объект-результат запроса
*/

export function useRequestGET(url, resultNode1, resultNode2) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

  xhr.onload = function() {
    if (xhr.status !== 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const responseObj = xhr.response;
      console.log(responseObj);
      const result = JSON.stringify(responseObj);
      console.log(`Ответ сервера JSON ${result}`);
      console.log(`Ответ сервера object ${responseObj}`);
  
      resultNode1.innerHTML = 'JSON:' + JSON.stringify(responseObj);
      
      if (resultNode2) {
        let allNames = 'Список имен всех лиц: '
        for (let i=0; i < responseObj.length; i++) {
          allNames += responseObj[i].name + '; ';
        }
        allNames += 'Получено имен лиц: ' + responseObj.length;
        resultNode2.innerHTML = allNames;
        console.log(`Список имен: ${allNames}`);
      }
    }
  };

  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
      
  xhr.send();
};
