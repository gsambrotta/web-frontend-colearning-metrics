/**
 * # Code
 *
 *
 */

var refs = {
  selector: document.getElementById('selector'),
  iframe: document.getElementById('iframe')
};

refs.selector.addEventListener('change', function (e) {
  var value = e.target.value;
  var pageUrl = '/pages/' + value;
  refs.iframe.setAttribute('src', pageUrl);
});
