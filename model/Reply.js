/**
 * Created by Administrator on 2017/5/10.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortid = require('shortid')
const ReplySchema = new Schema({
    _id:{
        type:String,
        default:shortid.generate,
        unique:true
    },
    //回复谁
    author_id:{
        type:String,
        ref:'User'
    },
    //回复哪篇文章
    article_id:{
        type:String,
        ref:'Article'
    },
    //回复时间
    createtime:{
        type:Date,
        default:Date.now
    },
    //回复的内容
    reply_content:{
        type:String,
    },

})


const Reply = mongoose.model('Reply',ReplySchema);
moudle.exports = Reply;