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
    const now = new Date();
    const limit = new Date().setFullYear(now.getFullYear() - 5);
    if (year > now || year < limit) {
      throw new RangeError('Incorrect date')
    }
    this._year = year;
  }
  get year() {
    return this._year;
  }
  get course() {
    return new Date().getFullYear() - this.year.getFullYear();
  }
}