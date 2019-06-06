# Project Overview

In this project I was given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and left an application with an incomplete test suite which I was tasked to complete. I used Jasmine to write a number of tests.

## How to Open the complete app

Please follow the [link ](https://github.com/HudaKhalil/FeedReader), or run the app on your local machine by download/clone this repository and open in your favorite code editor.

## How I completed this project

The task is to write the following tests in different test suites. Some tests required asynchronous function so I used callbacks - the done() argument within call to beforeEach()

1- A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2- A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3- A test that ensures the menu element is hidden by default under "The Menu" test suite.
4- Test that ensures the menu changes visibility when the menu icon is clicked.
5- A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the     .feed container.
6- A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes

# Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

# Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
