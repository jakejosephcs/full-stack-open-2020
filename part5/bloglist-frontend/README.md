# Exercises 5.1.-5.4. [LINK to exercises](https://fullstackopen.com/en/part5/login_in_frontend#exercises-5-1-5-4)
We will now create a frontend for the bloglist backend we created in the last part.

## 5.1: bloglist frontend, step1
Implement login functionality to the frontend. The token returned with a successful login is saved to the application's state user.

If a user is not logged in, only the login form is visible.
![5.1](https://fullstackopen.com/static/7974958a48f7a4e873550b1b85bd8cbd/14be6/4e.png)

If user is logged in, the name of the user and a list of blogs is shown.
![5.1](https://fullstackopen.com/static/62a606d23ac2c2c96918567b8a8c7b32/14be6/5e.png)

User details of the logged in user do not have to be saved to the local storage yet.

## 5.2: bloglist frontend, step2
Make the login 'permanent' by using the local storage. Also implement a way to log out.

![5.2](https://fullstackopen.com/static/fa111e6eccf20340b5258c12553d2ea6/14be6/6e.png)

Ensure the browser does not remember the details of the user after logging out.

## 5.3: bloglist frontend, step3
Expand your application to allow a logged in user to add new blogs:

![5.3](https://fullstackopen.com/static/b9f4cf7f481e4f1358be610031afe219/14be6/7e.png)

## 5.4*: bloglist frontend, step4
Implement notifications which inform the user about successful and unsuccessful operations at the top of the page. For example, when a new blog is added, the following notification can be shown:

![5.4](https://fullstackopen.com/static/b9f4cf7f481e4f1358be610031afe219/14be6/7e.png)

Failed login can show the following notification:

![5.4](https://fullstackopen.com/static/5f30f6f454735133b39d706a3fa7f9c1/14be6/9e.png)

The notifications must be visible for a few seconds. It is not compulsory to add colors.

# Exercises 5.5.-5.10. [LINK to exercises](https://fullstackopen.com/en/part5/props_children_and_proptypes#exercises-5-5-5-10)

## 5.5 Blog list frontend, step5
Change the form for creating blog posts so that it is only displayed when appropriate.

By default the form is not visible

![5.5](https://fullstackopen.com/static/de4cfabdf46a837f1f0bfdba4fd27d67/14be6/13ae.png)

It expands when button new note is clicked

![5.5](https://fullstackopen.com/static/0cb27abc7b56ba5ecdd7e9d48d325c87/14be6/13be.png)

The form closes when a new blog is created.

## 5.6 Blog list frontend, step6
Separate the form for creating a new blog into its own component (if you have not already done so), and move all the states required for creating a new blog to this component.

## 5.7* Blog list frontend, step7
Let's add each blog a button, which controls if all of the details about the blog are shown or not.

Full details of the blog open when the button is clicked.

![5.7](https://fullstackopen.com/static/b49e9ca45d0582829eed343baad44910/14be6/13ea.png)

And the details are hidden when the button is clicked again.

At this point the like button does not need to do anything.

## 5.8*: Blog list frontend, step8
Implement the functionality for the like button

## 5.9*: Blog list frontend, step9
Modify the application to list the blog posts by the number of likes.

## 5.10*: Blog list frontend, step10
Add a new button for deleting blog posts. Also implement the logic for deleting blog posts in the backend.

Your application could look something like this:

![5.10](https://fullstackopen.com/static/87b7180f1f10ce670af1bc21f50233ec/14be6/14ea.png)

Show the button for deleting a blog post only if the blog post was added by the user.

# Exercises 5.11.-5.12. [LINK to exercises](https://fullstackopen.com/en/part5/props_children_and_proptypes#exercises-5-11-5-12)

## 5.11: Blog list frontend, step11
Define PropTypes for one of the components of your application.

## 5.12: Blog list frontend, step12
Add ESlint to the project. Define the configuration according to your liking. Fix all of the linter errors.

# Exercises 5.13.-5.16. [LINK to exercises](https://fullstackopen.com/en/part5/testing_react_apps#exercises-5-13-5-16)
## 5.13: Blog list tests, step1
Make a test which checks that the component displaying a blog renders the blog's title and author, but does not render its url or number of likes by default

Add CSS-classes to the component to help the testing as necessary.

## 5.14: Blog list tests, step2
Make a test which checks that blog's url and number of likes are shown when the button controlling the shown details has been clicked.

## 5.15: Blog list tests, step3
Make a test which ensures that if the like button is clicked twice, the event handler the component received as props is called twice.

## 5.16*: Blog list tests, step4
Make a test for the new blog form. The test should check, that the form calls the event handler it received as props with the right details when a new blog is called.

# Exercises 5.17.-5.22. [LINK to exercises](https://fullstackopen.com/en/part5/end_to_end_testing#exercises-5-17-5-22)
In the last exercises of this part we will do some E2E tests for our blog application. 

## 5.17: bloglist end to end testing, step1
Configure Cypress to your project. Make a test for checking that the application displays the login form by default.

The structure of the test must be as follows

```javascript
describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    // ...
  })
})
```