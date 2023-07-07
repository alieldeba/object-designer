/*
 * @param {array, object}
 * @return {object}
 * @desc Redesign the object from the given array
 */
export default function objectDesigner(array, obj) {
  const sortedObj = {};
  for (let i = 0, len = array.length; i < len; i++) {
    if (Object.keys(obj).includes(array[i])) {
      sortedObj[array[i]] = obj[array[i]];
    }
  }
  return sortedObj;
}
