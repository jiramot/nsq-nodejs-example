var nsq = require('nsqjs');

// read form nsqlookupd
var reader = new nsq.Reader('test', 'test_channel_1', {
  lookupdHTTPAddresses: '192.168.99.100:4161'
});

reader.connect();

reader.on('message', function (msg) {
  console.log('Received message [%s]: %s', msg.id, msg.body.toString());
  msg.finish();
});