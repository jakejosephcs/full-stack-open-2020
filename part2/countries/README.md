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
