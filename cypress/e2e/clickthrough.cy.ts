describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");

    // === 00-09
    cy.get("#jd-nav-00-09")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}`);
      });
    cy.get("code").should("have.text", "00-09 Site administration");

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
    cy.get(":nth-child(15) > :nth-child(1) > .area-title").should(
      "have.text",
      "Finance and accounts"
    );
    cy.get(
      ":nth-child(7) > .category-number-and-title > .category-title"
    ).should("have.text", "Photography");
  });
});
