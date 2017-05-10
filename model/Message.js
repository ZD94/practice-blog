/**
 * Created by hama on 2017/5/10.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = requrie('shortid');
const MessageSchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate,
        unique: true
    },
    //留言的内容
    content: {
        type: String,
        require: true,
        default: '请输入留言的内容...'
    },
    //留言的时间
    createtime: {
        type: Date,
        default: Date.now
    },
    //留言的作者
    author: {
        type: String,
        ref: 'User' //关联用户表
    },
    //被回复人的ID
    replyAuthor: {
        type: String,
        ref: 'User'
    },
    //是不是针对某条留言进行回复的.
    relationMsgId: String,
    //留言的对应文章
    article_id: {
        type: String,
        ref: 'Article'
    },
    //点赞
    praiseNum: {
        type: Number,
        default: 0
    }
})
const Message = mongoose.model('Message', MessageSchema);
module.exports = Message
