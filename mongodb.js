// crud  create read update delete 
const mongodb = require('mongodb');
const MongoClient  = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL,{ useNewUrlParser:true},(error,client)=>{
    if(error){
       console.log('Cannot! Connect to Database');
    }else{
       console.log('Connect to Database');
    }

    const db = client.db(databaseName)
    



//    db.collection('users').insertMany([  
//       {
//           name: 'kaka',
//           age : 15
//       },{
//           name: 'kaka2',
//           age : 42
//       }
//    ],(error,result)=>{
//        if(error){
//         return console.log('Unable to insert user')
//        }
//        console.log(result.ops);
//    })


    // db.collection('users').insertOne({
    //     name: 'Kong',
    //     age: 27
    // }, (error, result) =>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops);
    // })

    db.collection('task').insertMany([
      {
          description: ' Cut Tree',
          completed: true
      },      {
        description: 'Drive car',
        completed: true
    },   {
        description: 'eat matn ',
        completed: true
    }
    ],(error, result) =>{
       if(error){
        return console.log('Unable to insert Task')
       }

       console.log(result.ops);
    })


})