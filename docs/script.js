        var loaded = 0; // który element aktualnie ma być ładowany.
        var APIKEY = "bKgN9fTDyt4siFR46DXdpXAONqESQz4v";  // klucz na razie testowy
        var gifsperclick = 3;  //ile gifów na kliknięcie

                // SZUKANIE DANYCH GIFÓW:
          document.getElementById("btnSearch").addEventListener("click", ev => {
            ev.preventDefault(); //żeby strona się nie przeładowywała po kliknięciu
            loaded = 0;  // reset indexu gifów - wyswietlanie znowu od zerowego
            var url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=${loaded*gifsperclick+gifsperclick}&q=`;  // dostęp do gifów z określoną liczbą elementów
            str = document.getElementById("search").value.trim();
            url = url.concat(str);
            fetch(url)
              .then(response => response.json())
              .then(console.log(response => response.json()))
              .then(content => {
                //  data, pagination, meta
          
                for (i = 0; i < gifsperclick; i++){
                  let fig = document.createElement("figure");
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
                var url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=${loaded*gifsperclick+gifsperclick}&q=`;  // dostęp do gifów z określoną liczbą elementów
                url = url.concat(str);
                fetch(url)
                    .then(response => response.json())
                    .then(content => {
        //  data, pagination, meta
          
        
                for (i = 0; i < gifsperclick; i++){
                    let fig = document.createElement("figure");
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

      