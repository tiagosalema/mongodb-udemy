const { MongoClient, ObjectID: id } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    
    if (err) {  return console.log('Unable to connect to mongodb server, my friend!', err)  };
    console.log('Connected to MongoDB server.');
    
    const db = client.db('TodoApp');
    
    db
    .collection('Users')
    .findOneAndUpdate(
        { _id: id('5bb788226663f80c307442f7') },
        {
          $inc: {
            age: 1
          } 
        },
        { returnOriginal: false }
    )
    .then((result) => {
        console.log(result);
    })

    // client.close();
});