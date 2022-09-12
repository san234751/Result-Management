const mongoose=require('mongoose');

const PostSchema=new mongoose.Schema({
    overall_rank: {type:String,required:true},
    Semester_Rank:{type:String,required:true},
    Registration_NO:{type:String,required:true},
    Subject1:{type:String,required:true},
    Subject2:{type:String,required:true},
    Subject3:{type:String,required:true},
    Subject4:{type:String,required:true},
    Subject5:{type:String,required:true},
    Subject6:{type:String,required:true},
    Subject7:{type:String,required:true},
    Subject8:{type:String,required:true},
    Subject9:{type:String,required:true},
    GP:{type:String,required:true},
    SGPA:{type:String,required:true},
    CGPA:{type:String,required:true}
});
module.exports=mongoose.model('csvfile',PostSchema);