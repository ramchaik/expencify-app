// argument is no longer bound
const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};

console.log(add(11, 22));

// this - is no longer bound
const user = {
  name: 'Vaibhav',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    console.log(this.name);
    console.log(this.cities);

    this.cities.forEach(city => {
      console.log(city, ' --<>-- ', this.name);
    });
  }
};
user.printPlacesLived();

const multiplier = {
  numbers: [1, 2, 4, 5],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
