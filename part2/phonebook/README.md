# Exercises 2.6.-2.10. [LINK to exercises](https://fullstackopen.com/en/part2/forms#exercises-2-6-2-10)

# Exercises 2.11 [LINK to exercises](https://fullstackopen.com/en/part2/getting_data_from_server#exercises-2-11-2-14)

# Exercises 2.15.-2.18 [LINK to exercises](https://fullstackopen.com/en/part2/altering_data_in_server#exercises-2-15-2-18)

# Exercises 2.19.-2.20 [LINK to exercises](https://fullstackopen.com/en/part2/adding_styles_to_react_app#exercises-2-19-2-20)


## 2.6: The Phonebook Step1
Let's create a simple phonebook. In this part we will only be adding names to the phonebook.

Let us start with implementing the addition of a person to phonebook.

You can use the code below as a starting point for the App component of your application:

```javascript
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App
```
After finishing this exercise your application should look something like this:

> ![2.6 finished](https://fullstackopen.com/static/501199c4a6d7a5702a7bdf31998d5a1d/14be6/10e.png)


## 2.7: The Phonebook Step2
Prevent the user from being able to add names that already exist in the phonebook. 
Issue a warning with the alert command when such an action is attempted:

> ![2.7 finished](https://fullstackopen.com/static/d5be58590c1460090cb1c87adf201886/14be6/11e.png)

## 2.8: The Phonebook Step3
Expand your application by allowing users to add phone numbers to the phone book:

> ![2.8 finished](https://fullstackopen.com/static/3068a34af61692773a06d60ee93638a9/14be6/12e.png)

## 2.9*: The Phonebook Step4
Implement a search field that can be used to filter the list of people by name:

> ![2.9 finished](https://fullstackopen.com/static/4b5897029d4c9e2eb61631ca4c1a4f24/14be6/13e.png)

## 2.10: The Phonebook Step5
If you have implemented your application in a single component, refactor it by extracting suitable parts into new components. 

## 2.11: The Phonebook Step6
We continue with developing the phonebook. Store the initial state of the application in the file db.json.
Modify the application such that the initial state of the data is fetched from the server using the axios-library. Complete the fetching with an Effect hook.

## 2.15: Phonebook step7
Currently the numbers that are added to the phonebook are not saved to a backend server. Fix this situation.

## 2.16: Phonebook step8
Extract the code that handles the communication with the backend into its own module.

## 2.17: Phonebook step9
Make it possible for users to delete entries from the phonebook. The deletion can be done through a dedicated button for each person in the phonebook list. You can confirm the action from the user by using the window.confirm method:

> ![2.17 finished](https://fullstackopen.com/static/591ebc9e0e2dc651c0d2877efd763a59/14be6/24e.png)

## 2.18*: Phonebook step10
Change the functionality so that if a number is added to an already existing user, the new number will replace the old number.

> ![2.18 finished](https://fullstackopen.com/static/7353398520426bd823cf92202767653f/14be6/16e.png)

## 2.19: Phonebook step11
Show a notification that lasts for a few seconds after a successful operation is executed (a person is added or a number is changed):

> ![2.19 finished](https://fullstackopen.com/static/da9af454f06489ca6e7453150beda738/14be6/27e.png)

## 2.20*: Phonebook step12
If you delete a person in browser 1 a short while before attempting to change the person's phone number in browser 2, you will get the following error message:

> ![2.20 finished](https://fullstackopen.com/static/be832524a82a387fb3adddda37eaa149/14be6/29b.png)

Fix the issue according to the example shown in promise and errors in part 2. Modify the example so that the user is shown a message when the operation does not succeed. 

> ![2.20.1 finished](https://fullstackopen.com/static/dfc66f03514b3f013cf19ba1339ba34f/14be6/28e.png)
