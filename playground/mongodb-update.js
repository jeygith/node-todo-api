// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

var user = {name: 'jeff', age: 26};

var {name} = user;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    // update todos
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5d417f8dc3e45f170954fcbb')
    },  {
        $set:{
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // update user collection
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5d417f8dc3e45f170954fcbc')
    },  {
        $set:{
            name: 'githinit'
        },
        $inc:{
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});