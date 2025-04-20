const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/email", (req, res) => {
  const { email } = req.body;
  const query = "INSERT INTO email (email) VALUES (?)";

  db.query(query, [email], (err, result) => {
    if (err) {
      console.error("DB 저장 오류:", err);
      return res.status(500).json({ message: "이미 등록된 이메일이거나 오류 발생" });
    }
    res.json({ message: "사전예약이 성공적으로 신청되었습니다." });
  });
});

module.exports = router;
