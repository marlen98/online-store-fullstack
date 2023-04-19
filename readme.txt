npm init -y (create standart package.json )

npm install 
express
 pg 
 pg-hstore 
 sequelize (свзка с базой данных)
 cors(отправка запросов с браузеров) 
 dotenv

npm install -D nodemon

1)в PgAdmin создали базу данных
2)ее параметры передали в .env
3)перенесли их в sequelize
4)и запустили sequelize в index.js

для генерации jwt token устанавливаем:
npm i jsonwebtoken bcrypt (для хэширования паролей,
чтобы не хранить их в бд в открытом доступе)
