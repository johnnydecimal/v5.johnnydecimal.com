describe("Visual snapshots", () => {
  it("Take visual snapshots of site", () => {
    cy.visit("/"); // update baseUrl if required

    // Home page
    cy.matchImageSnapshot("home page");

    // Areas
    cy.get("#jd-nav-00-09")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("00-09");
    cy.get("#jd-nav-10-19")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("10-19");
    cy.get("#jd-nav-20-29")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("20-29");

    // Categories
    cy.get("#jd-nav-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("01");
    cy.get("#jd-nav-02")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("02");
    cy.get("#jd-nav-03")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("03");
    cy.get("#jd-nav-04")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("04");
    cy.get("#jd-nav-11")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("11");
    cy.get("#jd-nav-12")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("12");
    cy.get("#jd-nav-13")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("13");
    cy.get("#jd-nav-14")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("14");
    cy.get("#jd-nav-21")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("21");

    // IDs
    cy.get("#jd-nav-01-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("01-01");
    cy.get("#jd-nav-01-02")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("01-02");
    cy.get("#jd-nav-01-03")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("01-03");
    cy.get("#jd-nav-01-04")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("01-04");
    cy.get("#jd-nav-02-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("02-01");
    cy.get("#jd-nav-02-02")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("02-02");
    cy.get("#jd-nav-02-03")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("02-03");
    cy.get("#jd-nav-02-04")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("02-04");
    cy.get("#jd-nav-03-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("03-01");
    cy.get("#jd-nav-03-02")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("03-02");
    cy.get("#jd-nav-04-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("04-01");
    cy.get("#jd-nav-04-02")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("04-02");
    cy.get("#jd-nav-11-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("11-01");
    cy.get("#jd-nav-11-02")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("11-02");
    cy.get("#jd-nav-11-03")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("11-03");
    cy.get("#jd-nav-11-04")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("11-04");
    cy.get("#jd-nav-11-05")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("11-05");
    cy.get("#jd-nav-11-06")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("11-06");
    cy.get("#jd-nav-11-07")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("11-07");
    cy.get("#jd-nav-11-08")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("11-08");
    cy.get("#jd-nav-12-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("12-01");
    cy.get("#jd-nav-12-02")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("12-02");
    cy.get("#jd-nav-12-03")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("12-03");
    cy.get("#jd-nav-12-04")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("12-04");
    cy.get("#jd-nav-12-05")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("12-05");
    cy.get("#jd-nav-13-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("13-01");
    cy.get("#jd-nav-14-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("14-01");
    cy.get("#jd-nav-21-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("21-01");
    cy.get("#jd-nav-21-02")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("21-02");
  });
});
