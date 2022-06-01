//2 января 2022
const user1 = new Student('Ivan', 'Ivanov', new Date(2022, 05, 02));//min limit
const user2 = new Student('Ivan', 'Ivanov', new Date(2017, 05, 03));//max limit
user2.fullName = 'Petr Petrov';
console.log(user1.fullName);
console.log(user2.fullName);
console.log(user1.course);
console.log(user2.course);
const group = new Group('B13',[user1,user2]);
group.showStudents();
