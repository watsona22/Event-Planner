# Event-Planner
## Description

The purpose of this challenge was to deploy a web application and event plannr with interactive components. The project demonstrated dynamic HTML and CSS code, using JQuery. 

Users should see the current date at the top of the planner and depending on the time of day, see areas designated (by color) for the present, past, and future time. Each text area can be used to enter an event and then the entry will be saved to local storage for future access. 

The acceptance criteria were as follows: 
GIVEN I am taking a code quiz
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

All of the acceptance criteria were met and the site functions as expected.

I learned how to navigate the DOM using jquery to create dynamic pages. [Web APIs present a unique challenge wherein aspects of the HTML can be called on to perform functions based on needs. Furthermore, I realized (after the fact) how important naming conventions can be. In many cases the variables declared were quite similar, so much as that they were hard to distinguish at times. Specificity is critical when utilizing the DOM structure. Getting the arrays to work in the way I needed them too posed a unique challenge. -UPDATE] I found that reformatting made for easier reference later on - I will be continue to follow that model in the future. Finally, I realize how vital notation and formatting code are to developing applications. I am still working to make this a natural implementation piece during the build process. 
## Usage

The html, css, and js files can be used to understand the dynamic code that supports the application. A link to the mockup is listed below, for your convenience. 
![Event Planner Mockup](./assets/images/Quiz%20Mockup.png)


## Credits

The project was completed with help from the course materials and assistance from Bootcamp tutor, Erik Hirsch and AskBSC support - Zack.

## License

MIT License

Copyright (c) [2023] [Amber Watson]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.