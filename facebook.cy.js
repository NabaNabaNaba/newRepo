describe("Facebook Sign Up", () => {
  it("should allow a user to sign up successfully", () => {
      // Go to the sign up  page.
      cy.visit("https://www.nepalemarket.com/account/register");
     
      
      // Enter a first name.
      cy.get("customer[first_name]").type("naba");

      // Enter a last name.
      cy.get("#customer[last_name]").type("karki");

      //
      cy.get("#customer[email]").type("karki@gmail.com");

      //enter password
      cy.get("#customer[password]").type("Mypass@123");

      // Click the create account button.
      cy.get(".form__submit button button--primary button--full").click();

      // Assert that the user is successfully signed up.
      cy.get("#error_message").should("not.exist");
  });
});