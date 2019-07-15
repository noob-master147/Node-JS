//CRUD operation

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID =mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) =>{
    if (error) {
        return console.log('Unable to connect to the database')
    }
    const db = client.db(databaseName)

    db.collection('users').findOne({name: 'devang'}, (error, user) => {
        if(error) {
            return console.log('Unable to fetch')
        }

        console.log(user)
    })


})