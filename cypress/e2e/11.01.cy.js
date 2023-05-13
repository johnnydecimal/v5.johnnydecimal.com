it("titles are correct", () => {
  const page = cy.visit("/");

  page.get("title").should("have.text", "J•D");
  page.get("h1").should("have.text", "A system to organise projects");
});
