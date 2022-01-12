const mongoose=require('mongoose');
const { Schema } = mongoose;


const notesSchema =new Schema({

title:{
    
type:"string",


required:true
},
desc:

{
type:"string",
required:true,


},

tag:

{
type:"string",
default:"general"


},

createDate:{
type:Date, 
    default:Date.now

}

});

module.exports=mongoose.model("notes", notesSchema);