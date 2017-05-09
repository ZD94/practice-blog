//首页的所有请求都写在这
//暴露index方法
exports.index = (req,res,next) =>{
    res.render('index',{
        title:'我的首页',
    })

}