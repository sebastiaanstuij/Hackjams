let hasOwnProperty = Object.prototype.hasOwnProperty;

export function objectAssign(target, ...source) {
  let to = Object(target);

  for (let fromRaw of source) {
    let from = Object(fromRaw);

    for (let key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

  }
  return to;
};