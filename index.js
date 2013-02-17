var intervals = module.exports = {};

intervals.s = {
  week: 604800,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
};

intervals.ms = map(intervals.s, function (int) {
  return int * 1000;
});

/**
 * object map utility
 */

function map (obj, fn) {
  var ret = {};
  
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      ret[key] = fn(obj[key]);
    }
  }
  
  return ret;
}