

function toIST(utcTime){
	const moment = require('moment'); 	
	const istTime = moment(utcTime).utcOffset(5.5).format('YYYY-MM-DD HH:mm:ss');
	return istTime;
	
}

module.exports = {toIST}
