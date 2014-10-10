/**
 * Return the value you want in a beautiful hash of your choice, easy as hell.
 *
 * @param {String} hash
 * @param content
 * @return {String}
 */
var crypto = require ('crypto');

module.exports = function (hash, content) {
  var hashSum = crypto.createHash(hash);

  hashSum.update(content.toString());

  return hashSum.digest('hex');
};
