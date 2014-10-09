# Hasher for Node.js

This is a simple, minimalist snippet that you'll attach onto your Node.js
application to convert values into crypto supported hashes.

### Demonstration

Instead of doing the following each time you want to encrypt your values:

```js
var crypto = require ('crypto')
    , hashSum = crypto.createHash('md5');

hashSum.update(123456);

var hash = hashSum.digest('hex');
```

you simply do this:

```js
var hash = hasher('md5', 123456);
```

### Requirements

- Node.js and its native module enabled, [Crypto](http://nodejs.org/api/crypto.html).

### Download & installation

`npm install hasher`

### Usage

When you want to empower your files with Hasher, the first thing you have to
perform is its invokation:

```js
var hasher = require ('hasher');
```

Then, just call it wherever you want:

```js
var something = hasher('md5', 123456);
```

### Availability

Hasher provides the same hashes as Crypto do. See:

- md5;
- sha1;
- sha256;
- sha512

If you have your own implementations, feel free to make a pull request!

### Tests

You can perform the tests by running `npm test`. We are using [jasmine-node](https://github.com/mhevery/jasmine-node)
on the backstages.

### Release history

* 0.0.1 Initial release

### License

MIT.
