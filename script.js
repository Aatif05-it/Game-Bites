const defaultGames = [
  {
    title: "Flappy Bird",
    image: "games/flappy/screencap.png",
    link: "games/flappy/index.html",
    class: "flappy-bird",
    category: "action",
  },
  {
    title: "2048 Games",
    image: "games/Game 2048/2048.jpg",
    link: "games/Game 2048/index.html",
    class: "game-2048",
    category: "puzzle",
  },
  {
    title: "Tic Tac Toe",
    image: "games/Tic Tac Toe/logo.png",
    link: "games/Tic Tac Toe/index.html",
    class: "tic-tac-toe",
    category: "classic",
  },
  {
    title: "Horse Racing",
    image: "games/Horse Racing/image.png",
    link: "games/Horse Racing/index.html",
    class: "horse-racing",
    category: "racing",
  },
  {
    title: "Racing Game",
    image: "games/Pixel Racing/logo.png",
    link: "games/Pixel Racing/index.html",
    class: "racing-game",
    category: "racing",
  },
  {
    title: "Hole And Mole",
    image: "games/Hole And Mole/logo.png",
    link: "games/Hole And Mole/index.html",
    class: "hole-mole",
    category: "puzzle",
  },
  {
    title: "Maze Game",
    image: "games/MazeGame/logo.png",
    link: "games/MazeGame/index.html",
    class: "maze",
    category: "puzzle",
  },
  {
    title: "Music Guess Game",
    image: "games/Music_Guess_Game/logo.jpg",
    link: "games/Music_Guess_Game/index.html",
    class: "music-guess",
    category: "puzzle",
  },
  {
    title: "Ludo Game",
    image: "games/Ludo_4_Player/logo.jpg",
    link: "games/Ludo_4_Player/index.html",
    class: "ludo",
    category: "action",
  },
  {
    title: "Magic Square",
    image: "games/Magic_Square/logo.png",
    link: "games/Magic_Square/index.html",
    class: "magic-square",
    category: "puzzle",
  },
  {
    title: "Cube Game",
    image: "games/1024_Moves/logo.jpg",
    link: "games/1024_Moves/index.html",
    class: "cube",
    category: "action",
  },
  {
    title: "Chess Game",
    image: "games/AI_CHESS_Game/logo.png",
    link: "games/AI_CHESS_Game/index.html",
    class: "chess",
    category: "puzzle",
  },
  {
    title: "HexGl For PC ",
    image: "games/HexGL-master/logo.jpg",
    link: "games/HexGL-master/index.html",
    class: "hexlgl",
    category: "racing",
  },
  {
    title: "Dino",
    image: "games/t-rex-runner-gh-pages/logo.png",
    link: "games/t-rex-runner-gh-pages/index.html",
    class: "Dino",
    category: "racing",
  },
  {
    title: "Astray",
    image: "games/ast.jpg",
    link: "https://aatif05-it.github.io/Astray/",
    class: "astray",
    category: "puzzle",
  },
  {
    title: "Moto X3M Pool Party",
    image: "https://img.cdn.famobi.com/portal/html5games/images/tmp/MotoX3mPoolPartyTeaser.jpg?v=0.2-aa02f4cb",
    link: "https://cdn.htmlgames.com/TrafficRacer2/",
    class: "Dino",
    category: "racing",
  },
  {
    title: "Dino",
    image: "games/t-rex-runner-gh-pages/logo.png",
    link: "games/t-rex-runner-gh-pages/index.html",
    class: "Dino",
    category: "racing",
  },
];
localStorage.setItem("games", JSON.stringify(defaultGames));

// Safe parse: fallback to default if data corrupted
let games;
try {
  games = JSON.parse(localStorage.getItem("games")) || defaultGames;
} catch {
  games = defaultGames;
}

const gameList = document.getElementById("game-list");
const searchBox = document.getElementById("search");
const filterButtons = document.querySelectorAll(".filters button");

const gamesPerPage = 5;
let currentPage = parseInt(localStorage.getItem("currentPage")) || 1;
let currentFilter = "";
let currentCategory = "all";

// Render the list of games based on search and filter
function renderGames(filter = "", category = "all") {
  currentFilter = filter;
  currentCategory = category;

  const filteredGames = games.filter(
    (game) =>
      (category === "all" || game.category === category) &&
      game.title.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
  currentPage = Math.max(1, Math.min(currentPage, totalPages));

  localStorage.setItem("currentPage", currentPage);
  localStorage.setItem("games", JSON.stringify(games));

  gameList.innerHTML = "";

  const start = (currentPage - 1) * gamesPerPage;
  const end = start + gamesPerPage;

  filteredGames.slice(start, end).forEach((game) => {
    const card = document.createElement("div");
    card.className = `game-card ${game.class || ""}`;

    const image = document.createElement("img");
    image.src = game.image;
    image.alt = game.title;
    image.onerror = () => {
      image.src = "assets/images/default.png";
    };

    const title = document.createElement("h3");
    title.textContent = game.title;

    card.appendChild(image);
    card.appendChild(title);

    card.addEventListener("click", () => {
      card.classList.add("animate-click");
      setTimeout(() => {
        window.location.href = game.link;
      }, 200);
    });

    gameList.appendChild(card);
  });

  renderPagination(totalPages);
}

// Create pagination buttons
function renderPagination(totalPages) {
  let pagination = document.getElementById("pagination");

  if (!pagination) {
    pagination = document.createElement("div");
    pagination.id = "pagination";
    pagination.className = "pagination-controls";
    document.body.appendChild(pagination);
  }

  pagination.innerHTML = `
    <button id="prevBtn" ${currentPage === 1 ? "disabled" : ""}>Prev</button>
    <span>Page ${currentPage} of ${totalPages}</span>
    <button id="nextBtn" ${
      currentPage === totalPages ? "disabled" : ""
    }>Next</button>
  `;

  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderGames(currentFilter, currentCategory);
    }
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderGames(currentFilter, currentCategory);
    }
  });
}

// Search input handler
searchBox.addEventListener("input", (e) => {
  currentPage = 1;
  renderGames(e.target.value, currentCategory);
});

// Filter button click handler
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.category;
    currentPage = 1;
    renderGames(searchBox.value, category);
  });
});

// Initial load
renderGames();
