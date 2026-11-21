# Assignment 5 & 6 Report — Spider-Man Fan Site

## 1. What feature did you build, and what does it do?
I built a three-question Spider-Man trivia quiz on the home page. Visitors select answers, receive feedback, and see their score. They can restart the quiz when finished.

## 2. Which line of your JavaScript was hardest to get working, and how did you figure it out?
The hardest part of the JavaScript was understanding how the quiz moves from one question to the next. The line `answerSelect.replaceChildren();` was confusing because it removes the previous answer choices. I understood it better after testing the quiz and seeing how the new questions and answers appeared. 

## 3. How many accessibility errors did your audit find, and what were the most common?
I used the WAVE Accessibility Evaluation Tool to test all five pages of my website. The audit initially found 5 contrast errors on the Contact page because the navigation links had white text on a light background. I fixed the errors by changing the navigation background to dark blue in my CSS file. After testing again, all five pages showed 0 errors and 0 contrast errors. 

## 4. What did you change about your site that you would not have thought to change without running the audit?
Before running the accessibility audit, I did not realize that the navigation links on my Contact page had poor color contrast. The WAVE tool helped me identify the problem. I changed the navigation background to dark blue so the white text would be easier to read. This improved accessibility for visitors with visual difficulties.

## Final checks before submission
- [ ] Test the quiz with keyboard and mouse
- [ ] Run WAVE or axe on all five pages and fix errors
- [ ] Check text contrast with WebAIM
- [ ] Validate all five pages at validator.w3.org/nu
- [ ] Check the browser console on every page
- [ ] Test the site at mobile widths
- [ ] Confirm the contact form's external webhook destination is appropriate before entering real personal information
