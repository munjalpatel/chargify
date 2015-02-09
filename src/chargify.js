function Chargify(options) {
  if (!options) throw new Error('No options specified');
  if (!options.subdomain) throw new Error('No subdomain specified');
}

module.exports = Chargify;