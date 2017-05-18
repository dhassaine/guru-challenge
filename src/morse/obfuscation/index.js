export function replaceDots(str) {
  function convert(match, p1) {
    return p1.length;
  }

  var test = /(\.+)/g;
  return str.replace(test, convert);
}

export function replaceDashes(str) {
  function convert(match, p1) {
     // charCode A = 65
    return String.fromCharCode(64 + p1.length)
  }

  var test = /(-+)/g;
  return str.replace(test, convert);
}

export default function(str) {
  return replaceDots(replaceDashes(str));
}