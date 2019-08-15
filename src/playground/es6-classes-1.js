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

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let desciption = super.getDescription();
    return `${desciption} ${
      this.hasMajor() ? ` Majoring in ${this.major}.` : ` Is deciding on major.`
    }`;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let description = super.getGreeting();
    return `${description} ${
      this.hasHomeLocation() ? ` ,from ${this.homeLocation}.` : ' ,blah.'
    }`;
  }
}

const p1 = new Student('Vaibhav Singh', 22, 'Computer Science');
console.log(p1);
console.log(p1.getDescription());
console.log(p1.hasMajor());

const p2 = new Student();
console.log(p2.getDescription());
console.log(p2.hasMajor());

const t1 = new Traveler('Raju Rastogi', 23, 'Ramgarh');
console.log(t1.getGreeting());

const t2 = new Traveler();
console.log(t2.getGreeting());
