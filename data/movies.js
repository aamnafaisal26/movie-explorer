// ===== Movie data =====
// Owner: Aamna
// This is our JSON data. It is kept inside a .js file (as a constant) so the
// site also works when index.html is opened directly, without a web server.
// Every movie has the same shape. Do NOT change the field names without
// telling the team, because cards.js, filters.js and watchlist.js rely on them.
//
//   id          unique number, never reuse
//   title       string
//   year        number
//   genres      array of strings (use the same spelling everywhere)
//   rating      number from 0 to 10
//   poster      path to the image in images/posters/
//   description one or two sentences
//
// TODO (Aamna): grow this list to 30-50 movies.

const MOVIES = [
  {
    "id": 1,
    "title": "Inception",
    "year": 2010,
    "genres": ["Sci-Fi", "Thriller"],
    "rating": 8.8,
    "poster": "images/posters/inception.jpg",
    "description": "A thief who steals secrets through dream-sharing technology is given the inverse task of planting an idea."
  },
  {
    "id": 2,
    "title": "The Dark Knight",
    "year": 2008,
    "genres": ["Action", "Crime"],
    "rating": 9.0,
    "poster": "images/posters/the-dark-knight.jpg",
    "description": "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into anarchy."
  },
  {
    "id": 3,
    "title": "Spirited Away",
    "year": 2001,
    "genres": ["Animation", "Fantasy"],
    "rating": 8.6,
    "poster": "images/posters/spirited-away.jpg",
    "description": "A young girl wanders into a world of spirits and must work in a bathhouse to free her parents."
  },
  {
    "id": 4,
    "title": "Interstellar",
    "year": 2014,
    "genres": ["Sci-Fi", "Drama"],
    "rating": 8.7,
    "poster": "images/posters/interstellar.jpg",
    "description": "Explorers travel through a wormhole in search of a new home for humanity."
  },
  {
    "id": 5,
    "title": "The Grand Budapest Hotel",
    "year": 2014,
    "genres": ["Comedy", "Drama"],
    "rating": 8.1,
    "poster": "images/posters/grand-budapest-hotel.jpg",
    "description": "A legendary concierge and his young protege become involved in the theft of a priceless painting."
  },
  {
    "id": 6,
    "title": "Coco",
    "year": 2017,
    "genres": ["Animation", "Family"],
    "rating": 8.4,
    "poster": "images/posters/coco.jpg",
    "description": "Aspiring musician Miguel enters the Land of the Dead to find his great-great-grandfather."
  }
];
