describe("Map interface tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/map")
    })
    afterEach(() => {
        cy.screenshot()
    })
    it("Renders the map", () => {
        // Root container
        cy.get("#mapLayout").should("exist")
        // Mapbox
        cy.get(".map-container").should("exist")
    })
})