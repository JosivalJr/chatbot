export default {
  dialect: 'mysql',
  host: process.env.REACT_APP_DATABASE_HOST,
  port: process.env.REACT_APP_DATABASE_PORT,
  username: process.env.REACT_APP_DATABASE_USERNAME,
  password: process.env.REACT_APP_DATABASE_PASSWORD,
  database: process.env.REACT_APP_DATABASE_DATABASE
};