
/**
 * @name AttackAPI.dom.freeze
 * @param {Number} time the period of time to freeze the browser
 */
AttackAPI.dom.freeze = function (time) {
	var date = new Date();
	var cur = null;

	do {
		cur = new Date();
	} while(cur - date < time);
};