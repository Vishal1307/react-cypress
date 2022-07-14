describe("checked for counter",()=>{
    it("shuold Be present",()=>{
        cy.visit("http://localhost:3000")
        cy.get("h1").should("exist")
        cy.get(".inc_count").should("exist")
        cy.get(".dec_count").should("exist")
    })
    it("Increments the counter",()=>{
        cy.visit("http://localhost:3000")
        cy.get("h1").should("have.text",0)
        cy.get(".inc_count").click()
        cy.get("h1").should("have.text",1)
        
    })
    it("Decrement the counter",()=>{
        cy.visit("http://localhost:3000")
        cy.get("h1").should("have.text",0)
        cy.get(".dec_count").click()
        cy.get("h1").should("have.text",-1)
        
    })
    it("Input hase present",()=>{
        cy.visit("http://localhost:3000")
        cy.get("input").should("exist",)
        // cy.get("input").change()
        cy.get("input").should("have.value",typedText)
    })
})