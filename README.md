# What 2 Watch

Deployed at Heroku:

https://sleepy-lake-06641.herokuapp.com/

Github Repository:

https://github.com/brandonljackson23/what-2-watch

## Table of Contents

* [Project Requirements](#requirements)
* [Description](#description)
* [Installation](#installation)
* [Contributing](#contributing)
* [Questions](#questions)
* [Credits](#credits)

## Requirements 

Your project should fulfill the following requirements:
<ul>
<li>Use Node.js and Express.js to create a RESTful API.</li>
<li>Use Handlebars.js as the templating engine.</li>
<li>Use MySQL and the Sequelize ORM for the database.</li>
<li>Have both GET and POST routes for retrieving and adding new data.</li>
<li>Be deployed using Heroku (with data).</li>
<li>Use at least one new library, package, or technology that we haven’t discussed.</li>
<li>Have a polished UI.</li>
<li>Be responsive.</li>
<li>Be interactive (i.e., accept and respond to user input).</li>
<li>Have a folder structure that meets the MVC paradigm.</li>
<li>Include authentication (express-session and cookies).</li>
<li>Protect API keys and sensitive information with environment variables.</li>
<li>Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class/id naming conventions, indentation, quality comments, etc.).</li>
<li>Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).</li>
<li>Finally, you must add your project to the portfolio that you created in Module 2.</li>
</ul>

USER STORY:

As a user, I want an application that helps a group of people decide what movie to watch based on popularity votes by the group. So that we can end endless hours of waisted time trying to figure out what to watch.  Given my input of suggesting movies and voting, I want to see the movie that the majority of the group would like to watch.

MOTIVATION FOR DEVELOPMENT:

Hoping to put an end to waisted hours of endlessly scrolling through movies trying to figure out what me and my friends want to watch.

PROCESS:

For our project we decided to create an application for a group of people that they could use to suggest and vote on a movie that the group would watch.

We started the project by creating the back-end with routes and models that would accept the valid input of the front end, and return the correct response. We created a file structure for the project that would allow the code to be easily maintained by future developers.

We then created the front end to be visually pleasing and functional to allow the user to interface with the back-end.

The user initially has a choice to login (or signup if they have not yet registered) to the application. They then have the ability to suggest a movie and/or vote on movies that have already been suggested. Their user information is unique and they are not allowed to vote on the same movie more than once. Once the group members have voted the back-end adds up the votes and displays the winning choice.

A session ID will be created to allow a user to be remembered by the server until the user logout is selected, allowing the user to stay logged in even if they go to another website.

FUTURE DEVELOPMENT:

We anticipate other API's may be used to auto-suggest movies based on popularity through movie sites such as Netflix, Hulu, Amazon, ...
We also anticipate being able to add specific genres, time periods ('70s, '80s, '90s), and movies that are similar to the ones the users suggest.

## Description 

This application allows a group of people to suggest and vote on movies to watch.
Users must signup or login to participate.
The movie with the most votes wins!

<!-- insert pics of the program -->
<img src="/assets/images/Screenshot%20(95).png" />
<!-- insert pics of the program -->
<img src="/assets/images/Screenshot%20(96).png" />
<!-- insert pics of the program -->
<img src="/assets/images/Screenshot%20(97).png" />

<img src="/assets/images/Screenshot%20(98).png" />

<img src="/assets/images/Screenshot%20(99).png" />


## Installation

Deployed at Heroku:

<!-- insert Heroku link -->

## Contributing

Submit a Git Issue:

https://github.com/brandonljackson23/what-2-watch/issues


## Questions

Submit a Git Issue:

https://github.com/brandonljackson23/what-2-watch/issues

## Credits

Brandon Jackson, Christopher Hadley, Jim Hopkinson, John Tyler.
Presented on August 13, 2020.