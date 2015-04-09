var ask = require('./module/ask');

exports.sumbit = function(req, res){
	var ask_1 = req.body.ask_1;
	var obj = {
		ask_1 : req.body.ask_1,
		ask_2 : req.body.ask_2,
		ask_3 : req.body.ask_3,
		ask_4 : req.body.ask_4,
		ask_5 : req.body.ask_5,
		ask_6 : req.body.ask_6,
		ask_7 : req.body.ask_7,
		ask_8 : req.body.ask_8,
		ask_9 : req.body.ask_9,
		ask_10 : req.body.ask_10,
		ask_11 : req.body.ask_11,
		ask_12 : req.body.ask_12
	}

	ask.insert(obj,function(err, obj){
        if(err){
            res.send({status: -1, content: err});
        }else{
            res.send({status: 0, content: 'ok'});
        }
    });
};
exports.index = function(req, res){
    res.render('index', {});
};
exports.getAll = function(req, res){
	ask.getAll({},null,function(err, list){
		console.log(list);
		if(err){
            res.render('error', {});
        }else{
            res.render('list', {list : list});
        }
	});
};
