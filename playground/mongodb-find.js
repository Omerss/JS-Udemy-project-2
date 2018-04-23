const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to db server');
    }
    console.log('connected to MongoDB sever');

    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5adda55b4178fe1e78e248ee')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // });

    db.collection('Users').find({name:'Omer'}).toArray().then((docs) => {
        console.log('users named omer', docs);
    }, (err) => {
        console.log('Unable to fetch todos', err)
    });

    // client.close()
});