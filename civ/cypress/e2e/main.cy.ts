describe("Demo", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    it("Can successfully load the homepage", () => {
        cy.get(`div[data-testid="project-view-container"]`)
    })
    it("Allows the user to click through project information tabs", () => { })
    it("Allows the user to click through chat interfaces", () => { })
    it("Joining a conversation triggers the QR scanning prompt", () => { })
    it("Forces users to submit a QR code and verifies against the local private key", () => { })
    it("Upon joining a conversation, a user can contribute to the planning conversation", () => { })
    it("Allows the user to interact with Hermes", () => { })
    it("Hermes can alter images upon chat request", () => { })
})
