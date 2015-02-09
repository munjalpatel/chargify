var expect = require('chai').expect;
var chargify = require('../chargify.js');

describe('Chargify', function () {
  it('should throw an error if no options specified', function () {
    expect(chargify.bind(chargify)).to.throw(/No options specified/);
  });

  it('should throw an error if no subdomain is specified', function () {
    expect(chargify.bind(chargify, {})).to.throw(/No subdomain specified/);
  });
});