const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const emailRouter = require("./routes/email");

app.use(cors());
app.use(express.json());

app.use("/api", emailRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 백엔드 서버 실행 중: http://localhost:${PORT}`);
});
