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