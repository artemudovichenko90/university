class Group {
  constructor(name, students) {
    this.name = name;
    this.students = students;
  }
  set name(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set students(students) {
    this._students = students;
  }
  get students() {
    return this._students;
  }
  showStudents() {
    this._students.forEach(v => console.log(this.#shortFullName(v)));
  }
  #shortFullName(student) {
    return `${student.lastName} ${student.first[0]}.`;
  }
}