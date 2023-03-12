const moment = require('moment-timezone');
const Gt06 = require('../gt06');
const f = require('fs');
const readline = require('readline');
var user_file = './mar12log.txt';
var r = readline.createInterface({
    input: f.createReadStream(user_file)
});

r.on('line', function (text) {
    const location = new Buffer.from(text.substring(61), 'hex')
    var gt06 = new Gt06();
    gt06.parse(location);
    if (gt06.lat != undefined) {
        console.log(text);
        console.log("course: " + gt06.course + ", latitude: " + gt06.lat + ", longitude: " + gt06.lon, ", Fixtime:" + moment(gt06.fixTime).tz("Asia/Kathmandu").format());
        console.log('');
    }
});

