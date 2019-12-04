var loaded = 0; // który element aktualnie ma być ładowany.
var APIKEY = "bKgN9fTDyt4siFR46DXdpXAONqESQz4v";  // klucz na razie testowy
var gifsperclick = 9;  //ile gifów na kliknięcie

// SZUKANIE DANYCH GIFÓW:
document.getElementById("btnSearch").addEventListener("click", ev => {
  ev.preventDefault(); //żeby strona się nie przeładowywała po kliknięciu
  Array.from(document.querySelectorAll('div .gif-element')).forEach(el => el.remove());   // usuwanie reszty przed wstawieniem nowych
  loaded = 0;  // reset indexu gifów - wyswietlanie znowu od zerowego
  var url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=${loaded * gifsperclick + gifsperclick}&q=`;  // dostęp do gifów z określoną liczbą elementów
  str = document.getElementById("gifs-search").value.trim();
  url = url.concat(str);
  fetch(url)
    .then(response => response.json())
    .then(console.log(response => response.json()))
    .then(content => {
      //  data, pagination, meta

      for (i = 0; i < gifsperclick; i++) {
        let fig = document.createElement("div");
        fig.className = "gif-element";
        let img = document.createElement("img");
        img.src = content.data[loaded].images.downsized.url;
        fig.appendChild(img);
        let out = document.querySelector(".out");
        out.insertAdjacentElement("afterbegin", fig);
        loaded += 1
      }
    })
    .catch(err => {
      console.error(err);
    });
});

// ŁADOWANIE KOLEJNYCH GIFÓW:
document.getElementById("more").addEventListener("click", e => {
  e.preventDefault();
  var url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=${loaded * gifsperclick + gifsperclick}&q=`;  // dostęp do gifów z określoną liczbą elementów
  url = url.concat(str);
  fetch(url)
    .then(response => response.json())
    .then(content => {
      //  data, pagination, meta

      for (i = 0; i < gifsperclick; i++) {
        let fig = document.createElement("div");
        fig.className = "gif-element";
        let img = document.createElement("img");
        img.src = content.data[loaded].images.downsized.url;
        fig.appendChild(img);
        let out = document.querySelector(".out");
        out.insertAdjacentElement("afterbegin", fig);
        loaded += 1;
      }
    })
    .catch(err => {
      console.error(err);
    });
});

// Navbar animation on scrolling
let scrollPosition = 0;

const elementToAnimate = document.querySelector('.element-to-animate');
const logo = elementToAnimate.querySelector('.logo');
const gifsSearchForm = elementToAnimate.querySelector('.gifs-search-form');

window.addEventListener('scroll', function() {
  scrollPosition = window.scrollY;

  if (scrollPosition >= 100) {
    elementToAnimate.classList.add('animated-element');
    logo.classList.add('animated-logo');
    gifsSearchForm.classList.add('animated-form');
  } else {
    elementToAnimate.classList.remove('animated-element');
    logo.classList.remove('animated-logo');
    gifsSearchForm.classList.remove('animated-form');
  }
});