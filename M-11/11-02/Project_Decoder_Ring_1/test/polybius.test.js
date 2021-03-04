const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("Using Polybius Arg", () => {
  it("ENCODING: should return proper values while retaining spaces", () => {
    const input = "Hello There";
    expect(polybius(input, true)).to.eql("3251131343 4432512451");
  });

  it("DECODING: should return proper values while retaining spaces", () => {
    const input = "3251131343 4432512451";
    expect(polybius(input, false)).to.eql("hello there");
  });

  it("DECODING: should return false when input is out of scope", () => {
    const input = "132 5343";
    expect(polybius(input, false)).to.eql(false);
  });
});
