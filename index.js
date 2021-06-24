const mongoose = require("mongoose")
const Person = require('./Person');
require('dotenv/config')


//Connect to Database
const mongoString = "mongodb+srv://marwaza:marwago@cluster0.j4zmy.mongodb.net/Persondb?retryWrites=true&w=majority"

mongoose.connect(mongoString, {useNewUrlParser: true})

mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})

// Create and Save a Record of a Model

 /*const person = new Person({
    name:'marwa',
    age:29,
    favoriteFoods:['Pizza']
 })

  person.save(function(err,data){
    if (err){console.log(err)
    } else console.log(data)
}) */

//Create Many Records with model.create()

 /*Person.create([{name:"nermine",age:28,favoriteFoods:['sandwich']},
{name:"wafa",age:30,favoriteFoods:['crepe']},
{name:"karama",age:27,favoriteFoods:['spaghetti']},
{name:"beya",age:26,favoriteFoods:['koskous']}]) */

//Use model.find() to Search Your Database

 /*Person.find({name:'wafa'})
.exec(function(err,data){
    if (err){console.log(err)
    } else console.log(data)
}) */

//Use model.findOne() to Return a Single Matching Document from Your Database

 /*Person.findOne({favoriteFoods:'koskous'})
.exec(function(err,data){
  if (err){console.log(err)
} else console.log(data)
}) */

//Use model.findById() to Search Your Database By _id

/*Person.findById({_id:"60d386591ab5301e308a0b14"},
 function (err, data) {
    if (err){
     console.log(err)
   } else console.log(data)
}); */

//Perform Classic Updates by Running Find, Edit, then Save

/*Person.findById({_id:"60d386591ab5301e308a0b15"},
function (err, data) {
  if (err){
    console.log(err)
  } else {data.favoriteFoods.push('hamburger');data.save();
    console.log(data)}
})*/

// Perform New Updates on a Document Using model.findOneAndUpdate()

/*Person.findOneAndUpdate({name:"karama"}, {age:20},{new:true}, function (err, data) {
    if (err){
      console.log(err)
    } else console.log(data)
}); */ 

// Delete One Document Using model.findByIdAndRemove

/*Person.findByIdAndRemove({_id:"60d386591ab5301e308a0b16"}, function (err, data) {
    if (err){
      console.log(err)
    } else console.log(data)
}); */


//Delete Many Documents with model.remove()

/*Person.remove({name:"wafa"},function (err, data) {
    if (err){
      console.log(err)
    } else console.log(data)
});*/

//Chain Search Query Helpers to Narrow Search Results

/*Person.find({favoriteFoods:'sandwich'}).sort({name:1}).limit(2).select("-age").exec(done=(err, data)=>{
    if (err){
      console.log(err)
    } else {console.log(data)}
})*/