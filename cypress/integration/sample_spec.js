
 // Arrange - setup initial app state
 // - visit a web page
 // - query for an element
 
      
 // Act - take an action
 // - interact with that element


 // Assert - make an assertion about page content




describe("My First Cypress Test", function () {
    it('UI visit Do List App page', function () {
     cy.visit('localhost:5000')
    })
})








 describe("My First Cypress Test", () => {
    it("Just a blank page for now", () => {
        expect(true).to.equal(true)
    })
}) 