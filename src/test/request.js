var expect = require('chai').expect;
var Chargify = require('../chargify.js');

var options = {
  subdomain: process.env.CHARGIFY_SUBDOMAIN,
  api_key: process.env.CHARGIFY_API_KEY
};

describe('Chargify', function () {
  describe('request()', function () {
    it('should throw an error if no options are specified', function () {
      var chargify = new Chargify(options);
      expect(chargify.request.bind(chargify)).to.throw(/No options specified/);
    });

    it('should throw an error if no resource is specified', function () {
      var chargify = new Chargify(options);
      expect(chargify.request.bind(chargify, {})).to.throw(/No resource specified/);
    });

    it('should throw an error if no method is specified', function () {
      var chargify = new Chargify(options);
      expect(chargify.request.bind(chargify, {
        resource: 'test'
      })).to.throw(/No method specified/);
    });

    describe('method', function () {
      it('should be GET, POST, PUT or DELETE', function () {
        var chargify = new Chargify(options);
        expect(chargify.request.bind(chargify, {
          resource: 'test',
          method: 'test'
        })).to.throw(/Invalid method. Supported methods are: GET, POST, PUT, DELETE/);
      });
    });
  });
});