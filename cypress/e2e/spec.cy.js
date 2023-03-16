/// <reference types="cypress" />

describe('Reportheld admin app testing', () => { 
})
const customTimeout = {timeout:1000000}
let targeturl = 'https://swbt-43857.alpha.reportheld-saas.com/admin/main.html#login'
let longwait = 25000


it('Lets you visit and access the website', () => {

  //logs you in the website
  cy.visit(targeturl, customTimeout)
  cy.wait(longwait) 
  cy.get("input[placeholder='Enter username']", customTimeout)
    .type("swbt-it-admin")
  cy.get("input[placeholder='Enter password']", customTimeout)
    .type("testOJT**123")
  cy.get("[class='gxs-button-default']", customTimeout)
    .click()
  cy.wait(longwait)
  


  //takes you to the users interface
  cy.get("[class='menu-item-icon fa fa-users']", customTimeout)
    .click()
  cy.wait(longwait)


  //gets the input field for the credentials
  //userName
  cy.get("[class='recommended-input']")
    .eq(0)
  .type("test1515")

  //password
  cy.get("[class='recommended-input']")
    .eq(1)
    .type("test1234")

  //firstName
  cy.get("[class='recommended-input']")
    .eq(1)
    .type("Alvin")

  //lastName
  cy.get("[class='recommended-input']")
    .eq(1)
    .type("Teniola")

  //birthDate
  cy.get("[data-bind='value: dateOfBirth")
    .type('1996-04-15')

  //email
  cy.get("[data-bind='value: email']")
    .type("test@test.com")

  //phone
  cy.get("[data-bind='value: phone']")
    .type("1234567")
  
  //primaryGroup
  cy.get('.recommended-input-primary-group > .btn-group > .btn', customTimeout)
  .click()
  cy.wait(3000)
  cy.get('.dropdown-menu.open')
  .find('a')
  .contains('Just aaron.giptner@stadtwerke-bayreuth.de (PUc7878J)')
  .click()

  //user configuration presets
  cy.get(':nth-child(8) > .btn-group > .btn > .filter-option', customTimeout)
    .click()
  cy.get('.dropdown-menu.open')
    .find('a')
    .contains('Specialist')
    .click()
  
  
  //save
  cy.get("[class='groupxs-btn btn-outline btn-danger']", customTimeout)
    .click()
  cy.get("[data-bind='visible: !hideOkButton()']")
    .click()
  cy.wait(longwait)


  //gets the user profile and logs you out the website
  cy.get("[class='menu-item-icon fa fa-user']", customTimeout)
    .click()
  cy.get("[class='gxs-btn gxs-style-danger gxs-style-block']", customTimeout)
  .contains('Sign Out')
  .click()
  cy.get("[data-bind='visible: !hideOkButton()']")
    .click()
  })
