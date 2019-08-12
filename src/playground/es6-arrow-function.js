const getName = name => {
  return name.split(' ')[0];
};

const getNameShort = name => name.split(' ')[0];

const name = 'Vaibhav Singh';

console.log('arrow , ', getName(name));
console.log('short arrow,  ', getNameShort(name));
