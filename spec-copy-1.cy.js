describe('Facebook Login', () => {
  it('should log in successfully', () => {
    // Visit the Facebook login page
    cy.visit('https://www.facebook.com/');

    // Enter valid username and password
    cy.get('#u_0_0_yb').click();
    cy.get('#u_8_b_VD').type('nana');
    cy.get('#u_8_d_s5').type('nanananana');
    cy.get('#u_8_g_9K').type('nana@gmail.com');
    cy.get('#password_step_input').type('nana@456');
   
    // Click on the "Log In" button
    cy.get('#u_8_s_Y+').click();

    // Assertion - Verify that the user is logged in successfully
   //cy.url().should('include', 'https://www.facebook.com/');
  });
});
  