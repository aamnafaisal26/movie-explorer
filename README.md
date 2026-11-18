# Movie Explorer

A clean, ad-free movie browsing website. Movies are shown as cards with ratings and genres.
Users can search, filter by genre, sort by rating or year, open a details view, and keep a
personal watchlist that is saved in the browser (no account needed).

**Course:** Introduction to Information and Communication Technology, BCS-1G
**Team:** Mehreen Rashid (26K-0815), Aamna Faisal (26K-0786), Tamseel Fatima (26K-0792)

## Features

- Browsing: movie cards, search bar, movie details view
- Organising: genre filter buttons, sort by rating / year / title
- Personal: watchlist with add and remove, saved between visits with localStorage
- Design: responsive layout, no sign-up needed

## How to run

1. Clone the repo and open the folder in Visual Studio Code.
2. Open `index.html` in a browser (double-click works), or use the Live Server extension.

## Project structure

```
index.html            Browse page: search, genre buttons, sort, movie grid
watchlist.html        Saved movies with Remove buttons
css/style.css         All styles
data/movies.js        Movie data (JSON array in a JS constant)
js/cards.js           Builds a card from a movie object, details modal
js/filters.js         Search, genre and sort logic
js/watchlist.js       localStorage add / remove / read
js/main.js            Wires everything together per page
images/posters/       Poster images
```

## Who owns what

| Person  | Area                         | Files                                            |
|---------|------------------------------|--------------------------------------------------|
| Mehreen | Design, layout, details view | `index.html`, `css/style.css`                    |
| Aamna   | Data, cards, filters         | `data/movies.js`, `js/cards.js`, `js/filters.js` |
| Tamseel | Watchlist                    | `watchlist.html`, `js/watchlist.js`              |

`js/main.js` is shared. Tell the team before changing it.

## The movie object

Every movie in `data/movies.js` has exactly these fields. Do not rename them.

```json
{
  "id": 1,
  "title": "Inception",
  "year": 2010,
  "genres": ["Sci-Fi", "Thriller"],
  "rating": 8.8,
  "poster": "images/posters/inception.jpg",
  "description": "One or two sentences."
}
```

## Git workflow

- Work on your own branch (for example `mehreen/card-design`).
- Open a pull request when a piece is done; one teammate reviews, then merge.
- Keep `main` always working.

## To do

- [ ] Add 30-50 movies to `data/movies.js` with poster images
- [ ] Polish the card and modal design
- [ ] Test on a phone-sized screen
- [ ] Empty states and final README screenshots
