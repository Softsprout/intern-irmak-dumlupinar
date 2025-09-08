var http = require('http')
var log = require('./log.js')
var city= require('./exportsDemo.js')
var sayhello=require('./exportsDemo.js')
http.createServer(function(request,response){
    if(request.url=='/admin'){
        response.write('admin sayfası')
    }else{
        response.write('ana sayfa ')
    }
response.end('sayfa sonu')
}).listen(8000)
log.information('Bağlandı. ')
console.log(city)
console.log(sayhello())





