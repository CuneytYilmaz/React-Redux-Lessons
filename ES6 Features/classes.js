class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class ExamplePerson extends Person {
  constructor(name, surname) {
    super(name);

    this.surname = surname;
  }

  getSurname() {
    return this.surname;
  }

  getFullName() {
    return `${this.getName()} ${this.getSurname()}`;
  }
}

const newPerson = new Person('Cüneyt');
console.log(newPerson.getName());

const newExamplePerson = new ExamplePerson('Cüneyt', 'Yılmaz');
console.log(newExamplePerson.getFullName());
