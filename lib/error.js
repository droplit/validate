
/**
 * Create an error
 *
 * @param {Property} prop
 * @param {String} msg
 * @return {Error}
 * @api public
 */


function error (prop, msg) {
  var err = new Error(msg || prop.msg);
  err.path = prop.name;
  return err;
}

/**
 * Expose error
 */

module.exports = error;