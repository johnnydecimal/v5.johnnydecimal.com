it("titles are correct", () => {
  const page = cy.visit("/");

  page.title().should("include", "11.01");
  page
    .get("h1#a-system-to-organise-projects")
    .should("have.text", "A system to organise projects");
});
