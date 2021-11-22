/// <reference types="cypress"  />

it ("cy.get() - Selecionando Elementos", () => {
    cy
    .visit('?id_category=5&controller=category')
    .get('#layered_block_left')
})
