/*
 * @param {array, object}
 * @return {object}
 * @desc Redesign the object from the given array
 */
function objectDesigner(array, obj) {
  const sortedObj = {};

  for (const key of array) {
    if (key in obj) {
      sortedObj[key] = obj[key];
    }
  }

  return sortedObj;
}

module.exports = objectDesigner;
