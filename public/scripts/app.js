'use strict';

var myApp = {
  title: 'The Main Title',
  option: []
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    myApp.title
  ),
  myApp.subtitle && React.createElement(
    'p',
    null,
    myApp.subtitle
  ),
  myApp.option.length > 0 ? 'Here are your options' : 'no options',
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item 1'
    ),
    React.createElement(
      'li',
      null,
      'Item 2'
    )
  )
);

var count = 0;

var addOne = function addOne() {
  console.log('addOne');
};

var minusOne = function minusOne() {
  console.log('minusOne');
};

var reset = function reset() {
  console.log('Reset');
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'Reset Count'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
