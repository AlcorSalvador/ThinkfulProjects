// Write your tests here!

const expect = require("chai").expect;
const partitionStudentsByScore = require("../src/solution");

const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];

describe("Partitioning Students", () => {
  it("should return proper Partitions", () => {
    const students = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];
    expect(partitionStudentsByScore(students, 8)).to.eql([
      [{ name: "Morgan Sutton", score: 7.4 }],
      [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Natalee Vargas", score: 9.2 },
      ],
    ]);
  });

  it("should return one empty array and 1 full array", () => {
    const students = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];
    expect(partitionStudentsByScore(students, 7)).to.eql([[], students]);
  });

  it("should return two empty arraysv", () => {
    const students = [];
    expect(partitionStudentsByScore(students, 8)).to.eql([[], []]);
  });
});
