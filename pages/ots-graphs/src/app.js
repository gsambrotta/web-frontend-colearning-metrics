/* global document */

import React from 'react';
import ReactDOM from 'react-dom';

let Index = React.createClass({
  render: function () {
    return (
      <h1>Hello, i am online </h1>
    );
  }
});


ReactDOM.render(
  <Index />,
  document.getElementById('dashboard')
);

