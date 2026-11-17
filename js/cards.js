// ===== Card rendering and details view =====
// Owner: Aamna (cards), Mehreen (details view / modal)
// Uses: MOVIES (data/movies.js), isInWatchlist / toggleWatchlist (watchlist.js)

/**
 * Build one movie card element from one movie object.
 * @param {Object} movie - one entry from MOVIES
 * @param {Object} options - { buttonText: "Add to Watchlist" | "Remove" }
 * @returns {HTMLElement}
 */
function createMovieCard(movie, options = {}) {
  const card = document.createElement("article");
  card.className = "movie-card";
  card.dataset.id = movie.id;

  const inList = isInWatchlist(movie.id);
  const buttonText = options.buttonText || (inList ? "✓ In Watchlist" : "+ Add to Watchlist");

  card.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title} poster"
         onerror="this.onerror=null; this.src='images/posters/placeholder.svg'">
    <div class="card-body">
      <h3 class="card-title">${movie.title}</h3>
      <div class="card-meta">
        <span>${movie.year}</span>
        <span class="card-rating">★ ${movie.rating.toFixed(1)}</span>
      </div>
      <div class="card-genres">
        ${movie.genres.map(g => `<span class="genre-tag">${g}</span>`).join("")}
      </div>
      <button class="watchlist-btn ${inList ? "added" : ""}">${buttonText}</button>
    </div>
  `;

  // Clicking the card (but not the button) opens the details view
  card.addEventListener("click", (event) => {
    if (event.target.closest(".watchlist-btn")) return;
    showDetails(movie);
  });

  // Clicking the button adds/removes from the watchlist
  card.querySelector(".watchlist-btn").addEventListener("click", () => {
    toggleWatchlist(movie.id);
    if (typeof onWatchlistChanged === "function") onWatchlistChanged();
  });

  return card;
}

/**
 * Render a list of movies into a grid container.
 * Shows the empty message when the list is empty.
 */
function renderMovies(movies, gridId, options = {}) {
  const grid = document.getElementById(gridId);
  const emptyMessage = document.getElementById("empty-message");
  grid.innerHTML = "";

  if (movies.length === 0) {
    emptyMessage.classList.remove("hidden");
    return;
  }
  emptyMessage.classList.add("hidden");

  movies.forEach(movie => grid.appendChild(createMovieCard(movie, options)));
}

/**
 * Show the details modal for one movie.
 * TODO (Mehreen): style the modal and add more fields if we add them to the data.
 */
function showDetails(movie) {
  const modal = document.getElementById("details-modal");
  if (!modal) return; // watchlist page has no modal yet

  document.getElementById("modal-body").innerHTML = `
    <div class="modal-body">
      <img src="${movie.poster}" alt="${movie.title} poster"
           onerror="this.onerror=null; this.src='images/posters/placeholder.svg'">
      <div class="modal-info">
        <h2>${movie.title} (${movie.year})</h2>
        <p class="card-rating">★ ${movie.rating.toFixed(1)} / 10</p>
        <p>${movie.genres.join(" · ")}</p>
        <p>${movie.description}</p>
      </div>
    </div>
  `;
  modal.classList.remove("hidden");
}

function hideDetails() {
  const modal = document.getElementById("details-modal");
  if (modal) modal.classList.add("hidden");
}
