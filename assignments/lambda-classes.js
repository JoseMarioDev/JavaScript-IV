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
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

const dan = new Instructors({
  specialty: 'web development',
  favLanguage: 'javascript',
  catchPhrase: 'programming is awesome',
  name: 'dan',
  age: 35,
  location: 'denver'
});

const josh = new Instructors({
  specialty: 'teaching',
  favLanguage: 'react',
  catchPhrase: 'programming is fun',
  name: 'josh',
  age: 37,
  location: 'california'
});

console.log(josh.demo('html'));
console.log(dan.grade(jose, 'javascript'));

//create students extends person
//create 2-3 objects

class Students extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
  }
  listsSubjects(student, array) {
    return `${this.name}'s favorite subjects are ${this.favSubjects}`;
  }
  PRAssignment(student, subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(student, subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

const luis = new Students({
  name: 'luis',
  age: 30,
  location: 'philly',
  previousBackground: 'concussion specialist',
  className: 'web20',
  favSubjects: ['javascript', 'html', 'css']
});

const Mohammad = new Students({
  name: 'Mo',
  age: 23,
  location: 'california',
  previousBackground: 'sales',
  className: 'web20',
  favSubjects: ['react', 'sql', 'node']
});

console.log(luis.listsSubjects(luis));
console.log(Mohammad.listsSubjects(Mohammad));
console.log(luis.PRAssignment(luis, 'JS'));
console.log(Mohammad.sprintChallenge(Mohammad, 'React'));

///create project managers extends instructors
//create 2-3 objects

class ProjectManagers extends Instructors {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }
  standup(channel) {
    return `${this.name} announces to ${channel}, @channel study times!`;
  }
  debugsCode(pm, student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const frank = new ProjectManagers({
  gradClassName: 'FSW',
  favInstructor: 'Josh',
  specialty: 'flex',
  favLanguage: 'flexbox',
  catchPhrase: 'programming is easy',
  name: 'LeTanque',
  age: 37,
  location: 'california'
});

const chris = new ProjectManagers({
  gradClassName: 'FSW',
  favInstructor: 'Ryan',
  specialty: 'JS Challenges',
  favLanguage: 'javascript',
  catchPhrase: 'whiteboards are easy',
  name: 'chris',
  age: 30,
  location: 'NYC'
});

console.log(frank.standup('slack'));
console.log(chris.debugsCode(chris, luis, 'CSS'));
