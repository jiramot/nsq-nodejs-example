docker run --name nsqd -p 4150:4150 -p 4151:4151 nsqio/nsq /nsqd --broadcast-address=192.168.99.100  --lookupd-tcp-address=192.168.99.100:4160
