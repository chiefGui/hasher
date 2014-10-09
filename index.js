/**
 * Return the value you want in a beautiful hash of your choice, easy as hell.
 *
 * @param {String} hash
 * @param content
 * @return {String}
 */
module.exports = function (hash, content) {
  var crypto = require ('crypto');

  content = content.toString();

  var hashSum = crypto.createHash(hash);

  hashSum.update(content);

  return hashSum.digest('hex');
};
