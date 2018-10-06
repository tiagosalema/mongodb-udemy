const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    
    if (err) {  return console.log('Unable to connect to mongodb server, my friend!', err)  };
    console.log('Connected to MongoDB server.');
    
    const db = client.db('TodoApp');
    
    db
    .collection('My collection :)')
    .insertOne({
        text: "Yeiiii it's a collection!",
        value: 6666,
        bolean: true
    }, (err,result) => {
        if (err) {  return console.log('Could not insert your collection, buddie...')}
        console.log(JSON.stringify(result.ops, null, 2));   
    });

    client.close();
});