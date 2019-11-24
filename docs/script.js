document.addEventListener('DOMContentLoaded', function() {
  // Search all the GIFs
  const gifsSearch = document.querySelector('#gifs-search');
  const gifsList = document.querySelector('#gifs-list');

  gifsSearch.addEventListener('input', function() {
    const inputValue = this.value;
    const gifBoxes = gifsList.querySelectorAll('.gif-box');

    [].forEach.call(gifBoxes, function(gifBox) {
      const gifClassName = gifBox.querySelector('.img').className;

      if (gifClassName.indexOf(inputValue) === -1) {
        gifBox.style.setProperty('display', 'none');
      } else {
        gifBox.style.setProperty('display', '');   
      }
    });
  });
});