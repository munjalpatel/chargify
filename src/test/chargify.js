var expect = require('chai').expect;
var Chargify = require('../chargify.js');

describe('Chargify', function () {
  it('should throw an error if no options specified', function () {
    expect(Chargify.bind(Chargify)).to.throw(/No options specified/);
  });

  it('should throw an error if no subdomain is specified', function () {
    expect(Chargify.bind(Chargify, {})).to.throw(/No subdomain specified/);
  });

  it('should throw an error if no API key is specified', function () {
    expect(Chargify.bind(Chargify, {
      subdomain: 'chargify-test'
    })).to.throw(/No API key specified/);
  });
});