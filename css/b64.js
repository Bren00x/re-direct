!function(){function t(){var t=0,e=0;this.output="",this.readByte=function(r){return"string"==typeof r&&(r=r.charCodeAt(0)),0>t?e|=r>>-t:e=r<<t&248,t>3?(t-=8,1):(4>t&&(this.output+=i[e>>3],t+=5),0)},this.finish=function(r){var n=this.output+(0>t?i[e>>3]:"")+(r?"$":"");return this.output="",n}}function e(){var t=0,e=0;this.output="",this.readChar=function(r){"string"!=typeof r&&"number"==typeof r&&(r=String.fromCharCode(r)),r=r.toLowerCase();var n=s()[r];"undefined"!=typeof n&&(n<<=3,e|=n>>>t,t+=5,t>=8&&(this.output+=String.fromCharCode(e),t-=8,e=t>0?n<<5-t&255:0))},this.finish=function(e){var r=this.output+(0>t?i[bits>>3]:"")+(e?"$":"");return this.output="",r}}function r(e){var r=new t,n=r.update(e,!0);return n}function n(t){var r=new e,n=r.update(t,!0);return n}function u(t,e){"undefined"==typeof f&&(f=require("crypto"));var n=f.createHash("sha1");if(n.digest=function(t){return function(){return r(t.call(this,"binary"))}}(n.digest),e){if("string"==typeof t||Buffer.isBuffer(t))try{return e(null,u(t))}catch(i){return e(i,null)}return t.on("data",function(t){n.update(t)}),void t.on("end",function(){e(null,n.digest())})}return t?n.update(t).digest():n}var i="0123456789abcdefghjkmnpqrtuvwxyz",o={o:0,i:1,l:1,s:5},s=function(){for(var t={},e=0;e<i.length;e++)t[i[e]]=e;for(var r in o)o.hasOwnProperty(r)&&(t[r]=t[""+o[r]]);return s=function(){return t},t};t.prototype.update=function(t,e){for(var r=0;r<t.length;)r+=this.readByte(t[r]);var n=this.output;return this.output="",e&&(n+=this.finish()),n},e.prototype.update=function(t,e){for(var r=0;r<t.length;r++)this.readChar(t[r]);var n=this.output;return this.output="",e&&(n+=this.finish()),n};var f,a;u.file=function(t,e){return"-"==t?(process.stdin.resume(),u(process.stdin,e)):("undefined"==typeof a&&(a=require("fs")),a.stat(t,function(r,n){return r?e(r,null):n.isDirectory()?e({dir:!0,message:"Is a directory"}):u(require("fs").createReadStream(t),e)}))};var d={Decoder:e,Encoder:t,encode:r,decode:n,sha1:u};"undefined"!=typeof window&&(window.base32=d),"undefined"!=typeof module&&module.exports&&(module.exports=d)}();