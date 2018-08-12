var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vvce', {
  useNewUrlParser: true
}, () => {
  console.log('connected to database')
})
mongoose.Promise = global.Promise;

var Student = require('../schema/studentSchema');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post('/api/enroll', (req , res, next) =>{
    Student.create(req.body).then((student) => {
        res.send(student);
    }).catch(next);
});

app.listen(3000 , () => {
    console.log(`server up at ${3000}`)
  });