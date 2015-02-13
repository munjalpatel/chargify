function Chargify(options) {
  if (!options) throw new Error('No options specified');
  if (!options.subdomain) throw new Error('No subdomain specified');
  if (!options.api_key) throw new Error('No API key specified');
}

Chargify.prototype.request = function (options) {
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
};

module.exports = Chargify;