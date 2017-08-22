var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'public/uploads/' });
var port = process.env.PORT || 5000; 
var app = express();

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/', upload.any(), function (req, res, next) {
    var info = req.files[0].size
    res.json({"size of file in kB": info});
})

app.listen(port, function(){console.log('App is running at port: ', port)})