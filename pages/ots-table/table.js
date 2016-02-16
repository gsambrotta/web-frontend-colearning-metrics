/**
 * # Table
 *
 *
 */

var containerRef = document.getElementById('container');

getData(function (error, rows) {
  if (error) {
    console.error(error);
    return alert('Error occoured :(');
  }

  var table = document.createElement('table');
  var thead = table.createTHead();
  var tbody = table.createTBody();

  var labels = Object.keys(rows[0]);
  labels.unshift('No.');
  addRow(thead, labels, -1);

  rows.reverse();

  rows.forEach(function (row, index) {
    var values = labels.map(function (label) {
      return row[label];
    });
    values[0] = rows.length - index;
    addRow(tbody, values, index);
  });

  containerRef.appendChild(table);
});

/**
 * Add rows and format its content (e.g. links).
 */
function addRow (parentNode, fields, rowIndex) {
  var rowNode = parentNode.insertRow(rowIndex);
  fields.forEach(function (field, cellIndex) {
    if (parentNode.nodeName === 'THEAD') {
      field = field.charAt(0).toUpperCase() + field.substr(1);
    }
    var cellNode = rowNode.insertCell(cellIndex);
    var contentNode = document.createTextNode(field || '');
    if (field && (/^https?:\/\//).test(field)) {
      contentNode = document.createElement('a');
      contentNode.setAttribute('href', field);
      contentNode.setAttribute('target', '_blank');
      contentNode.textContent = field;
    }
    cellNode.appendChild(contentNode);
  });
}
