/// <reference types="cypress"  />

it ("cy.contains() - Selecionando Elementos", () => {
    cy
    .visit('?id_category=5&controller=category')
    .get('.layered_filter')
    .contains('Orange')
})
