const express = require('express');
const app = express();



// 라우팅
const home = require('./routes/home') //   ./routes/home 주소에 있는 모든 자바스크립트 파일을 읽어와줘.

// 앱세팅

app.set("views", "./views");
app.set("view engine", "ejs");



app.use("/", home); //미들웨어 설정해주는 메서드 use

module.exports = app;