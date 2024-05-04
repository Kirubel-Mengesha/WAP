// For the given students array below, compute the average grade of all students who took cs303 course which returns an object which key is students' names, values is the average.

// Example of result:

// {
//  Quincy: 93.5,
//  Sam: 86.5,
//  Katie: 71.5
// }
// You're not allowed to use for, while, do...while, for..of, forEach loop

const students = [
    { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},
    { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
    { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }
  ];
  
  const averageGrades = students
    .filter(student => student.courses.includes('cs303'))
    .reduce((acc, student) => {
      const avgGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
      return { ...acc, [student.name]: avgGrade };
    }, {});
  
  console.log(averageGrades);
  

