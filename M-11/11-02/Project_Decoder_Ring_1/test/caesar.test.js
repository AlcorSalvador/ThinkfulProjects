const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("Using Caesar Shift", () => {
  it("ENCODING: should return false when shift is out of scope", () => {
    const input = "ifmmp uifsf";
    expect(caesar(input, 27, false)).to.eql(false);
  });

  it("ENCODING: should return proper values with Positives", () => {
    const input = "Hello There";
    expect(caesar(input, 25, true)).to.eql("gdkkn sgdqd");
  });

  it("ENCODING: should return proper values with Positives", () => {
    const input = "gdkkn sgdqd";
    expect(caesar(input, 25, false)).to.eql("hello there");
  });

  it("DECODING: should return proper values with Negatives", () => {
    const input = "Hello There";
    expect(caesar(input, -25, true)).to.eql("ifmmp uifsf");
  });

  it("DECODING: should return proper values with Negatives", () => {
    const input = "ifmmp uifsf";
    expect(caesar(input, -25, false)).to.eql("hello there");
  });
});
