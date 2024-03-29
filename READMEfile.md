# Feed Reader Testing

In this project we are given a web-based application that reads RSS feeds by Udacity. The tests are added using Jasmine to check the functionalites of the code written.


## What will I learn?

 i learned how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


# How to run :

	* open index.html in chrome browser.
	* I add all the required test suites and tests and 
		all of them pass too.

	* it tests to make sure that the allFeeds variable has been defined 	and that it is not empty.
	* it test that menu element is hidden by default.checks that when 		menu icon is clicked,it changes visibility mode

	* ensures when the loadFeed function is called and completes its 		work, there is at least a single .entry element within the 			.feed container.
	* ensures when a new feed is loaded by the loadFeed function that 		the content actually changes.



	### steps:

	1.Extract the zip file into a selected location.
	2.Open the file in the browser and observe the functionality of the 	spec,it(...) function
	3.we may use different links for feeds purpose.
		=> The names and URLs to all of the feeds we'd like available.
	4.In the total file we may modify only in [feedreader.js] which was 	in jasmine/spec/=>feedreader.js
	5.Open the feedreader.js file and make modifications by 				implementing new spec functions and DOM elements,DOM elements 		are also required for functionality purpose



	### We're placing all of our tests within the $() function,since some of these tests may require DOM elements. We want to ensure they don't run until the DOM is ready.

	6.and finally make the functions based on the given instructions and also functionality by using DOM elements.
	7.the test functions are given below
 


# How  I completed this project.

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. First of all Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Now Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Its time to Explore the application's HTML (./index.html), CSS (./css/style.css) and JavaScript (./js/app.js) to gain an understanding of how it works.
5. Explore the Jasmine spec file in ./jasmine/spec/feedreader.js and review the 
[Jasmine documentation](http://jasmine.github.io).
6. Now,Edit the allFeeds variable in ./js/app.js to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the allFeeds variable to a passing state.
8. Here Write a test that loops through each feed in the allFeedsobject and ensures it has a URL defined and that the URL is not empty.
9. Here  Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named "The menu".
11. Wrote a test that ensures the menu element is hidden by default. I have to analyze the HTML and the CSS to determine how the hiding/showing of the menu element has been performed.
12. Wrote a test that ensured the menu changes visibility when the menu icon is clicked. This test should has two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named "Initial Entries".
14. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single ".entry" element within the ".feed" container.
15. Write a test suite named "New Feed Selection".
16. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass. 

