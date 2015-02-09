var expect = require('chai').expect;
var Chargify = require('../chargify.js');

var options = {
  subdomain: process.env.CHARGIFY_SUBDOMAIN,
  api_key: process.env.CHARGIFY_API_KEY
};

describe('Chargify', function () {
  describe('request()', function () {
    it('should throw an error if no resource is specified', function () {
      var chargify = new Chargify(options);
      expect(chargify.request.bind(chargify)).to.throw(/No resource specified/);
    });
  });
});