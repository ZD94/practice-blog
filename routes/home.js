//首页的所有请求都写在这
//暴露index方法
const cat = require('../model/cat')
//暴露一个函数
exports.index = (req, res, next) => {
    //新增数据
    let whiteCat = new cat({name: 'whiteCat'})
    whiteCat.save()
        .then(result => {
            res.send(result)
        }).catch(err => {
        res.send(err)
    })


    //删除数据
    // let where = {name: 'whiteCat'}
    // cat.remove(where).then(result=>{
    //     res.send(result)
    // }).catch(err=>{
    //     res.send(err)
    // })


    //修改数据
    // let update = {name:'blueCat'}
    // cat.update({name:'whiteCat'},{$set:update}).then(result=>{
    //     res.send(result)
    // }).catch(err=>{
    //     res.send(err)
    // })

    //查询数据
    // cat.find({name:'blueCat'},['name']).then(result=>{
    //     res.send(result)
    // }).catch(err=>{
    //     res.send(err)
    // })
    //查询一条数据
    // cat.findOne({name:'blueCat'}).then(result=>{
    //     res.send(result)
    // }).catch(err=>{
    //     res.send(err)
    // })

}
