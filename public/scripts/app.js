'use strict';

var getName = function getName(name) {
  return name.split(' ')[0];
};

var getNameShort = function getNameShort(name) {
  return name.split(' ')[0];
};

var name = 'Vaibhav Singh';

console.log('arrow , ', getName(name));
console.log('short arrow,  ', getNameShort(name));
