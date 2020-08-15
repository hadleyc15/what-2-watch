# <div align="center">**WHAT2WATCH**</div>

## **PROJECT DESCRIPTION**
>The purpose of this project is to collaboratively develop a full-stack application that meets a real-world need. The project should include a quality user story
and acceptance criteria to aid development.The group should combine a robust back end—with servers, databases, advanced APIs, and user authentication—to an intuitive front end
The group is expected to present the project and convince an audience that it serves a purpose. Full project and presentation requirements are detailed below.  

> The COVID-19 Pandemic, the Black Lives Matter Movement, and natural phenomenons such as earthquakes and fires, have quickly moved to the forefront of concern across the world. As a result, Americans are turning to video streaming entertainment platforms such as Netflix to escape from the troubles around them and enjoy an evening of relief.

> What2Watch is an online application designed to aid Netflix watchers in determining what to watch.  Friends can log into What2Watch to nominate their movie choice for the week and others can vote on the nominees to determine a winner.

## **TABLE OF CONTENTS** 
[1. PROJECT DESCRIPTION](#PROJECT-DESCRIPTION)  
[2. TABLE OF CONTENTS](#TABLE-OF-CONTENTS)  
[4. APPLICATION LINKS](#APPLICATION-LINKS)  
[5. CONTRIBUTORS](#CONTRIBUTORS)  
[6. DEVELOPMENT](#DEVELOPMENT)  
[7. USER STORY](#USER-STORY)  
[8. ACCEPTANCE CRITERIA](#ACCEPTANCE-CRITERIA)  
[9. PROJECT REQUIREMENTS](#PROJECT-REQUIREMENTS)  
[10. PRESENTATION REQUIREMENTS](#PRESENTATION-REQUIREMENTS)  
[11. GRADING REQUIREMENTS](#GRADING-REQUIREMENTS)   
[12. FUNCTIONALITY](#FUNCTIONALITY)  
[13. QUESTIONS](#QUESTIONS)  

---

## **APPLICATION LINKS**
> [Live Application](https://sleepy-lake-06641.herokuapp.com/)  
> [GitHub Repository](https://github.com/brandonljackson23/what-2-watch)

## **CONTRIBUTORS** 
> Christopher Hadley | <hadleyc15@yahoo.com> | [github](https://github.com/hadleyc15)    
> Jim Hopkinson | <jim@gmail.com> | [github](https://github.com/1hoppy1)  
> Brandon Jackson | <brandonljackson23@gmail.com> | [github](https://github.com/brandonljackson23)

## **DEVELOPMENT**
This application was developed with the following application structures:
1. [Handlebars.js](https://handlebarsjs.com/)
2. [Hypertext Markup Language (HTML)](https://developer.mozilla.org/en-US/docs/Web/HTML)
3. [Cascading Style Sheets (CSS)](https://developer.mozilla.org/en-US/docs/Web/CSS)
4. [Bootstrap](https://getbootstrap.com/)
5. [JavaScript (js)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
6. [Node.js](https://nodejs.org/en/)
7. [Express.js](http://expressjs.com/)
8. [MySQL](https://www.mysql.com/)
9. [Sequelize ORM](https://sequelize.org/)
10. [dotenv](https://www.npmjs.com/package/dotenv)
11. [bcrypt](https://www.npmjs.com/package/bcrypt)
12. [connect-sesseion-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
13. [exphbs](https://www.npmjs.com/package/exphbs)
14. [express-session](https://www.npmjs.com/package/express-sessionv)
15. [express-handlebars](https://www.npmjs.com/package/express-handlebars)
16. [heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
17. [countdown](https://www.npmjs.com/package/countdown)

---

## **USER STORY**

> AS A movie watcher    
> I WANT to an application that will help my friends and I decide which movie to watch  
> SO THAT my friends and I can watch a different movie each week.

## **ACCEPTANCE CRITERIA**
> GIVEN I am a user of What2Watch    
> WHEN I visit the site 
> THEN I am presented with a current list of movie nominations and a countdown timer indicating the remaining time of the current voting window 
> WHEN I click on a nomination
> THEN I am presented with a new page dedicated to that movie that includes the movie title, a link to the IMDb page for the movie and a button to vote for the movie  
> WHEN I click on the IMDb link
> THEN I am redirected the IMDb webpage for the movie in a separate browser tab  
> WHEN I click on the vote button 
> THEN my vote is saved, the total number of votes for the movie increases by one and the total is displayed on the page and on the home page showing the full list of nominations  
> When I click on the 'Nominate a Movie' in the navigation pane  
> THEN I am presented with a way to nominate a movie by entering the title and the IMDb link and a Nominate button
> When I click on the Nominate button
> THEN my movie suggestion is added to the list of nominations for others to vote on

## **PROJECT REQUIREMENTS**
- [x] Use Node.js and Express.js to create a RESTful API.
- [x] Use Handlebars.js as the templating engine.
- [x] Use MySQL and the Sequelize ORM for the database.
- [x] Have both GET and POST routes for retrieving and adding new data.
- [x] Have both GET and POST routes for retrieving and adding new data.
- [x] Be deployed using Heroku (with data).
- [x] Use at least one new library, package, or technology that we haven’t discussed.
- [x] Have a polished UI.
- [x] Be responsive.
- [x] Be interactive (i.e., accept and respond to user input).
- [x] Have a folder structure that meets the MVC paradigm.
- [x] Protect API keys and sensitive information with environment variables.
- [x] Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class/id naming conventions, indentation, quality comments, etc.).
- [x] Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
- [x] Finally, you must add your project to the portfolio that you created in Module 2.

## **PRESENTATION REQUIREMENTS**
Group should give a 10-minute presentation on the project, with about 7 minutes devoted to the presentation itself, followed by a 3-minute Question & Answer session. Use the Project Presentation Template to address the following:

- [x] Elevator pitch: A one-minute description of your application.
- [x] Concept: What is your user story? What was your motivation for development?
- [x] Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?
- [x] Demo: Show your stuff!
- [x] Directions for future development.
- [x] Links to the deployed application and the GitHub repository.

## **GRADING REQUIREMENTS**

### <div align="center">Technical Acceptance Criteria: 25%</div>
- [x] Application uses a Node and Express back end and uses both GET and POST routes for retrieving and adding new data
- [x] Application has a folder structure that meets the MVC paradigm and uses Handlebars.js as the template engine.
- [x] Application is backed by a MySQL database with a Sequelize ORM and protects API keys and sensitive information with environment variables.
- [x] Application includes user authentication (express-session and cookies).
- [x] Application uses at least one new library, package, or technology not covered in class.

### <div align="center">Concept: 10%</div>
- [x] Application should be a unique and novel idea.
- [x] Your group should clearly and concisely articulate your project idea.

### <div align="center">Deployment: 20%</div>
- [x] Application deployed at live URL on Heroku and loads with no errors.
- [x] Application GitHub URL submitted.
- [x] Portfolio at live URL submitted, featuring project.

### <div align="center">Respository Quality: 10%</div>
- [x] Repository has a unique name.
- [x] Repository follows best practices for file structure and naming conventions.
- [x] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- [x] Repository contains multiple descriptive commit messages.
- [x] Repository contains a quality README file with description, screenshot, and link to deployed application.

### <div align="center">Application Quality: 15%</div>
- [x] Application user experience is intuitive and easy to navigate.
- [x] Application user interface style is clean and polished.
- [x] Application is responsive.

### <div align="center">Presentation: 10%</div>
- [x] Your group should present using Powerpoint or a similar presentation software.
- [x] Every group member should speak during the presentation.
- [x] Your presentation should follow the Project Presentation Template.

### <div align="center">Collaboration: 10%</div>
- [x] There are no major disparities in the number of GitHub contributions between group members.

---


## **FUNCTIONALITY**
1. When a user visits the site he is presented with the current list of nominated movies for the week along with a timer that countdowns the remaining time to vote on the nominees.

![](/public/images/nominations.PNG)  

2. To nominate a movie or vote on a current nominee a user must first login. If they have an existing account they can click on the 'Login' link in the navigation pane and then login with their email and password.  

![](/public/images/login.PNG)

3. If this is the user's first visit, they can sign up for an account by clicking the 'Sign Up' link in the navingation pane and then entering thier username, email and password to create an account.

![](/public/images/sign-up.PNG) 

4. As a logged in user, the user can click on the 'Nominate A Movie' link in the navigation pane to make a movie nomination.  To nominate a movie the user must enter the movie title and the link to the IMDb page about the movie.

![](/public/images/nominate-movie.PNG)  

5. As a logged in user, the user can click on the 'Nominations' link in the navigation pane and then click on a movie title.  The user will be redirected to the individual page for the selected movie where he can click on the IMDb button to visit the IMDb page to read the movie description or watch the movie trailer.  He can also choose to vote for the movie by clicking the 'Vote' button.

![](/public/images/vote.PNG)   

---


## **QUESTIONS**
>If you have any questions, please contact one of the contributors (contact info is listed in the CONTRIBUTORS section of this README).
