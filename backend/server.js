require('dotenv').config(); // dotenv 설정

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 100000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('데이터베이스 연결 실패:', err);
  } else {
    console.log('MySQL 연결 성공');
  }
});

app.get('/', (req, res) => {
  res.send('Hello from backend');
});

app.listen(port, () => {
  console.log(`백엔드 서버 실행 중: http://localhost:${port}`);
});

module.exports = db;