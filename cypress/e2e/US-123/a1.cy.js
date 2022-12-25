/// <reference types="cypress" />

import POM from "./POM";

describe('REPORTS - HTML-', () => {
    beforeEach(() => {     
     //  cy.visit("https://demoqa.com")
         cy.visit("https://automationexercise.com")
      });
      it.skip('TOOLS QA', () => {
        const web= "https://demoqa.com"
            cy.location("protocol").should("contains","https")
            cy.location("host").should("eq","demoqa.com")
            cy.request(web).its("status").should("eq",200)

      });

      it.skip('RADIO BUTTON', () => {
        const a1= "Elements"
        cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').contains(a1).should("be.visible").click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').contains("Radio Button").click()
        cy.get('.col-md-6 > :nth-child(2) > :nth-child(2)').contains("Yes").click().should("exist")
        cy.get('header > a > img').click()
        
      });
      
      it.only('PROBANDOOOOOOOO', () => {
        POM.text_suscription()
        POM.email_suscription()
        POM.bottom_suscription()
        POM.alert_suscription()


      });


    });