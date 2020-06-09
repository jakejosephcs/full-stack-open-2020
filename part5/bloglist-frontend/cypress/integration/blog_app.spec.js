
describe('Blog app', function () {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    cy.request('POST', 'http://localhost:3001/api/users', {
      username: 'jjoseph',
      password: 'jjcs2020',
      name: 'Jake Joseph'
    })
    cy.visit('http://localhost:3000/')
  })

  it('Login form is shown', function () {
    cy.contains('Blogs')
    cy.contains('Login')
  })

  describe('Login', function() {
    it('succeeds with correct credentials', function() {
      cy.get('#username').click().type('jjoseph')
      cy.get('#password').click().type('jjcs2020')
      cy.get('#login').click()

      cy.contains('Jake Joseph is logged in')
      cy.contains('Logout')
      cy.contains('Create new Blog')
    })

    it('fails with wrong credentials', function() {
      cy.get('#username').click().type('jjoseph')
      cy.get('#password').click().type('jjcs202')
      cy.get('#login').click()

      cy.contains('Wrong Username or Password')
    })
  })
})