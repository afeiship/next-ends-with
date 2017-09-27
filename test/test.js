var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-ends-with');

describe('next/endsWith', function () {

  it("nx.endsWith('abc', 'c') true", function () {
    var ret = nx.endsWith('abc', 'c');
    assert.equal(ret, true);
  });


  it("nx.endsWith('abc', 'b') false", function () {
    var ret = nx.endsWith('abc', 'b');
    assert.equal(ret, false);
  });

});
