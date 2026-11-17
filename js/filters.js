// ===== Search, genre filter and sort =====
// Owner: Aamna
// Uses: MOVIES (data/movies.js)

// Current state of the controls. applyFilters() reads these.
const filterState = {
  search: "",
  genre: "All",
  sort: "rating-desc"
};

/**
 * Return every distinct genre in MOVIES, sorted, with "All" first.
 */
function getAllGenres() {
  const set = new Set();
  MOVIES.forEach(movie => movie.genres.forEach(g => set.add(g)));
  return ["All", ...Array.from(set).sort()];
}

/**
 * Create one button per genre inside #genre-buttons.
 */
function renderGenreButtons(onChange) {
  const container = document.getElementById("genre-buttons");
  container.innerHTML = "";

  getAllGenres().forEach(genre => {
    const btn = document.createElement("button");
    btn.className = "genre-btn" + (genre === filterState.genre ? " active" : "");
    btn.textContent = genre;
    btn.addEventListener("click", () => {
      filterState.genre = genre;
      container.querySelectorAll(".genre-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      onChange();
    });
    container.appendChild(btn);
  });
}

/**
 * Apply search + genre + sort to MOVIES and return the result.
 * This is the ONE place where filtering happens, so the three controls
 * always work together.
 */
function applyFilters() {
  let result = MOVIES;

  // 1. Search by title (case-insensitive)
  const query = filterState.search.trim().toLowerCase();
  if (query) {
    result = result.filter(movie => movie.title.toLowerCase().includes(query));
  }

  // 2. Genre
  if (filterState.genre !== "All") {
    result = result.filter(movie => movie.genres.includes(filterState.genre));
  }

  // 3. Sort (copy first so MOVIES itself is never reordered)
  result = [...result];
  switch (filterState.sort) {
    case "rating-desc": result.sort((a, b) => b.rating - a.rating); break;
    case "rating-asc":  result.sort((a, b) => a.rating - b.rating); break;
    case "year-desc":   result.sort((a, b) => b.year - a.year); break;
    case "year-asc":    result.sort((a, b) => a.year - b.year); break;
    case "title-asc":   result.sort((a, b) => a.title.localeCompare(b.title)); break;
  }

  return result;
}
