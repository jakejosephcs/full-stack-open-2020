# Exercises 1.6.-1.11 [LINK to exercises](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#exercises-1-6-1-14)

## 1.6: unicafe step1
Like most companies, Unicafe collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.

The application must display the total number of collected feedback for each category. Your final application could look like this:

> ![Give feedback UI](https://fullstackopen.com/static/d4fe767d6d8eb46f1dd21334f5f9e46e/14be6/13e.png)

Once you refresh the page, the collected feedback is allowed to disappear.

## 1.7: unicafe step2
Expand your application so that it shows more statistics about the gathered feedback: the total number of collected feedback, the average score (good: 1, neutral: 0, bad: -1) and the percentage of positive feedback.

> ![New give feedback UI](https://fullstackopen.com/static/0a5d15ae9f055a15cb469b9c9223df41/14be6/14e.png)

## 1.8: unicafe step3
Refactor your application so that displaying the statistics is extracted into its own Statistics component. The state of the application should remain in the App root component.

## 1.9: unicafe step4
Change your application to display statistics only once feedback has been gathered.
> ![New give feedback UI](https://fullstackopen.com/static/b453d7533ae85dcaf3eccf342a353c58/14be6/15e.png)

## 1.10: unicafe step5
Let's continue refactoring the application. Extract the following two components:
* Button for defining the buttons used for submitting feedback
* Statistic for displaying a single statistic, e.g. the average score.

## 1.11*: unicafe step6
Display the statistics in an HTML table, so that your application looks roughly like this:

> ![Updated FeedBack UI](https://fullstackopen.com/static/a74acccc17aafb02b3801ffa1fcc0fdc/14be6/16e.png)