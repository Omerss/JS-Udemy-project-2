const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to db server');
    }
    console.log('connected to MongoDB sever');

    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Users').deleteMany({name:'Omer'}).then((res) => {
    //     console.log(res);
    // });

    // deleteMany
    // db.collection('Todos').deleteOne({name:'eat lunch'}).then((res) => {
    //     console.log(res);
    // });

    // findOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5adda71444ef713dd8f12fde")}).then((res) => {
        console.log(res);
    });

// client.close()
});