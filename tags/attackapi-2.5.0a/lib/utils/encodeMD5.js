
/**
 * @name AttackAPI.utils.encodeMD5
 * @desc encode MD5
 * @param {String} string the string to encode
 * @return MD5 encoded string
 */
AttackAPI.utils.encodeMD5 = function (string) {
	eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('l 1R(s){k N(Q(O(s),s.u*8))}l Q(x,o){x[o>>5]|=1Y<<((o)%v);x[(((o+1V)>>>9)<<4)+14]=o;g a=1J;g b=-1G;g c=-1H;g d=24;B(g i=0;i<x.u;i+=16){g H=a;g G=b;g P=c;g L=d;a=f(a,b,c,d,x[i+0],7,-1P);d=f(d,a,b,c,x[i+1],12,-2d);c=f(c,d,a,b,x[i+2],17,27);b=f(b,c,d,a,x[i+3],22,-29);a=f(a,b,c,d,x[i+4],7,-1A);d=f(d,a,b,c,x[i+5],12,1E);c=f(c,d,a,b,x[i+6],17,-1x);b=f(b,c,d,a,x[i+7],22,-S);a=f(a,b,c,d,x[i+8],7,2e);d=f(d,a,b,c,x[i+9],12,-1l);c=f(c,d,a,b,x[i+10],17,-1n);b=f(b,c,d,a,x[i+11],22,-T);a=f(a,b,c,d,x[i+12],7,Z);d=f(d,a,b,c,x[i+13],12,-19);c=f(c,d,a,b,x[i+14],17,-V);b=f(b,c,d,a,x[i+15],22,1k);a=j(a,b,c,d,x[i+1],5,-Y);d=j(d,a,b,c,x[i+6],9,-W);c=j(c,d,a,b,x[i+11],14,U);b=j(b,c,d,a,x[i+0],20,-1i);a=j(a,b,c,d,x[i+5],5,-1p);d=j(d,a,b,c,x[i+10],9,1h);c=j(c,d,a,b,x[i+15],14,-2c);b=j(b,c,d,a,x[i+4],20,-2b);a=j(a,b,c,d,x[i+9],5,1f);d=j(d,a,b,c,x[i+14],9,-18);c=j(c,d,a,b,x[i+3],14,-28);b=j(b,c,d,a,x[i+8],20,1e);a=j(a,b,c,d,x[i+13],5,-1d);d=j(d,a,b,c,x[i+2],9,-1a);c=j(c,d,a,b,x[i+7],14,1b);b=j(b,c,d,a,x[i+12],20,-1c);a=e(a,b,c,d,x[i+5],4,-1j);d=e(d,a,b,c,x[i+8],11,-1W);c=e(c,d,a,b,x[i+11],16,1r);b=e(b,c,d,a,x[i+14],23,-1s);a=e(a,b,c,d,x[i+1],4,-1t);d=e(d,a,b,c,x[i+4],11,1S);c=e(c,d,a,b,x[i+7],16,-1u);b=e(b,c,d,a,x[i+10],23,-1Q);a=e(a,b,c,d,x[i+13],4,1v);d=e(d,a,b,c,x[i+0],11,-1O);c=e(c,d,a,b,x[i+3],16,-1y);b=e(b,c,d,a,x[i+6],23,1M);a=e(a,b,c,d,x[i+9],4,-1z);d=e(d,a,b,c,x[i+12],11,-1B);c=e(c,d,a,b,x[i+15],16,1C);b=e(b,c,d,a,x[i+2],23,-1D);a=h(a,b,c,d,x[i+0],6,-1F);d=h(d,a,b,c,x[i+7],10,1I);c=h(c,d,a,b,x[i+14],15,-1K);b=h(b,c,d,a,x[i+5],21,-1L);a=h(a,b,c,d,x[i+12],6,1N);d=h(d,a,b,c,x[i+3],10,-1T);c=h(c,d,a,b,x[i+10],15,-1U);b=h(b,c,d,a,x[i+1],21,-1X);a=h(a,b,c,d,x[i+8],6,1Z);d=h(d,a,b,c,x[i+15],10,-25);c=h(c,d,a,b,x[i+6],15,-26);b=h(b,c,d,a,x[i+13],21,1q);a=h(a,b,c,d,x[i+4],6,-1o);d=h(d,a,b,c,x[i+11],10,-1m);c=h(c,d,a,b,x[i+2],15,X);b=h(b,c,d,a,x[i+9],21,-1g);a=m(a,H);b=m(b,G);c=m(c,P);d=m(d,L)}k M(a,b,c,d)}l p(q,a,b,x,s,t){k m(R(m(m(a,q),m(x,t)),s),b)}l f(a,b,c,d,x,s,t){k p((b&c)|((~b)&d),a,b,x,s,t)}l j(a,b,c,d,x,s,t){k p((b&d)|(c&(~d)),a,b,x,s,t)}l e(a,b,c,d,x,s,t){k p(b^c^d,a,b,x,s,t)}l h(a,b,c,d,x,s,t){k p(c^(b|(~d)),a,b,x,s,t)}l m(x,y){g D=(x&z)+(y&z);g F=(x>>16)+(y>>16)+(D>>16);k(F<<16)|(D&z)}l R(A,w){k(A<<w)|(A>>>(v-w))}l O(n){g C=M();g J=(1<<8)-1;B(g i=0;i<n.u*8;i+=8){C[i>>5]|=(n.1w(i/8)&J)<<(i%v)}k C}l N(r){g E=\'2a\';g n=\'\';B(g i=0;i<r.u*4;i++){n+=E.K((r[i>>2]>>((i%4)*8+4))&I)+E.K((r[i>>2]>>((i%4)*8))&I)}k n}',62,139,'||||||||||||||md5_hh|md5_ff|var|md5_ii||md5_gg|return|function|safe_add|str|len|md5_cmn||binarray|||length|32|cnt|||0xFFFF|num|for|bin|lsw|hex_tab|msw|oldb|olda|0xF|mask|charAt|oldd|Array|binl2hex|str2binl|oldc|core_md5|bit_rol|45705983|1990404162|643717713|1502002290|1069501632|718787259|165796510|1804603682|||||||||1019803690|40341101|51403784|1735328473|1926607734|1444681467|1163531501|568446438|343485551|38016083|373897302|378558|1236535329|1958414417|1120210379|42063|145523070|701558691|1309151649|1839030562|35309556|1530992060|155497632|681279174|charCodeAt|1473231341|722521979|640364487|176418897|421815835|530742520|995338651|1200080426|198630844|271733879|1732584194|1126891415|1732584193|1416354905|57434055|76029189|1700485571|358537222|680876936|1094730640|hex_md5|1272893353|1894986606|1051523|64|2022574463|2054922799|0x80|1873313359|||||271733878|30611744|1560198380|606105819|187363961|1044525330|0123456789abcdef|405537848|660478335|389564586|1770035416'.split('|'),0,{}));
	return hex_md5(string);
};