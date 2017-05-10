/**
 * Created by Administrator on 2017/5/10.
 */
const mongoose = require('mongoose');
const shortid = require('shortid')
const Schema = mongoose.Schema;
//然后进行实例化
const catSchema = new Schema({
    name: String,
    _id:{
        type:String,
        default:shortid.generate
    }
    //在这里，我们可以对这个模型的数据类型进行设置
})

const Cat = mongoose.model('cat', catSchema)
module.exports = Cat

