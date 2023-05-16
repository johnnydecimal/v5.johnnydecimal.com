describe("Visual snapshots", () => {
  it("Take visual snapshots of site", () => {
    const matchImageSnapshotConfig = {
      allowSizeMismatch: true,
      failureThreshold: 2,
    };
    cy.visit("/"); // update baseUrl if required

    // Home page
    // cy.matchImageSnapshot("home page", {
    //   allowSizeMismatch: true,
    //   failureThreshold: 2,
    //   failureThresholdType: "percent",
    // });

    // Areas
    cy.get("#jd-nav-00-09")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("00-09");

    /*
    cy.get("#jd-nav-10-19")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("10-19", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-20-29")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("20-29", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });

    // Categories
    cy.get("#jd-nav-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("01", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-02")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("02", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-03")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("03", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-04")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("04", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-11")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("11", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-12")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("12", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-13")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("13", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-14")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("14", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-21")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("21", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });

    // IDs
    cy.get("#jd-nav-01-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("01-01", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-01-02")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("01-02", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-01-03")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("01-03", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-01-04")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("01-04", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-02-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("02-01", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-02-02")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("02-02", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-02-03")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("02-03", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-02-04")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("02-04", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-03-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("03-01", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-03-02")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("03-02", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-04-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("04-01", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-04-02")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("04-02", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-11-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("11-01", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-11-02")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("11-02", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-11-03")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("11-03", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-11-04")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("11-04", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-11-05")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("11-05", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-11-06")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("11-06", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-11-07")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("11-07", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-11-08")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("11-08", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-12-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("12-01", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-12-02")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("12-02", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-12-03")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("12-03", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-12-04")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("12-04", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-12-05")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("12-05", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-13-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("13-01", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-14-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("14-01", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-21-01")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("21-01", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    cy.get("#jd-nav-21-02")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(`${href}/`);
      });
    cy.matchImageSnapshot("21-02", {
      allowSizeMismatch: true,
      failureThreshold: 2,
      failureThresholdType: "percent",
    });
    */
  });
});
