# Exercises 2.12.-2.14. [LINK to exercises](https://fullstackopen.com/en/part2/getting_data_from_server#exercises-2-11-2-14)

## 2.12* Data for countries, Step1

The API https://restcountries.eu provides a data for different countries in a machine readable format, a so-called REST API.

Create an application, in which one can look at data of various countries

The user interface is very simple. The country to be shown is found by typing a search query into the search field.

If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific:

> ![2.12 too many matches](https://fullstackopen.com/static/d8a3e3b3af8907d0c3dd495ef0d26ba6/14be6/19b1.png)

If there are ten or fewer countries, but more than one, then all countries matching the query are shown:

> ![2.12 matches](https://fullstackopen.com/static/1d4ebf199806ccfe0df529c08e2a0c6d/14be6/19b2.png)

When there is only one country matching the query, then the basic data of the country, its flag and the languages spoken there, are shown:

> ![2.12 matches](https://fullstackopen.com/static/1d4bba516fb538c5214f37c4a2ab0f8e/14be6/19b3.png)

 It is enough that your application works for most of the countries. Some countries, like Sudan, can cause be hard to support, since the name of the country is part of the name of another country, South Sudan. You need not to worry about these edge cases.

## 2.13*: Data for countries, step2
Improve on the application in the previous exercise, such that when the names of multiple countries are shown on the page there is a button next to the name of the country, which when pressed shows the view for that country:

> ![2.13 Data for Countries](https://fullstackopen.com/static/b8986829d36bd14bbbd6270e0e8d2edf/14be6/19b4.png)

In this exercise it is also enough that your application works for most of the countries. Countries whose name appears in the name of another country, like Sudan, can be ignored.

## 2.14*: Data for countries, step3
Add to the view showing the data of a single country, the weather report for the capital of that country. There are dozens of providers for weather data, like https://weatherstack.com/

> ![2.13 Data for Countries](https://fullstackopen.com/static/55e0007d51bf9506697001f03860a4d9/14be6/19ba.png)
