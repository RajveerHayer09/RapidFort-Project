const express = require('express');
const upload = require('express-fileupload');

const app = express();

app.use(upload());

const port = 3000;

app.get('/',(req,res)=> {
    // console.log("a");
    res.sendFile(__dirname + '/index.html' )
})

app.post('/', (req,res) => {
    // console.log("b");
    if(req.files){
        console.log("dass");
        console.log(req.files);
        var file = req.files.file;
        var filename = file.name;
        var type = file.mimetype;
        var size = file.size;
        var str = `<h1>Details of the uploaded file are: </h1>Filename = ${filename} <br>size = ${size} bytes <br>type = ${type}`;
        // console.log(str); // no line breaks in console because of the way <br> tag is treated in javascript and html is different
        console.log(`Filename = ${filename}`);  //so to have line breaks we need to write like this here
        console.log(`Size = ${size} bytes`);
        console.log(`Type = ${type}`);
        res.send(str );
    }
})
app.listen( port , ()=> {
    console.log('Server is running');
})