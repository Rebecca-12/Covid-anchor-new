const mongoose = require("mongoose");

const Schema =mongoose.schema({
    ip:{type:String,required=true},
    cookie:{type:String,required=true}, 
})

const  view = new Schema()

const schema =new schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    image:{type:String,default:"/img/default-story.jpg"},
    views:{type:[view],default:[]},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:null},
});

const story =mongoose.model("Story", storySchema);

module.exports = story;