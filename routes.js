const express = require('express');
const router = express.Router();
const home = require('./routes/home')

//首页
//使用home里的index方法
router.get('/',home.index)



module.exports = router;

