
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

const jose = new Person({
  name: 'Jose',
  age: 39,
  location: 'Chicago'
});

const kimberly = new Person({
  name: 'Kimberly',
  age: 37,
  location: 'Indiana'
});
console.log(jose.speak());
console.log(kimberly.speak());


//create instructors extends person
//create 2 - 3 objects

class Instructors extends Person {
  constructor(attr) {
    super(attr)
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;    
    this.catchPhrase = attr.catchPhrase;
  } 
  demo(){
    return `Today we are learning about ${this.subject}`
  }
  grade() {
    return `${student.name} receives a perfect score on ${this.subject}`
  }
}

const dan = new Instructors ({
  specialty: 'cats',
  favLanguage: 'jibberish',
  catchPhrase: 'I need closure unlike my divorce'
})



//create students extends person
//create 2-3 objects

///create project managers extends instructors
//create 2-3 objects

//example of creating new objects

// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
