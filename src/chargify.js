var request = require('request');

function Chargify(options) {
  if (!options) throw new Error('No options specified');
  if (!options.subdomain) throw new Error('No subdomain specified');
  if (!options.api_key) throw new Error('No API key specified');

  this._api_key = options.api_key;
  this._subdomain = options.subdomain;
}

Chargify.prototype.request = function (options, callback) {
  if (!options) throw new Error('No options specified');
  if (!options.resource) throw new Error('No resource specified');
  if (!options.method) throw new Error('No method specified');

  switch (options.method) {
  case 'GET':
  case 'POST':
  case 'PUT':
  case 'DELETE':
    break;
  default:
    throw new Error('Invalid method. Supported methods are: GET, POST, PUT, DELETE');
  }

  if (options.resource.indexOf('.json') === -1) options.resource += '.json';

  var payload = {
    url: 'https://' + this._api_key + ':x@' + this._subdomain + '.chargify.com/' + options.resource,
    json: true,
    method: options.method
  };

  if (options.method === 'POST' || options.method === 'PUT') payload.body = options.body;

  request(payload, function (err, res, body) {
    callback(err, res, body);
  });
};

module.exports = Chargify;