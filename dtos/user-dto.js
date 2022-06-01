module.exports = class UserDto {
  email;
  firstName;
  lastName;
  // day;
  // month;
  // year;
  id;
  isActivated;

  constructor(model) {
    this.email = model.email;
    this.firstName = model.firstName;
    this.lastName = model.lastName;
    // this.day = model.day;
    // this.month = model.month;
    // this.year = model.year;
    this.id = model._id;
    this.isActivated = model.isActivated;
  }
};
