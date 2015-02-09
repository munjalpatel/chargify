function Chargify(options) {
  if (!options) throw new Error('No options specified');
  if (!options.subdomain) throw new Error('No subdomain specified');
  if (!options.api_key) throw new Error('No API key specified');
}

Chargify.prototype.request = function (resource) {
  if (!resource) throw new Error('No resource specified');
};

module.exports = Chargify;