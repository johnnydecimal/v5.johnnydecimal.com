it("titles are correct", () => {
  const page = cy.visit("/");

  page.get("title").should("have.text", "11.01");
  page.get("h1").should("have.text", "A system to organise projects");
});
