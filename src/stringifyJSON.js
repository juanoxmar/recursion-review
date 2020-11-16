// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }

  const typeCheck =
    typeof obj === 'number' ||
    typeof obj === 'boolean' ||
    typeof obj === 'undefined' ||
    obj === null;

  if (typeCheck) {
    return `${obj}`;
  }

  if (Array.isArray(obj)) {
    const arr = _.map(obj, (item) => stringifyJSON(item));

    return `[${arr}]`;
  }

  // object strings
  const objStrings = [];

  // looping through object to push keys & values to objStrings
  for (let k in obj) {
    if (typeof obj[k] !== 'function' && typeof obj[k] !== 'undefined') {
      objStrings.push(`"${k}":${stringifyJSON(obj[k])}`);
    }
  }

  // be able to put curly brackets around the objStrings before returned
  return `{${objStrings}}`;
};
