/** Add comma to int.
 *  @param {int} num
 *  @return {string}
 */
function formatInt(num) {
  if (num < 1000) {
    return '' + num;
  } else {
    var rem = format2ThreeDigit(num % 1000);
    var quot = Math.floor(num / 1000);
    return formatInt(quot) + ',' + rem;
  }
}

/** Format num to have 3 digits.
 *  @param {int} num
 *  @return {string}
 */
function format2ThreeDigit(num) {
  if (num < 10) {
    return '00' + num;
  } else if (num < 100) {
    return '0' + num;
  } else {
    return num.toString();
  }
}

exports.formatInt = formatInt;
