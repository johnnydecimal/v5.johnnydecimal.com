describe("00-09", () => {
  it("should match the snapshot", () => {
    cy.visit("/00-09-site-administration/");

    // options object passed in
    cy.matchImageSnapshot();
  });
});
