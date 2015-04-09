var askColl = require('./mongo').getCollection('goyoo_ask');
var tool = require('../util/tool');

/* 创建文章 */
exports.insert = function(obj, callback){
	obj._id = tool.generateUUID();
	obj.createTimestamp = new Date().getTime();
	obj.updateTimestamp = new Date().getTime();
	askColl.insert(obj, callback);
};
