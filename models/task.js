var mongoose = require("mongoose");

/*
Complete your other field here

1. "heading" should be a string and required
2. "description" should be a string and required
3. "status" should be a string and it can have only 2 values ('pending', 'done') and default should be pending
4. "creator_id" will be reference to user who have created this task (store the user id of creator).
5. Also Enable timestamps which will store the date of document created and updated.

*/


var taskSchema = mongoose.Schema({
  //Write your code here.
  task : {type : String, required : true},
  description : {type : String, required : true},
  status : {type : String, enum : ["pending", "done"], default : "pending"},
  creator_id : {
    type : String,
    user : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "User"
    }
  }
},
{ timestamps: true }
);


module.exports = mongoose.model("Task", taskSchema);;