# TriviaGame

Link to deployed version: https://szun.github.io/TriviaGame/

Problem: Create a Trivia Game that will end when a timer runs out or when the user clicks the "Done" button and stores the users score/results. 

Solution: For this activity I created a 90's Bulls Trivia Game. The earliest issue that I encountered was how to create something akin to a single page application, where it did not have to reload or switch to a new page. The solution I found was to not make a single page application, but make an application in a single page. What I mean by this, is that all of my hardcoded HTML was in one file, not in separate ones. And to make sure that they did not all show up at the same time, I wrapped each section in a different wrapper div with a different id and in my app.js file linked each of them ot on click function that would change their display from or to none or inherit -in effect creating a single page application UI. I then created a timer that lasted two minutes. When the timer ran out timer ran out the users results were displayed. For this I created three variable that were set to 0 and would increment by 1 if the users score fell into this category when the timer was up or they hit the "Done" button, but not when the evernt occured. To do this I made sure that this evaluation only took place after the user had clicked the done button or the timer ran out. 

Technical Approach: Using the education I have garnered from Northwestern University's Full Stack Web Development program, and more specifically with HTML5, CSS3, Bootstrap 4, Javascript ES5, jQuery, and Timers, I was able to complete a quality version of this assigment.
