//uncomment  to check the result.
//1.Using Arrow Functions
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((student) => {
            console.log(this.title + ": " + student);
        });
    }
};

group.showList();

// 2.Using bind() Method
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         this.students.forEach(function (student) {
//             console.log(this.title + ": " + student);
//         }.bind(this));
//     }
// };

// group.showList();

//3.Storing this in a Variable
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         let self = this;
//         this.students.forEach(function (student) {
//             console.log(self.title + ": " + student);
//         });
//     }
// };

// group.showList();

//4.Using forEach() Method's Second Argument
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         this.students.forEach(function (student) {
//             console.log(this.title + ": " + student);
//         }, this);
//     }
// };

// group.showList();

//5.Using function declaration (() => {}) for the inner function, inherit lexical scope of parent.
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         this.students.forEach((student) => {
//             console.log(this.title + ": " + student);
//         }.call(this, student));
//     }
// };

// group.showList();





