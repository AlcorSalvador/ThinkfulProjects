/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/

function findStudentByName(students, name) {
  let output = null;
  console.log(output);
  students.forEach((student) =>{
    if (student.name == name){
      output = student;
    };
  });
  console.log(output);
  return output;

  /*
  let studentObj = students.find(student) => student.name === name);
  if (!studentObj) return null;
  return studentObj;
*/
};

module.exports = findStudentByName;
