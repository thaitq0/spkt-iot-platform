'use strict';

mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
var mongodbURI = 'mongodb://myUserAdmin:abc123@172.17.0.14:27017'
//process.env.MONGO_URL || process.env.MONGODB_URI;

if (mongodbURI) {
  console.log('Data sources: Using MongoDB config', mongodbURI);
  module.exports = {
    mongodb: {
      url: mongodbURI,
      name: 'mongodb',
      connector: 'mongodb'
    }
  };
}
