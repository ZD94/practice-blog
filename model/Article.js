/**
 * Created by hama on 2017/5/10.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');
const ArticleSchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate,
        unique: true
    },
    //文章的标题
    title: {
        type: String,
        require: true
    },
    //文章的内容
    content: {
        type: String,
        require: true
    },
    //创建时间
    createtime: {
        type: Date,
        default: Date.now
    },
    //修改时间
    updatetime: {
        type: Date,
        default: Date.now
    },
    //标签
    tags: String,
    //点击量
    clickNum: {
        type: Number,
        default: 0,
        min: 0,
        max: 100000
    },
    //回复量
    commentNum: {
        type: Number,
        default: 0,
        min: 0,
        max: 100000
    },
    //作者,它应该一个user表中的数据
    author: {
        type: String,
        ref: 'User' //文章的作者
    },
    //文章的分类
    category: {
        type: String,
        ref: 'Category' //文章的分类
    }
})
const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article

