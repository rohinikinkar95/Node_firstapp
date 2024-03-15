const mongodb = require('mongodb');
const mongoose = require('mongoose');
const MongoClient = mongodb.MongoClient;


let _db;


const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://rokglobaliasoft:D1Ii2FvtnjoKD05M@cluster0.8mtjjdp.mongodb.net/Datadb')
        .then(client => {
            console.log('connected!!..................')
            _db = client.db()
            callback(client);
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};


const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;