class Person {
  constructor(name = 'default Name', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello ${this.name} !`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const p1 = new Person('Vaibhav Singh', 22);
console.log(p1);
console.log(p1.getDescription());

const p2 = new Person();
console.log(p2.getDescription());
