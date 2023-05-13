describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#a-system-to-organise-projects").should(
      "have.text",
      "A system to organise projects"
    );
    cy.get(".next").click();
    cy.get("#areas-and-categories").should("have.text", "Areas and categories");
    cy.get(".next").click();
    cy.get("#ids").should("have.text", "IDs");
    /* ==== End Cypress Studio ==== */
  });
});
