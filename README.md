# Cat Fact Generator

This is a simple web based fact generator. I used the `fetch()` method for obtaining data so it may not work on some machines. I also utilized local storage so if a user navigates to a different page and then comes back the last seen quote will still be displayed.

## Getting Started

Check out the [live demo](https://ryanjmack.github.io/cat-fact-generator/)!

## Prerequisites

I used the `fetch()` API, which is a [widely supported](http://caniuse.com/#search=fetch) alternative to XMLHttpRequest. There is a small chance that your browser doesn't support the API.

## Built With

* HTML/SCSS
* ES6 JavaScript
* Gulp for automating tasks
* Used babel for converting ES6 to ES5 (will automate this in my next project)

----

## Objectives
This project is one of the intermediate front end projects.

The two user stories that must be fulfilled are:
1.  I can click a button to show me a new random quote.
2.  can press a button to tweet out a quote.

In my case I chose to use a fact generator in lieu of quotes.

My personal objectives were:

1. Fetch data from the internet
2. Format and display random data when the user clicks a button
3. Take advantage of local storage to cache data, and whatever fact is currently displayed to the user
4. Refrain from using any libraries or frameworks. Everything was made by myself

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/ryanjmack/cat-fact-generator/blob/master/LICENSE.md) file for details

## Acknowledgments

* Once again I'd like to thank Wes Bos. I am currently working through one of his courses and his knowledge has been invaluable to me.
