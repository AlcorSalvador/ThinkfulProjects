/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/

function partitionStudentsByScore(students, score) {
  const cutHigh = students.filter(student => student.score >= score);
  const cutLow = students.filter(student => student.score < score);
  return [cutLow, cutHigh];
};

module.exports = partitionStudentsByScore;
