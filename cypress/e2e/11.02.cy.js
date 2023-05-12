it("titles are correct", () => {
  const page = cy.visit("/10-19-concepts/11-core/11.02-areas-and-categories");

  page.title().should("include", "11.02");
  page
    .get("h1#areas-and-categories")
    .should("have.text", "Areas and categories");
});
