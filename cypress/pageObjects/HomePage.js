import { BasePage } from "./BasePage";
export class HomePage extends BasePage {
    static get url() {
      return "/#/";
    }
    static get makeAppointmentButton() {
      return cy.get("#btn-make-appointment");
    }
    static get usernameButton() {
        return cy.get("#txt-username");
      }
    
    static get passwordButton() {
        return cy.get("#txt-password");
      }

    static get loginButton() {
        return cy.get("#btn-login");
      }
    static get facilityfield() {
        return cy.get("#combo_facility");
      }
    static get hospitalReadmission() {
            return cy.get("#chk_hospotal_readmission");
     }
    static get programMedicaid() {
        return cy.get("#radio_program_medicaid");
      }
    static get dateField() {
        return cy.get("#txt_visit_date");
      }
   
    
    static get commentField() {
        return cy.get("#txt_comment");
      }
    static get bookAppointmentButton() {
        return cy.get("#btn-book-appointment");
      }









}