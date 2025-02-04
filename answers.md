#   Answers to the short questions

##  Which database you have chosen and why?
-   I chose MongoDB wiht Mongoose because
    -   ODM as it is an easy to work with database
    -   MongoDB's reference system works well for the category -> subcategory -> item hierarchy

##  3 things that you learned from this assignment?
-   Implementing hierarchical data structures in MongoDB using references
-   Iterating the keys of an object like an array using `Object.keys`
-   Running a middleware before saving the document to the database to set value of a parameter

##  What was the most difficult part of the assignment?
-   Figuring out how middleware for a model works took some time, so I would say the middleware part for model was the toughest

##  What you would have done differently given more time?
-   Would have implemented caching using Redis to increase the speed of `GET` operations
-   Would have Dockerized the application
-   Would have implemented sign-in/ registeration option thus allowing only registered users to interact with the app