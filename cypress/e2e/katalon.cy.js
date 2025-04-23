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
    HomePage.dateField.type('12/30/2023{esc}');
    // Set comment - CURA Healthcare Service
    HomePage.commentField.type('CURA Healthcare Service');
    // Click - Book Appointment
    HomePage.bookAppointmentButton.click();
    // Verify - Appointment Confirmation
    



  }); 












})