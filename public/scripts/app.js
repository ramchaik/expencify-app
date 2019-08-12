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
function getLocation(location) {
  if (location) return location;else return ' N/A ';
}

var obj = {
  name: 'robin',
  age: 23,
  location: 'NY'
};

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'p',
    null,
    'Name ',
    obj.name
  ),
  React.createElement(
    'p',
    null,
    'Age ',
    obj.age
  ),
  React.createElement(
    'p',
    null,
    'Location ',
    getLocation(obj.location)
  )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
