chargify
========


Chargify wrapper for node

---
### Supported Operations

- Request

### Installation
`npm install chargify-node --save`

### Usage

```javascript
  var Chargify = require('chargify-node');

  var options = {
    api_key: process.env.CHARGIFY_API_KEY,
    subdomain: process.env.CHARGIFY_SUBDOMAIN
  };

  var chargify = new Chargify(options);
  chargify.request({
    resource: 'customers',
    method: 'GET'
  }, function (err, response, body) {
    if (err) throw new Error(err);

    console.log('Response:');
    console.log(response);

    console.log('Body:');
    console.log(body);
  });
```