/**
 * # Main
 *
 *
 */

var counterRef = document.getElementById('counter');

getData(function (error, rows) {
  if (error) {
    console.error(error);
    return alert('Error occoured :(');
  }
  counterRef.textContent = rows.length;
});
