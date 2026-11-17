// ===== Page setup =====
// Owner: shared (keep this file small; put logic in the other files)
// Decides which page we are on and wires the controls to the functions.

/** Called by cards.js after a movie is added or removed. */
function onWatchlistChanged() {
  updateWatchlistCount();
  if (document.getElementById("movie-grid")) {
    renderMovies(applyFilters(), "movie-grid");
  }
  if (document.getElementById("watchlist-grid")) {
    renderMovies(getWatchlistMovies(), "watchlist-grid", { buttonText: "✕ Remove" });
  }
}

function setupBrowsePage() {
  const refresh = () => renderMovies(applyFilters(), "movie-grid");

  document.getElementById("search-input").addEventListener("input", (e) => {
    filterState.search = e.target.value;
    refresh();
  });

  document.getElementById("sort-select").addEventListener("change", (e) => {
    filterState.sort = e.target.value;
    refresh();
  });

  renderGenreButtons(refresh);
  refresh();

  // Details modal close handlers
  document.getElementById("modal-close").addEventListener("click", hideDetails);
  document.getElementById("details-modal").addEventListener("click", (e) => {
    if (e.target.id === "details-modal") hideDetails();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideDetails();
  });
}

function setupWatchlistPage() {
  renderMovies(getWatchlistMovies(), "watchlist-grid", { buttonText: "✕ Remove" });
}

document.addEventListener("DOMContentLoaded", () => {
  updateWatchlistCount();
  if (document.getElementById("movie-grid")) setupBrowsePage();
  if (document.getElementById("watchlist-grid")) setupWatchlistPage();
});
