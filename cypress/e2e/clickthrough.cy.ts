describe("Site clickthrough", () => {
  it("passes", () => {
    cy.visit("/");

    // Check that BackNext works from the home page
    cy.get("#backnext-areas-and-categories")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}`);
      });

    // Areas
    ["00-09", "10-19", "20-29"].map((area) => {
      cy.get(`#jd-nav-${area}`)
        .invoke("attr", "href")
        .then((href) => {
          cy.visit(`${href}`);
        });
      cy.get(
        "body > div.NavMain> main > div > div.Location> div.locationbox-acid-details-grid> div:nth-child(2)"
      ).should("contain.text", area);
      cy.get("code").should("contain.text", area);
      cy.get("div.BackNext").should("not.exist");
    });

    // Categories
    ["01", "02", "03", "04", "11", "12", "13", "14", "21"].map((category) => {
      cy.get(`#jd-nav-${category}`)
        .invoke("attr", "href")
        .then((href) => {
          cy.visit(`${href}`);
        });
      cy.get(
        "body > div.NavMain> main > div > div.Location> div.locationbox-acid-details-grid> div:nth-child(4)"
      ).should("contain.text", category);
      cy.get("code").should("contain.text", category);
      cy.get("div.BackNext").should("not.exist");
    });

    // === 02.02
    cy.get("#jd-nav-02-02")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}`);
      });
    cy.get("#bd-email").should("have.id", "bd-email");
    cy.get('[type="submit"]').should("have.value", "─▷     Subscribe     ◁─");

    // === 11.01
    cy.get("#jd-nav-11-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}`);
      });
    cy.get("img").should("be.visible");
    cy.get(".output").should("have.text", "11.01 Scope statement $");
    cy.get("#backnext-areas-and-categories").should(
      "contain.text",
      "Areas and categories"
    );

    // === 11.04
    cy.get("#jd-nav-11-04")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}`);
      });
    cy.get("img").should("be.visible");
  });
});
