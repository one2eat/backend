const { DB_HOSTNAME, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const db = {
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOSTNAME,
  dialect: "mysql"
};
