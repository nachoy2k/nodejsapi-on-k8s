const express = require("express")
const fs = require('fs');
var os = require("os");

const app = express()

const port = 3000;

//Date
var dateObject = new Date();
const date = (`0 ${dateObject.getDate()}`).slice(-2);
const month = (`0 ${dateObject.getMonth() + 1}`).slice(-2);
const year = dateObject.getFullYear();
const hours = dateObject.getHours();
const minutes = dateObject.getMinutes();
const seconds = dateObject.getSeconds();
var printdate = (`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`);

//Hostname
var hostname = os.hostname();

//Engine version
const version = process.version
var printversion = (`nodejs-${process.version}`)

//getIP
//var requestIp = request.socket.remoteAddress
var requestIp = require('request-ip');


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});

app.get('/', function (req, res){
    var clientIp = requestIp.getClientIp(req);
    var printdataobj = {
        timestamp: printdate,
        hostname: hostname,
        engine: printversion,
        visitorip: clientIp
    };
    var data = JSON.stringify(printdataobj);
    //res.json({data})
    res.json({"timestamp": printdate, "hostname": hostname, "engine": printversion, "visitor ip": clientIp })
});





