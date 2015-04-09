var askColl = require('./mongo').getCollection('goyoo_ask_1');
var tool = require('../util/tool');

/* 创建文章 */
exports.insert = function(obj, callback){
	obj._id = tool.generateUUID();
	obj.createTimestamp = new Date().getTime();
	obj.updateTimestamp = new Date().getTime();
	askColl.insert(obj, callback);
};

exports.getAll = function(info, sortStr, callback){
	askColl.find(info).sort({'createTimestamp':-1}).toArray(callback);
};