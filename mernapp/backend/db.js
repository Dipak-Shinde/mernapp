// const mongoose = require('mongoose');
// const mongoURI =" mongodb://dipakshinde:Dipak7666@ac-hpezpcj-shard-00-00.jkdhfuo.mongodb.net:27017,ac-hpezpcj-shard-00-01.jkdhfuo.mongodb.net:27017,ac-hpezpcj-shard-00-02.jkdhfuo.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-1454by-shard-0&authSource=admin&retryWrites=true&w=majority"

// const mongoDB=async() =>{
// await mongoose.connect(mongoURI,{useNewUrlParser:true},(err,result)=>{
//     if(err) console.log("---",err)
//     else{
//     console.log("connected");
//     const fetched_data =  mongoose.connection.db.collection("food_items");
//     fetched_data.find({}).toArray(function(err,data){
//         if(err) console.log(err)
//         else console.log(data)
//     })
//     }
// });
// }
// module.exports = mongoDB;