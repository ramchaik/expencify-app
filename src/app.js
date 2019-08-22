// import './utils';
import sub, { square, add } from './utils';
import isSenior, { canDrink, isAdult } from './person';

console.log('app.js is running!!');
console.log(square(3));
console.log(add(3, 2));
console.log(canDrink(23) ? 'Yuss' : 'Nah');
console.log(isAdult(23) ? 'Adult' : 'Kid');
console.log(sub(3,3))
console.log(isSenior(89))
