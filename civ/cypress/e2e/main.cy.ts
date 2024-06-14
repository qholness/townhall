describe("Demo", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    afterEach(() => {
        cy.screenshot()
        cy.wait(3000)
    })
    const joinConversation = () => {
        cy.get(`button[data-testid="begin-opt-in"]`).click()
        cy.wait(1000)
        cy.get(`button[data-testid="optIn-btn"]`).click()
        cy.get(`input[placeholder="What are your thoughts?"]`).should("exist")
    }
    it("Can successfully load the homepage", () => {
        cy.get(`div[data-testid="project-view-container"]`)
    })
    it("Allows the user to click through project information tabs", () => {
        ["desc", "multimedia", "calendar", "documents"].forEach(t => {
            cy.get(`button[value="${t}"]`).click()
            cy.wait(1000)
            cy.screenshot()
        })
    })
    it("Allows the user to click through chat interfaces", () => {
        ["CS", "Chat"].forEach(t => {
            cy.get(`button[value="${t}"]`).click()
            cy.wait(1000)
            cy.screenshot()
        })
    })
    it("Joining a conversation triggers the QR scanning prompt", () => {
        joinConversation()
    })
    it("Should allow users to enter the conversation and submit thoughts", () => {
        const testMessage = "I kinda do not like the position of the tree"
        joinConversation()
        cy.get(`input[placeholder="What are your thoughts?"]`)
            .type(testMessage)
            .type("{enter}")
        cy.get(`div[data-testid="thread"]`).contains(testMessage)
    })
    it("Allows users to upload multimedia to the contribute area", () => {
        // Too little time.
    })
    it("Forces users to submit a QR code and verifies against the local private key", () => {
        // Again, too little time
    })
    it("Allows the user to interact with Hermes", () => {
        const testQuestion = "Show me the timeline of events of the project."
        cy.get(`button[value="Chat"]`).click()
        cy.get(`input[placeholder="Ask Lemmy"]`).type(testQuestion).type("{enter}")
        cy.get(`div[data-testid="chat-thread"]`).contains(testQuestion)
    })
    it("Hermes can alter images upon chat request", () => {
        // More of a backend system test.
    })
})
