class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  set firstName(firstName) {
    this._firstName = firstName;
  }
  get firstName() {
    return this._firstName;
  }
  set lastName(lastName) {
    this._lastName = lastName;
  }
  get lastName() {
    return this._lastName;
  }
  /**
   * Set name and surname from fullname.
   * @param {string} fullname - First the name, then the surname, separated by a space
   */
  set fullName(fullName) {
    [this.firstName, this.lastName] = fullName.split(' ');
  }
  /**
   * Return fullname - first the first name, then the last name, separated by a space
   * @returns {string}
   */
  get fullName() {
    return this._firstName + ' ' + this._lastName;
  }
}