
function setCookie(name, value, expire_hours) {
  
  var d = new Date();
  if (expire_hours != "undefined") {
    var expire_hours = 12;
   
  }
  d.setTime(d.getTime() + expire_hours * 60 * 60 * 1000);
  document.cookie =
    name + "=" + escape(value) + "; expires=" + d.toGMTString() + "; path=/";
   
}
function getCookie(name) {
  var arg = escape(name) + "=";
  var nameLen = arg.length;
  var cookieLen = document.cookie.length;
  var i = 0;
  while (i < cookieLen) {
    var j = i + nameLen;
    if (document.cookie.substring(i, j) == arg) return getCookieValueByIndex(j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break;
  }
  return null;
}
function getCookieValueByIndex(startIndex) {
  var endIndex = document.cookie.indexOf(";", startIndex);
  if (endIndex == -1) endIndex = document.cookie.length;
  return unescape(document.cookie.substring(startIndex, endIndex));
}
