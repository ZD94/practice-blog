/**
 * Created by Administrator on 2017/5/10.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortid = require('shortid')

const MessageSchema = new Schema({
    _id:{
        type:String,
        default:shortid.generate,
        unique:true
    },
    //留言的内容
    content:{
        type:String,
        require:true
    },
    //留言的时间
    createtime:{
        type:Date,
        default:Date.now
    },
    //留言的作者
    author:{
        type:String,
        ref:'User'//文章的作者
    },
    //回复某个人
    replyId:{
        type:String,
        ref:'Reply'
    },
    //留言对应的文章
    articleId:{
        type:String,
        ref:'Article'
    },
    //是否已读
    has_read:{
        type:Number,
        default:false
    }

})

const Message = mongoose.model('Message', MessageSchema)
module.exports = Message