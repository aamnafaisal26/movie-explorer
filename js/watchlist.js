// ===== Watchlist stored in localStorage =====
// Owner: Tamseel
// localStorage can only store strings, so we store the array of movie ids
// as JSON text under one key.

const WATCHLIST_KEY = "movieExplorer.watchlist";

/** Return the saved ids as an array of numbers. */
function getWatchlist() {
  try {
    const raw = localStorage.getItem(WATCHLIST_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

/** Save the array of ids. */
function saveWatchlist(ids) {
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(ids));
}

function isInWatchlist(id) {
  return getWatchlist().includes(id);
}

function addToWatchlist(id) {
  const ids = getWatchlist();
  if (!ids.includes(id)) {
    ids.push(id);
    saveWatchlist(ids);
  }
}

function removeFromWatchlist(id) {
  saveWatchlist(getWatchlist().filter(savedId => savedId !== id));
}

/** Add if missing, remove if present. */
function toggleWatchlist(id) {
  if (isInWatchlist(id)) {
    removeFromWatchlist(id);
  } else {
    addToWatchlist(id);
  }
}

/** Return the full movie objects for the saved ids, in the order they were added. */
function getWatchlistMovies() {
  const ids = getWatchlist();
  return ids
    .map(id => MOVIES.find(movie => movie.id === id))
    .filter(movie => movie !== undefined);
}

/** Update the little number next to "Watchlist" in the header. */
function updateWatchlistCount() {
  const badge = document.getElementById("watchlist-count");
  if (badge) badge.textContent = getWatchlist().length;
}
