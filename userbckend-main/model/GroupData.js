const mongoose=require('mongoose');
const groupSchema=mongoose.Schema({
    grpname:String,
    subject:String,
    description:String

})
const GroupData=mongoose.model('groups',groupSchema);
module.exports=GroupData