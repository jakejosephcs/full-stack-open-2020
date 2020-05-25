# Exercises 3.1.-3.6. [LINK to exercises](https://fullstackopen.com/en/part3/node_js_and_express#exercises-3-1-3-6)

# Exercises 3.7.-3.8. [LINK to exercises](https://fullstackopen.com/en/part3/node_js_and_express#exercises-3-7-3-8)

# Exercises 3.9.-3.11. [LINK to exercises](https://fullstackopen.com/en/part3/deploying_app_to_internet#exercises-3-9-3-11)

# Exercise 3.12. [LINK to exercises](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#exercise-3-12)

# Exercises 3.15.-3.18. [LINK to exercises](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#exercises-3-15-3-18)


## 3.1: Phonebook backend step1

Implement a Node application that returns a hardcoded list of phonebook entries from the address http://localhost:3001/api/persons:

> ![3.1 finished](https://fullstackopen.com/static/26ba32b70d616dfcb3b205941d6f8300/14be6/22e.png)

The application must be started with the command ```npm start```.

The application must also offer an ```npm run dev``` command that will run the application and restart the server whenever changes are made and saved to a file in the source code.

## 3.2: Phonebook backend step2
Implement a page at the address http://localhost:3001/info that looks roughly like this:

> ![3.2 finished](https://fullstackopen.com/static/40586be0ef70567dd132f7c371728283/14be6/23ea.png)

The page has to show the time that the request was received and how many entries are in the phonebook at the time of processing the request.

## 3.3: Phonebook backend step3
Implement the functionality for displaying the information for a single phonebook entry. The url for getting the data for a person with the id 5 should be http://localhost:3001/api/persons/5

If an entry for the given id is not found, the server has to respond with the appropriate status code.

## 3.4: Phonebook backend step4
Implement functionality that makes it possible to delete a single phonebook entry by making an HTTP DELETE request to the unique URL of that phonebook entry.

## 3.5: Phonebook backend step5
Expand the backend so that new phonebook entries can be added by making HTTP POST requests to the address http://localhost:3001/api/persons.

Generate a new id for the phonebook entry with the Math.random function. Use a big enough range for your random values so that the likelihood of creating duplicate id's is small.

## 3.6: Phonebook backend step6
Implement error handling for creating new entries. The request is not allowed to succeed, if:

* The name or number is missing
*  The name already exists in the phonebook

Respond to requests like these with the appropriate status code, and also send back information that explains the reason for the error, e.g.:

```{ error: 'name must be unique' }```

### 3.7: Phonebook backend step7
Add the [morgan](https://github.com/expressjs/morgan) middleware to your application for logging. Configure it to log messages to your console based on the tiny configuration.

## 3.8*: Phonebook backend step8
Configure morgan so that it also shows the data sent in HTTP POST requests:

> ![3.8 finished](https://fullstackopen.com/static/4ed4b48465d48df517158501c0be187e/14be6/24.png)

## 3.9 phonebook backend step9
Make the backend work with the frontend from the previous part. Do not implement the functionality for making changes to the phone numbers yet, that will be implemented in exercise 3.17.

## 3.10 phonebook backend step10
Deploy the backend to the internet, for example to Heroku.

Test the deployed backend with a browser and Postman or VS Code REST client to ensure it works.

Create a README.md at the root of your repository, and add a link to your online application to it.

> [Link to online app (backend)](https://nameless-castle-40757.herokuapp.com/api/persons)

## 3.11 phonebook full stack
Generate a production build of your frontend, and add it to the internet application using the method introduced in this part.

Also make sure that the frontend still works locally.

> [Link to online app (frontend)](https://nameless-castle-40757.herokuapp.com/)

## 3.12: Command-line database
Create a cloud-based MongoDB database for the phonebook application with MongoDB Atlas.

Create a mongo.js file in the project directory, that can be used for adding entries to the phonebook, and for listing all of the existing entries in the phonebook.

## 3.13: Phonebook database, step1
Change the fetching of all phonebook entries so that the data is fetched from the database.

Verify that the frontend works after the changes have been made.

## 3.14: Phonebook database, step2
Change the backend so that new numbers are saved to the database. Verify that your frontend still works after the changes.

At this point, you can choose to simply allow users to create all phonebook entries. At this stage, the phonebook can have multiple entries for a person with the same name.

## 3.15: Phonebook database, step3
Change the backend so that deleting phonebook entries is reflected in the database.

Verify that the frontend still works after making the changes.

## 3.16: Phonebook database, step4
Move the error handling of the application to a new error handler middleware.

## 3.17*: Phonebook database, step5
If the user tries to create a new phonebook entry for a person whose name is already in the phonebook, the frontend will try to update the phone number of the existing entry by making an HTTP PUT request to the entry's unique URL

Modify the backend to support this request.

Verify that the frontend works after making your changes.

