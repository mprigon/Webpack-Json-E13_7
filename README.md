### Модуль Е13.7 
#### выполнил Пригон Максим FPW-82
***
1. json-сервер (условный бэкэнд)
json-server --watch datadb/db.json
2. webpack-сервер (фронтэнд)
2.1. development mode:
npm run start
2.2. production mode:
npm run build
3. HMR
development mode отслеживается файл src/print.js
в папке dist создается bundle.js