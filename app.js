// // Import dependencies modules:
// const express = require('express')

// // Create an Express.js instance:
// const app = express()

// //config Express.js
// app.use(express.json())
// app.set('port', 3000)
// app.use ((req,res,next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

//     next();
// })

// //connect to MongoDB
// const MongoClient =  require('mongodb').MongoClient;
//     let db;
//     MongoClient.connect('mongodb+srv://deathgamer:mauryan10@cluster0.q61xmdp.mongodb.net/'/*'mongodb+srv://ak2650:uni123@cluster0.rthvzm3.mongodb.net'*/, (err, client) => {
//         //console.log('db connected')
//     db = client.db('appstore')
// })

// //display a message for root path to shwow that API is working
// app.get('/', (req, res, next) =>{
//     res.send('Select a collection, e.g., /collection/messages')
// })

// // get the collection name
// app.param('collectionName', (req, res, next, collectionName)=> {
//     req.collection = db.collection(collectionName)
//      console.log('collection name:', req.collection)
//     return next()
// })

// //retreive all the objects from a collection
// app.get('/collection/:collectionName', async (req, res, next) => {
//   //  console.log(req.params);
//    // console.log(req.collection.collectionName)
//     //let inserted  = await req.collection.deleteMany({this : 'test', 'is': 1});
//     //console.log(inserted);
//     let results = await req.collection.find({}).toArray();
//     //console.log('results', results);
//     res.send(results);/*(e, results) =>{
//         console.log('results', results, e);
//        // if (e) return next(e)
//         res.send(results)
//     })*/
// })
// //adding POST
// app.post('/collection/:collectionName', (req, res, next) => {
//     req.collection.insert(req.body, (e, results) =>{
//         if (e) return next(e)
//         res.send(results.ops)
//     })
// })
// // retreiving product from objectID from Mongo Compass
// const ObjectID = require('mongodb').ObjectID;
// app.get('/collection/:collectionName/:id' , (req, res, next) => {
//     req.collection.findOne({ _id: new ObjectID(req.params.id)}, (e, result) =>{
//         if (e) return next(e)
//         res.send(result)
//     })
// })

// app.put('/collection/:collectionName/:id', (req, res, next) => {
//     req.collection.insert(req.body, (e,results) =>{
//         if (e) return next (e)
//         res.send(result)
//     })
// })
// app.put('/collection/:collectionName/:id',(req,res,next)=>{
//     req.collection.update(
//         {_id: new ObjectID(req.params.id)},
//         {$set: req.body},
//         {safe:true,multi:false},
//         (e,result) => {
//             if (e) return next(e)
//             res.send((result.result.n === 1)?{msg:'success'}:{msg:'error'})
//         }
//     )
// })

// app.delete('/collection/:collectionName/:id', (req, res, next) => {
//     req.collection.deleteOne(
//         {_id : ObjectID(req.params.id) } , (e, result) => {
//             if (e) return next(e)
//             res.send((result.result.n === 1) ? {msg: 'success'} :{msg: 'error'})
//         })
// })
// app.get('/collection/:collectionName/:id', (req,res,next) => {
//     req.collection.findOne({ _id: new ObjectID(req.params.id)}, (e,result) => {
//         if (e) return next(e)
//         res.send(result)
//     })
// })
// const port = process.env.PORT || 3000;
// app.listen(3000, () => {
//     console.log("server running at Port 3000");
// })