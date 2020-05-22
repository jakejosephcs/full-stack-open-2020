# Exercises 3.1.-3.6. [LINK to exercises](https://fullstackopen.com/en/part3/node_js_and_express#exercises-3-1-3-6)


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