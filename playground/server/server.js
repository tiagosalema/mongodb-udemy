const express = require('express');
const bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());

const a= `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>a heading</h1>
    <p>some text</p>
</body>
</html>`;

app
  .post('/todos', (req,res) => {
    var todo = new Todo({
        text: req.body.text
    });
   
    todo
      .save()
      .then( doc => res.send(a), err => res.status(400).send(err) )
  });



app.listen( 3000, () => console.log('Started on port 3000') );

module.exports = {app};