# Exercises 7.4 - 7.8. [LINK to exercises](https://fullstackopen.com/en/part7/custom_hooks#exercises-7-4-7-8)
Let's return to working with anecdotes. Use the redux-free anecdote app found in the repository https://github.com/fullstack-hy2020/routed-anecdotes as the starting point for the exercises.

## 7.4, 7.5, 7.6
Complete in ```routed-anecdotes``` folder


## 7.7: country hook
Use the code from https://github.com/fullstack-hy2020/country-hook as your starting point.

The application can be used to search for country details from the https://restcountries.eu/ interface. If country is found, the details of the country are displayed

![7.7](https://fullstackopen.com/static/b705259ca07b94ce736ac882dbbce776/14be6/69ea.png)

If country is not found, message is displayed to the user

![7.7](https://fullstackopen.com/static/b8f3f1b250a195526cc2816eb8f69c41/14be6/70ea.png)

The application is otherwise complete, but in this exercise you have to implement a custom hook ```useCountry```, which can be used to search for the details of the country given to the hook as a parameter.

Use the api endpoint https://restcountries.eu/#api-endpoints-full-name to fetch country details in a ```useEffect```-hook within your custom hook.

