import { HomePage } from "../pageObjects/HomePage"
describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
  })
    // Make an Appointment
  it('Make an Appointment', () => {
    // Click - Make Appointment
    HomePage.makeAppointmentButton.click();
    // Set username and password fields with the demo account credentials
    HomePage.usernameButton.type('John Doe');
    HomePage.passwordButton.type('ThisIsNotAPassword');
    // Click - Login
    HomePage.loginButton.click();
    // Select a facility from the dropdown
    HomePage.facilityfield.select('Seoul CURA Healthcare Center');
    // Check - Apply for hospital readmission
    HomePage.hospitalReadmission.click();
    // Select - Medicaid
    HomePage.programMedicaid.click();
    // Set Date value by using the widget - 30
    HomePage.dateField.type('30/12/2023{esc}');
    // Set comment - CURA Healthcare Service
    HomePage.commentField.type('CURA Healthcare Service');
    // Click - Book Appointment
    HomePage.bookAppointmentButton.click();
    // Verify - Appointment Confirmation
    HomePage.facilitycheck.should('have.text', 'Seoul CURA Healthcare Center');
    HomePage.hospitalReadmissioncheck.should('have.text', 'Yes');
    HomePage.programMedicaidcheck.should('have.text', 'Medicaid');
    HomePage.dateFieldcheck.should('have.text', '30/12/2023');
    HomePage.commentFieldcheck.should('have.text', 'CURA Healthcare Service');



  }); 

  it('Appointment history empty', () => {
   // Click - Make Appointment
   HomePage.makeAppointmentButton.click();
   // Set username and password fields with the demo account credentials
   HomePage.usernameButton.type('John Doe');
   HomePage.passwordButton.type('ThisIsNotAPassword');
   // Click - Login
   HomePage.loginButton.click();
   // validate the sidebar active class
   HomePage.menuButton.click();
   HomePage.sidebarActive.should('have.class', 'active');
   // Click - History
  HomePage.historyButton.click();
  // Validate that - No appointment - is visible
  HomePage.appointmentHistory.should('be.visible');
   





  });





})