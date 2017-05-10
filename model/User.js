/**
 * Created by Administrator on 2017/5/10.
 */
//保存登录用户的信息
//建立User模型
const  mongoose = require('mongoose');
const shordid = require('shortid')
const  Schema = mongoose.Schema;
const UserSchema = new Schema({
        _id:{
            type:String,
            default:shordid.generate,
            unique:true//id经常会被查询，所以，把ID作为索引
        },
        //用户名
        name:{
            type:String,
            require:true
        },
        //密码
        password:{
            type:String,
            require:true,
        },
        //邮箱
        email:{
            type:String,
            require:false
        },
        //个性签名
        motto:{
            type:String,
            default:'这家伙懒得什么都没留下...'
        },
        //头像
        avater:{
            type:String,
            default:'/public/images/avatar.jpg'
        },
        //注册时间
        createtime:{
            type:Date,
            default:Date.now
        }



})

const User = mongoose.model('User',UserSchema)
module.exports = User