class Student extends User {
  /**
   * Create student
   * @param {string} firstName 
   * @param {string} lastName 
   * @param {Date} year 
   */
  constructor(firstName, lastName, year) {
    super(firstName, lastName);
    this.year = year;
  }
  /**
   * Set date of admission to the university
   * @param {Date} year 
   */
  set year(year) {
    const now = moment();
    const limit = moment().subtract(5, 'year');
    if (year > now || year < limit) {
      throw new RangeError('Incorrect date')
    }
    this._year = year;
  }
  get year() {
    return this._year;
  }
  get course() {
    return moment().diff(this.year, 'years') + 1;
  }
  shortFullName() {
    return `${this._lastName} ${this._firstName[0]}.`;
  }
}