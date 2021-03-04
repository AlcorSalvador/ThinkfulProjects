// Write your tests here!
const expect = require("chai").expect;
const findStudentByName = require("../src/solution");

const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];

describe("main", () => {
  it("should return object if matched", () => {
    expect(findStudentByName(students, "Natalee Vargas")).to.eql({
      name: "Natalee Vargas",
      score: 9.2,
    }); // No errors
  });

  it("should return null if not matched", () => {
    expect(findStudentByName(students, "Terry Peters")).to.be.null; // No errors
  });
});

