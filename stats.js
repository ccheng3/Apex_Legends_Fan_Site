// Apex TRN Stats API Key: 5e138b69-83d9-4bb9-9e86-2ad8f15fa158
// to get kills --> data.segments[0].stats.kills.value
// to get avatar image --> data.platformInfo.avatarUrl

var http = require('http');

http.createServer(function (req, res) {
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.end('Hello world!');
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');