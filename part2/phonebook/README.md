# Exercises 2.6.-2.10. [LINK to exercises](https://fullstackopen.com/en/part2/forms#exercises-2-6-2-10)

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