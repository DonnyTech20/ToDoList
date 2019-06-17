
 // Arrange - setup initial app state
 // - visit a web page
 // - query for an element
 
      
 // Act - take an action
 // - interact with that element


 // Assert - make an assertion about page content




describe("My First Cypress Test", function () {
    it('UI visit Do List App page', function () {
     cy.visit('localhost:5000')

    cy.contains('Click Here').click()
    cy.title().should('eq','To Do List')
    cy.url().should('include','/work')
    cy.get('footer')

    })
})



 /* describe("Cypress new Page Test", () => {
    it("A work list page", () => {
       cy.url()
       .should('include','/work')
    })
}) */