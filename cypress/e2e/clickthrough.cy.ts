describe("Site clickthrough", () => {
  it("passes", () => {
    cy.visit("/");

    // Check that BackNext works from the home page
    cy.get("#backnext-areas-and-categories")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}`);
      });
    cy.get("#areas-and-categories").should("have.id", "areas-and-categories");
    cy.get("#areas-and-categories").should("have.text", "Areas and categories");

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
    ["01", "02", "11", "12", "13", "14", "21", "22", "23"].map((category) => {
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

    [
      "01.01",
      "01.02",
      "01.03",
      "01.04",
      "02.01",
      "02.02",
      "11.01",
      "11.02",
      "11.03",
      "11.04",
      "11.05",
      "11.06",
      "11.07",
      "11.08",
      "12.01",
      "12.02",
      "12.03",
      "12.04",
      "12.05",
      "13.01",
      "14.01",
      "21.01",
      "21.02",
      "21.03",
      "22.01",
      "23.01",
      "23.02",
    ].map((id) => {
      const htmlId = id.replace(".", "");
      cy.get(`#jd-nav-${htmlId}`)
        .invoke("attr", "href")
        .then((href) => {
          cy.visit(`${href}`);
        });
      cy.get(
        "body > div.NavMain.astro-SCKKX6R4 > main > div > div.Location.astro-GTLXTQD3 > div.locationbox-acid-details-grid.astro-GTLXTQD3 > div:nth-child(6)"
      ).should("contain.text", id);
    });

    // TODO: do a full site clickthrough using BackNext.

    // === Random other elements
    // === 02.02
    cy.get("#jd-nav-2102")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}`);
      });
    cy.get("#bd-email").should("have.id", "bd-email");
    cy.get('[type="submit"]').should("have.value", "─▷     Subscribe     ◁─");

    // === 11.01
    cy.get("#jd-nav-1101")
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
    cy.get("#jd-nav-1104")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}`);
      });
    cy.get("img").should("be.visible");
  });
});
