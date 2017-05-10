/**
 * Created by Administrator on 2017/5/10.
 */
const mongoose = require('mongoose')
const  Schema = mongoose.Schema
const shortid =require('shortid')
const  CategorySchema = new Schema({
        _id:{
            type:String,
            default:shortid.generate,
            unique:true
        },
        //分类的父级Id
        uid:{
            type:Number,
            default:0
        },
        //分类名称
        name:String
})
const Category = mongoose.model('Category',CategorySchema)
module.exports = Category


