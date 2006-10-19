AttackAPI.Base64Encoder = {};
AttackAPI.Base64Encoder.character_space = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
AttackAPI.Base64Encoder.encode = function(input) {
	var output = "";
	var chr1, chr2, chr3;
	var enc1, enc2, enc3, enc4;
	var i = 0;
	
	do {
		chr1 = input.charCodeAt(i++);
		chr2 = input.charCodeAt(i++);
		chr3 = input.charCodeAt(i++);
		
		enc1 = chr1 >> 2;
		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
		enc4 = chr3 & 63;
		
		if (isNaN(chr2)) {
			enc3 = enc4 = 64;
		} else if (isNaN(chr3)) {
			enc4 = 64;
		}
		
		output = output + AttackAPI.Base64Encoder.character_space.charAt(enc1) + AttackAPI.Base64Encoder.character_space.charAt(enc2) + AttackAPI.Base64Encoder.character_space.charAt(enc3) + AttackAPI.Base64Encoder.character_space.charAt(enc4);
	} while (i < input.length);
	
	return output;
};
AttackAPI.Base64Encoder.decode = function (input) {
	var output = "";
	var chr1, chr2, chr3;
	var enc1, enc2, enc3, enc4;
	var i = 0;

	input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

	do {
		enc1 = AttackAPI.Base64Encoder.character_space.indexOf(input.charAt(i++));
		enc2 = AttackAPI.Base64Encoder.character_space.indexOf(input.charAt(i++));
		enc3 = AttackAPI.Base64Encoder.character_space.indexOf(input.charAt(i++));
		enc4 = AttackAPI.Base64Encoder.character_space.indexOf(input.charAt(i++));

		chr1 = (enc1 << 2) | (enc2 >> 4);
		chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
		chr3 = ((enc3 & 3) << 6) | enc4;

		output = output + String.fromCharCode(chr1);

		if (enc3 != 64) {
			output = output + String.fromCharCode(chr2);
		}
		if (enc4 != 64) {
			output = output + String.fromCharCode(chr3);
		}
	} while (i < input.length);
	
	return output;
};
