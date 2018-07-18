var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var beginArray = [1];
  beginArray = ['foo', ...beginArray];
  return beginArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo');
  return array;
}

function addElementToEndOfArray(array, element) {
  var endArray = [1];
  endArray = [...endArray, 'foo'];
  return endArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo');
  return array;
}