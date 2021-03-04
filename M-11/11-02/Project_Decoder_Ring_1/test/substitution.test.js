const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("Using Substitution Cypher", () => {
  it("ENCODING: should return proper values while retaining spaces", () => {
    const input = "Hello There";
    const alphabet = "zabcdefghijklmnopqrstuvwxy";
    expect(substitution(input, alphabet, true)).to.eql("gdkkn sgdqd");
  });

  it("DECODING: should return proper values while retaining spaces", () => {
    const input = "gdkkn sgdqd";
    const alphabet = "zabcdefghijklmnopqrstuvwxy";
    expect(substitution(input, alphabet, false)).to.eql("hello there");
  });

  it("DECODING: should return false when alphabet is out of scope with Duplicate Values", () => {
    const input = "Hello There";
    const alphabet = "abcdefghijklmnopqrstuvwxzz";
    expect(substitution(input, alphabet, false)).to.eql(false);
  });

  it("DECODING: should return false when alphabet is out of scope with wrong length", () => {
    const input = "Hello There";
    const alphabet = "abc";
    expect(substitution(input, alphabet, false)).to.eql(false);
  });

  it("DECODING: should return false when alphabet is null", () => {
    const input = "Hello There";
    const alphabet = null;
    expect(substitution(input, alphabet, false)).to.eql(false);
  });
});
