const { MongoClient, ObjectID: id } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    
    if (err) {  return console.log('Unable to connect to mongodb server, my friend!', err)  };
    console.log('Connected to MongoDB server.');
    
    const db = client.db('TodoApp');
    
    db
    .collection('Todos')
    .find({_id: new id('5bb78830609bed22208244b4')})
    .toArray()
    .then((doc) => {
        console.log('Todos');
        console.log(JSON.stringify(doc,null,2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // client.close();
});