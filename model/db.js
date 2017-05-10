/**
 * Created by Administrator on 2017/5/9.
 */

//连接数据库
const mongoose = require('mongoose');
const setting = require('../setting');
//这句话说明我们使用的promise对象是ES6原生的promise对象
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${setting.host}/${setting.db}`);


const DbSet = {
    //新增操作
    addOne: (obj, req, res, logMsg) => {
        let obj = new obj(req.body);
        obj.save().then(result => {
            res.end(logMsg)
        }).catch(err => {
            res.end(err)
        })
    },
    //删除操作
    delOne: (obj, req, res, logMsg) => {
        let params = url.parse(req.url, true)
        let targetId = params.query.id
        obj.remove({id: targetId}).then(result => {
            res.end(logMsg)
        }).catch(err => {
            res.end(err)
        })
    },
    //修改操作
    updateOne: (obj, req, res, logMsg) => {
        let params = url.parse(req.url, true)
        let targetId = params.query.id
        req.body.updateDate = new Date()
        let update = {$set: req.body}
        obj.update({_id: targetId}).then(result => {
            res.end(logMsg)
        }).catch(err => {
            res.end(err)
        })
    },
    //查询操作
    findOne: (obj, req, res, logMsg) => {
        let params = url.parse(req.url, true);
        let targetId = params.query.id;
        obj.findOne({_id: targetId}).then(result => {
            res.json(result)
        }).catch(err => {
            res.end(err)
        })
    },
    //查询所有的
    findAll:(obj, req, res, logMsg)=>{
        obj.find({}).then(result => {
            res.json(result)
        }).catch(err => {
            res.end(err)
        })
    }

}
module.exports = DbSet;
