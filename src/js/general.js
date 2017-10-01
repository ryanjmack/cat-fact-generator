// check for data in localStorage, or initialize an empty array to hold data
const facts = JSON.parse(localStorage.getItem('facts')) || [];
// get DOM elements
const quote = document.querySelector('.quote p');
const button = document.querySelector('button');
const twitter = document.querySelector('.twitter-share-button');


// called after the window.onload event
function fetchData() {
  // endpoint for the data
  const endpoint = 'https://cdn.rawgit.com/ryanjmack/7e955181b50311d5fdb4648014eac3e9/raw/185b444693feb728bb47acd22f9b83f98c1f7fd6/cat-facts.json';

  // fetch the data, if the data isn't in local storage
  if (!facts.length) {
    fetch(endpoint)
      .then(blob => blob.json())
      .then(data => {
        facts.push(...data.data);
        // add data to the local storage
        localStorage.setItem('facts', JSON.stringify(facts));
      })
      .catch(err => {
        console.log(err);
        quote.innerHTML = 'Oops! Your browser doesn\'t support <a href="http://caniuse.com/#feat=fetch" class="error"> fetch</a>';
      });
  }
  // if we have a fact in local storage, set the quote's text content to that fact
  if (!!localStorage.getItem('fact')) {
    quote.textContent = JSON.parse(localStorage.getItem('fact'));
  }
  else {   // or give directions to the user
    quote.innerHTML = 'Click the generate button below to generate a fact about cats~~!!!<br><br>Click the twitter bird to share a fact!';
  }
}


// gets a random integer inclusive, between min and max
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// called when the user clicks the generate button
function refreshFact(e) {
  const randomIndex = getRandomIntInclusive(0, facts.length - 1);
  const fact = facts[randomIndex].fact;
  // if there is an error, keep error message displayed
  if (fact) {
    quote.textContent = fact;
    localStorage.setItem('fact', JSON.stringify(fact));
  }
}


// passes data to the URL so when the user clicks the bird a new window opens up with the data entered in the tweet
function refreshURL() {
  const fact = quote.textContent;
  this.href = `https://twitter.com/intent/tweet?text=${fact}`
}


window.onload = fetchData;
button.addEventListener('click', refreshFact);
twitter.addEventListener('mouseenter', refreshURL);
