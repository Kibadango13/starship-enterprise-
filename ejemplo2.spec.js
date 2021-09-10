describe("Given a number n that represents an index in the sequence, return the corresponding element in the sequence", () => {
  const ejemplo2 = require("./ejemplo2");

  it("should return the corresponding element in the sequence", () => {
    // expect(ejemplo2(0)).toBe(1);
    // expect(ejemplo2(5)).toBe(4);
    // expect(ejemplo2(31)).toBe(18);
    // expect(ejemplo2(76)).toBe(39);

    expect(ejemplo2(87123641123172368)).toBe(43561820561586185);
    //expect(ejemplo2(81239812739128371)).toBe(40619906369564188);
  });
});
