(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.endsWith = function (inString, inTarget) {
    var tLength = inTarget.length;
    var length = inString.length;
    var idx = inString.indexOf(inTarget);
    return (idx + tLength) === length
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.endsWith;
  }

}());
