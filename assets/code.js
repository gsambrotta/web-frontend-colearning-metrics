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
  setIframeSource(e.target);
});

setIframeSource(refs.selector.selectedOptions[0]);


/**
 * Set reference based on the provided option and environement.
 */
function setIframeSource (target) {
  var pageUrl = '/pages/' + target.value;
  if (window.location.hostname === 'opentechschool.github.io') {
    pageUrl = '/web-frontend-colearning-metrics' + pageUrl;
  }
  refs.iframe.setAttribute('src', pageUrl);
}
