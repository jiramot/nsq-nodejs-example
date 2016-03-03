#publish to nsqd
curl -d 'hello world 1' 'http://127.0.0.1:4151/put?topic=test'
