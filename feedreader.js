/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds letiable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds letiable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         //  A test that loops through each feed
         // * in the allFeeds object and ensures it has a URL defined
         // * and that the URL is not empty.
         // to run for loop through RSS urls to verify if defined
         
         it('have defined urls',function() {
            for(let a=0;a<allFeeds.length;a++) {
                expect(allFeeds[a].url).toBeDefined();
                expect(allFeeds[a].url.length).not.toBe(0);
            }
         });


         //  A test that loops through each feed
         // * in the allFeeds object and ensures it has a name defined
         // * and that the name is not empty.
         // To run for loop through RSS names to verify if defined
         
         it('name is defined',function() {
            for(let k=0;k< allFeeds.length;k++) {
                expect(allFeeds[k].name).toBeDefined();
                expect(allFeeds[k].name.length).not.toBe(0);
                
            }
         })
    });


     // A new test suite named "The menu"

    describe('The menu',function(){
        let hideMymenu = $('body').hasClass('menu-hidden');
    

         // A test that ensures the menu element is
         // * hidden by default. You'll have to analyze the HTML and
         // * the CSS to determine how we're performing the
         // * hiding/showing of the menu element.
         // when page loads check to see if body has .menuhidden
         
         it('menu is hidden by default',function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

           
          // A test that ensures the menu changes
          // * visibility when the menu icon is clicked. This test
          // * should have two expectations: does the menu display when
          // * clicked and does it hide when clicked again.
          // To verify body has does not have .menuhidden on
          // every other click of menu icon
          
          it('menu visibility changes when click',function() {
            let mymenuIcon = $('.menu-icon-link');

            mymenuIcon.click();
            expect($('body').hasClass('menu-hidden')).toEqual(false);
            mymenuIcon.click();
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
    });

     // A new test suite named "Initial Entries" 
    describe('Initial Entries',function() {

         // A test that ensures when the loadFeed
         // * function is called and completes its work, there is at least
         // * a single .entry element within the .feed container.
         // * Remember, loadFeed() is asynchronous so this test will require
         // * the use of Jasmine's beforeEach and asynchronous done() function. 

         // beforeEach to wait asynchronous call to end
         
         beforeEach(function(done) {
            loadFeed(0,function(){
                done();
            });
        });

         it('feed container having atleast 1 entry',function(){
           expect($('.feed .entry').length).toBeGreaterThan(0);
         });
     });

     // A new test suite named "New Feed Selection" 
    describe('New Feed Selection',function() {
        let CompareFeedOne;
        let CompareFeedTwo;
    

         //  A test that ensures when a new feed is loaded
         // * by the loadFeed function that the content actually changes.
         // * Remember, loadFeed() is asynchronous.
          // beforeEach to wait asynchronous call to end
         beforeEach(function(done){
            loadFeed(1, function(){
                CompareFeedOne = $('.feed').html();
                loadFeed(2, function(){
                    done();
                });
            });

         });

         afterEach(function(){
            loadFeed(0);
         });

         // find that each entry is defined
        // compares both headers from compareFeedOne and CompareFeedTwo
        // to find that the entry has changed

         it('displays feed content change on menu select',function(){
            expect(CompareFeedOne).toBeDefined();
            CompareFeedTwo=$('.feed').html();
            expect(CompareFeedTwo).toBeDefined();
            expect(CompareFeedOne).not.toEqual(CompareFeedTwo);
         });
     });
}());
