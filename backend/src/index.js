const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const path = require('path')
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../uploads')));

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('DB connected successfully')
})
.catch(err => {
  console.error(err)
})

app.get('/', (req, res, next) => {
  setImmediate(() => {
    next(new Error())

  })
  // res.send('Hello 하세요!')
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message || '서버 에러가 발생했습니다.')
})


app.listen(4000, () => {
  console.log(`포트 ${port}번에서 실행되었습니다`)
});