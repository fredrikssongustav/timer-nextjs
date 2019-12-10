context("Timer", () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });

    it("can go back from clock page to index page", () => {
        cy.visit("localhost:3000/clock");

        cy.get("[data-testid=back-button]").click();

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/')
        })
    });

    it("can be given some values and submit to clock page", () => {
        cy.get("[data-testid=field-timevalue]").type("1");
        cy.get("[data-testid=field-timeunit]").type("h");
        cy.get("[data-testid=submit-button]").click();

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/clock')
        })
    });
});