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
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;    
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student,subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

const dan = new Instructors({
  specialty: 'web development',
  favLanguage: 'javascript',
  catchPhrase: 'programming is awesome',
  name: "dan",
  age: 35,
  location: 'denver'
});

const josh = new Instructors({
  specialty: 'teaching',
  favLanguage: 'react',
  catchPhrase: 'programming is fun'
});

 console.log(dan.grade(jose,'javascript'))

//create students extends person
//create 2-3 objects

class Students extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
  }
  listsSubjects() {}
  PRAssignment() {
    return `${student.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge() {
    return `${student.name} has begun sprint challenge on ${subject}`;
  }
}

const luis = new Students({
  previousBackground: 'concussion specialist',
  className: 'web20',
  favSubjects: 'javascript'
});

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
