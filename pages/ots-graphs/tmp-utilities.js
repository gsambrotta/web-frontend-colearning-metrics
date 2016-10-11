/**
 * # Utilities
 *
 *
 */

/**
 * Retrieve data from a Google spreadsheet (continous passing style)
 */
function getData (callback) {
  var id = '1cu5ZoZX9X6a9oZ6aPEP5w_CBuTVJ8sitikwJiEzeQ6U' // Google spreadsheet identifier
  var url = 'https://spreadsheets.google.com/feeds/list/${id}/od6/public/basic?alt=json'.replace('${id}', id)
  // AJAX request
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onerror = function (error) {
    return callback(error);
  };
  xhr.onload = function(){
    var data = JSON.parse(xhr.responseText);
    // formatting data
    var rows = data.feed.entry.map(function (entry) {
      var date = entry.title.$t.replace(/(\d+).(\d+).(\d+)/, '$3-$2-$1');
      var latestKey = null;
      var fields = entry.content.$t.split(',').reduce(function (fields, field) {
        var keyValue = field.split(':');
        if (!keyValue[1]) {
          keyValue[1] = keyValue[0];
          keyValue[0] = latestKey;
        }
        var entry = keyValue[0];
        if (entry) {
          latestKey = entry.trim();
          var value = isNaN(keyValue[1]) ? keyValue.slice(1).join(':').trim() : parseInt(keyValue[1], 10);
          if (fields[latestKey]) {
            value = [fields[latestKey]] + ', ' + value;
          }
          fields[latestKey] = value;
        }
        return fields
      }, {});
      fields.date = new Date(date);
      return fields;
    });
    return callback(null, rows)
  };
  xhr.send();
}
