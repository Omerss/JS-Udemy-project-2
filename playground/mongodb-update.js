
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to db server');
    }
    console.log('connected to MongoDB sever');

    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5addce9066202ffdaaf5c8bf")
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // })
    //     .then((res) => {
    //         console.log(res);
    //     });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5ade0c5df1d4515999b20f9e")
    },{
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    })
        .then((res) => {
            console.log(res);
        });
});


