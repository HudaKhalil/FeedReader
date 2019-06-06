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
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         /* It tests that allFeeds object has a URL defined and that 
		  * URL is not empty
          */
         it('each feed url is defined and not empty', function() {
             for (Feed of allFeeds) {
             expect(Feed.url).toBeDefined();
             expect(Feed.url.length).not.toBe(0);
           }
          });
		 /* It tests that allFeeds object has a name defined and that 
		  * name is not empty
          */
         it('each feed name is defined and not empty', function() {
            for (Feed of allFeeds) {
              expect(Feed.name).toBeDefined();
              expect(Feed.name.length).not.toBe(0);
            }
         });
    });
	/* This is the second test suite "The Menu". This suite all about the Menu element visibility*/
  describe('The menu', function() {
        /* It tests that the menu element is hidden by default*/
         it('is hidden by default', function() {
             var checkForClass = $('body').hasClass('menu-hidden');
             expect(checkForClass).toBe(true);
         });
         /* It tests that the menu visibility changes when the menu icon is clicked   */
          it('changes visibility on click', function() {
              // first click
              $('.menu-icon-link').click();
              expect($('body').hasClass('menu-hidden')).toBe(false);

              // second click
              $('.menu-icon-link').click();
              expect($('body').hasClass('menu-hidden')).toBe(true);

          });

      });
    /* This test suite contains all related tests to Initial Entires like loadFeed*/
    describe ('Initial Entries', function(){
        /* It tests that loadFeed function complete its work*/
         beforeEach(function(done){
             loadFeed(0, done);
             });
		/* It tests that loadFeed function have single entry element the feed container*/
         it('are present when LoadFeed is called', function() {
             var checkForEntry = $('.feed .entry').length;
             expect(checkForEntry).toBeGreaterThan(0);
         });

     });
    /* This test suite contains all related tests to new feed selection*/
  describe ('New Feed Selection', function(){
        /* It tests that when new feed is loaded by loadFeed the content actually changed.*/
         let initialFeed;
         let newFeed;

         beforeEach(function(done){
             loadFeed(0, function () {
                 initialFeed = $('.feed').html();
                 done();
             });
         });

         it('loads new feed', function(done){

             loadFeed(2, function(){
                 newFeed = $('.feed').html();
                 expect(newFeed).not.toBe(initialFeed);
                 done();
             });

         });
     });

 }());
