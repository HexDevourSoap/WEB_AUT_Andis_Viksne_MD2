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

    static get hospitalReadmissionCheck() {
        return cy.get("#hospital_readmission");
      }

      static get facilitycheck() {
            return cy.get("#facility");
        }
        static get hospitalReadmissioncheck() {
            return cy.get("#hospital_readmission");
        }
        static get programMedicaidcheck() {
            return cy.get("#program");
        }
        static get dateFieldcheck() {
            return cy.get("#visit_date");
        }
        static get commentFieldcheck() {
            return cy.get("#comment");
        }
        static get menuButton() {
            return cy.get("#menu-toggle");
        }
        
        static get sidebarActive() {
          return cy.get("#sidebar-wrapper");
        }
        static get historyButton() {
          return cy.get("#sidebar-wrapper > ul > li:nth-child(4) > a");
        }
        static get appointmentHistory() {
          return cy.get("#history > div > div:nth-child(1) > div > p");
        }
        

}