function Chargify(options) {
  if (!options) throw new Error('No options specified');
  if (!options.subdomain) throw new Error('No subdomain specified');
  if (!options.api_key) throw new Error('No API key specified');
}

module.exports = Chargify;