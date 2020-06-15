describe('Blog app', function () {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    cy.request('POST', 'http://localhost:3001/api/users', {
      username: 'jjoseph',
      password: 'jjcs2020',
      name: 'Jake Joseph'
    })
    cy.request('POST', 'http://localhost:3001/api/users', {
      username: 'ljoseph',
      password: 'ljcs2020',
      name: 'Laura Joseph'
    })
    cy.visit('http://localhost:3000/')
  })

  it('Login form is shown', function () {
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

  describe('When logged in', function() {
    beforeEach(function() {
      cy.login({ username: 'jjoseph', password: 'jjcs2020' })
      cy.get('#username').type('jjoseph')
      cy.get('#password').type('jjcs2020')
      cy.get('#login').click()
    })

    it('A blog can be created', function() {
      cy.contains('Create new Blog').click()
      cy.get('#title').type('Learning about Cypress')
      cy.get('#author').type('Cypress')
      cy.get('#url').type('https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell')
      cy.get('#create').click()

      cy.contains('Learning about Cypress by Cypress')
    })
  })

  describe('Blogs have been created from multiple users', function() {
    beforeEach(function() {
      cy.login({ username: 'jjoseph', password: 'jjcs2020' })
      cy.get('#username').type('jjoseph')
      cy.get('#password').type('jjcs2020')
      cy.get('#login').click()

      cy.createBlog({ author: 'John Doe', title: 'test1', url: '123.com' })
      cy.createBlog({ author: 'Josh Eod', title: 'test2', url: '456.com' })
      cy.contains('Logout').click()

      cy.login({ username: 'ljoseph', password: 'ljcs2020' })
      cy.get('#username').type('ljoseph')
      cy.get('#password').type('ljcs2020')
      cy.get('#login').click()
      cy.createBlog({ author: 'Jane Oed', title: 'test3', url: '789.com' })

      cy.contains('test1').parent().parent().as('blog1')
      cy.contains('test2').parent().parent().as('blog2')
      cy.contains('test3').parent().parent().as('blog3')
    })

    it('User can like the blog', function() {
      cy.get('@blog3').contains('view').click()
      cy.get('@blog3').contains('like').click()
      cy.get('@blog3').contains('likes 1')
    })

    it('Blogs are ordered according to likes', function() {
      cy.get('@blog1').contains('view').click()
      cy.get('@blog2').contains('view').click()
      cy.get('@blog3').contains('view').click()

      cy.get('@blog1').contains('like').click()
      cy.get('@blog1').contains('like').click()
      cy.get('@blog1').contains('like').click()
      cy.get('@blog1').contains('like').click()
      cy.get('@blog2').contains('like').click()
      cy.get('@blog2').contains('like').click()
      cy.get('@blog2').contains('like').click()
      cy.get('@blog3').contains('like').click()

      cy.get('.blog').then(blogs => {
        cy.wrap(blogs[0]).contains('likes 2')
        cy.wrap(blogs[1]).contains('likes 1')
        cy.wrap(blogs[2]).contains('likes 1')
      })
    })

    it('Can be deleted', function() {
      cy.get('@blog3').contains('view').click()
      cy.get('@blog3').contains('Remove').click()

      cy.get('#root > :nth-child(1)').should('not.contain', 'test3')

      cy.get('@blog1').contains('view').click()
      cy.get('@blog1').should('not.contain', 'remove')
    })
  })
})