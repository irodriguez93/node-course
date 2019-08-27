// const mongdb = require('mongodb')

// const MongoClient = mongdb.MongoClient
// const ObjectID = mongodd.ObjectID
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


///console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser: true,useUnifiedTopology: true} , (error, client) =>{
    if (error){
        return console.log('unable to connect to database')
    }
    const db = client.db(databaseName)
    // db.collection('users').findOne({_id: new ObjectID("5d643b161cf5e30a53c11222")}, (error, response) => {
    //     if (error){
    //         return console.log('there was an error finding the collection')
    //     }
    //     console.log(response)
    // })
    // db.collection('users').find({age: 27}).toArray((error, response)=>{
    //     if (error){
    //         console.log('error unable to fo find users')
    //     }
    //     console.log(response)
    // })

    db.collection('tasks').findOne({_id: new ObjectID("5d6446ebb6c55d0d5ec17528")}, (error, response)=>{
        console.log(response)
    })
    db.collection('tasks').find({completed: false}).toArray((error, response)=>{
        console.log(response)
    })

})