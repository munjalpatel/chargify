function Chargify(options) {
  if (!options) throw new Error('No options specified');
  if (!options.subdomain) throw new Error('No subdomain specified');
  if (!options.api_key) throw new Error('No API key specified');
}

Chargify.prototype.request = function (resource, method) {
  if (!resource) throw new Error('No resource specified');
  if (!method) throw new Error('No method specified');
};

module.exports = Chargify;