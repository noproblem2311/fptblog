import mysql2 from "mysql2";
import { config as configDotenv } from "dotenv";
configDotenv();
const DB_PORT = 30226;
const DB_HOST = "roundhouse.proxy.rlwy.net";
const DB_USER = "root";
const DB_PASS = "C-HE3c65dGd4456-Gc4abF3Hb4ChcFe-";
const MYSQL_DB = "fptblog";

export const db = mysql2.createConnection({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASS,
  database: MYSQL_DB,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to the database");
});
