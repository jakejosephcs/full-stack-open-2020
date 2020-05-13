# Exercises 2.1-2.5 [LINK to exercises](https://fullstackopen.com/en/part2/rendering_a_collection_modules#exercises-2-1-2-5)

## 2.1: course contents step6
Define a component responsible for formatting a single course called Course.

The component structure of the application can be, for example, the following:

```javascript
App
  Course
    Header
    Content
      Part
      Part
      ...
```
The rendered page can, for example, look as follows:

> ![Half stack app](https://fullstackopen.com/static/6e12df59c1c9e28c39ebdbe1b41ccf97/14be6/8e.png)

The application must work regardless of the number of parts a course has, so make sure the application works if you add or remove parts of a course.