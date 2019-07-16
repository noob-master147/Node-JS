//CRUD operations on mongodb

const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) =>{
    if (error) {
        return console.log('Unable to connect to the database')
    }
    const db = client.db(databaseName)

    db.collection('users').updateOne({
        _id: new ObjectID("5d2866130a8a942933aedbe2")
    }, {
        $set: {
            name: 'Andrew'
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })

})