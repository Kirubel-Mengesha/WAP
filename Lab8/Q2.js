function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];

    // Method to add a new grade
    this.inputNewGrade = function(newGrade) {
        this.grades.push(newGrade);
    };

    // Method to compute the average grade
    this.computeAverage = function() {
        if (this.grades.length === 0) {
            return 0;
        } else {
            var sum = this.grades.reduce(function(total, grade) {
                return total + grade;
            }, 0);
            return sum / this.grades.length;
        }
    };
}

// Example usage
var student1 = new Student("John", "Doe");
student1.inputNewGrade(85);
student1.inputNewGrade(90);
student1.inputNewGrade(75);
console.log(student1.computeAverage()); // Output: 83.33333333333333

var student2 = new Student("Alice", "Smith");
student2.inputNewGrade(92);
student2.inputNewGrade(88);
student2.inputNewGrade(95);
console.log(student2.computeAverage()); // Output: 91.66666666666667
