const { MongoClient, ObjectID: id } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    
    if (err) {  return console.log('Unable to connect to mongodb server, my friend!', err)  };
    console.log('Connected to MongoDB server.');
    
    const db = client.db('TodoApp');
    
    db
    .collection('Users')
    .find()
    .toArray()
    .then((doc) => {
        console.log('aqui vão eles:');
        doc.forEach(each => console.log(each.text));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // client.close();
});