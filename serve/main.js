var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*express允许跨域*/
app.all('*', function(req, res, next) {
    let cross = req.path == '/order';//用json处理跨域
    if(!cross){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1')
    }
    next();
    
});
/* 设置jsonp回调函数名称*/
app.set('jsonp callback name', 'cb');


//app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
	res.send('首页');

})
app.get('/news',function(req,res){
	res.json({"msg":'这是新闻数据'});

})
app.get('/order',function(req,res){
	res.jsonp({"msg":'这是jsonp返回的数据'});

})

app.post('/dologin',function(req,res){
 	res.json({"msg":'post成功'});
})



app.listen(8080,'127.0.0.1',()=>{
    console.log(`server run in http://localhost:8080`)
})