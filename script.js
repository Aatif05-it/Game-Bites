// ✅ Final Version with Improvements

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
  // ✅ External CDN games below (removed duplicates)
  {
    title: "Moto X3M Pool Party",
    image:
      "https://img.cdn.famobi.com/portal/html5games/images/tmp/MotoX3mPoolPartyTeaser.jpg?v=0.2-aa02f4cb",
    link: "https://cdn.htmlgames.com/TrafficRacer2/",
    class: "moto-x3m",
    category: "racing",
  },
  {
    title: "Archery World Tour",
    image:
      "https://img.cdn.famobi.com/portal/html5games/images/tmp/ArcheryWorldTourTeaser.jpg?v=0.2-aa02f4cb",
    link: "https://play.famobi.com/archery-world-tour",
    class: "archery",
    category: "action",
  },
  {
    title: "Western Sniper",
    image:
      "https://img.cdn.famobi.com/portal/html5games/images/tmp/WesternSniperTeaser.jpg?v=0.2-aa02f4cb",
    link: "https://play.famobi.com/western-sniper",
    class: "sniper",
    category: "action",
  },
  {
    title: "Go Escape",
    image:
      "https://img.cdn.famobi.com/portal/html5games/images/tmp/GoEscapeTeaser.jpg?v=0.2-aa02f4cb",
    link: "https://play.famobi.com/go-escape",
    class: "escape",
    category: "action",
  },
  {
    title: "Parking Rush",
    image:
      "https://img.cdn.famobi.com/portal/html5games/images/tmp/ParkingRushTeaser.jpg?v=0.2-aa02f4cb",
    link: "https://play.famobi.com/parking-panic",
    class: "parking",
    category: "action",
  },
  {
    title: "Words of Wonders",
    image:
      "https://img.cdn.famobi.com/portal/html5games/images/tmp/WordsOfWondersTeaser.jpg?v=0.2-aa02f4cb",
    link: "https://play.famobi.com/words-of-wonders",
    class: "words",
    category: "puzzle",
  },
  {
    title: "Drift Dudes",
    image:
      "https://img.cdn.famobi.com/portal/html5games/images/tmp/DriftDudesTeaser.jpg?v=0.2-aa02f4cb",
    link: "https://play.famobi.com/drift-dudes",
    class: "drift",
    category: "action",
  },
  {
    title: "Stack Smash",
    image:
      "https://img.cdn.famobi.com/portal/html5games/images/tmp/StackSmashTeaser.jpg?v=0.2-aa02f4cb",
    link: "https://play.famobi.com/stack-smash",
    class: "smash",
    category: "action",
  },
  {
    title: "High Hills",
    image:
      "https://img.cdn.famobi.com/portal/html5games/images/tmp/HighHillsTeaser.jpg?v=0.2-aa02f4cb",
    link: "https://play.famobi.com/high-hills",
    class: "high-hills",
    category: "action",
  },
  {
    title: "3D Basketball",
    image:
      "https://img.cdn.famobi.com/portal/html5games/images/tmp/3dBasketballTeaser.jpg?v=0.2-aa02f4cb",
    link: "https://play.famobi.com/3d-basketball",
    class: "basketball",
    category: "action",
  },
  {
    title: "Highway Rider Extreme",
    image:
      "https://img.cdn.famobi.com/portal/html5games/images/tmp/HighwayRiderExtremeTeaser.jpg?v=0.2-aa02f4cb",
    link: "https://play.famobi.com/highway-rider-extreme",
    class: "words",
    category: "racing",
  },
  {
    title: "Penalty Shootout: Multi League",
    image:
      "https://img.cdn.famobi.com/portal/html5games/images/tmp/PenaltyShootoutMultiLeagueTeaser.jpg?v=0.2-aa02f4cb",
    link: "https://play.famobi.com/penalty-shootout-multi-league",
    class: "penalty",
    category: "action",
  },
  {
    title: "Racing Monster Trucks",
    image:
      "https://img.cdn.famobi.com/portal/html5games/images/tmp/RacingMonsterTrucksTeaser.jpg?v=0.2-aa02f4cb",
    link: "https://play.famobi.com/racing-monster-trucks",
    class: "monster truck",
    category: "action",
  },
  {
    title: "Classic Bowling",
    image:
      "https://img.cdn.famobi.com/portal/html5games/images/tmp/ClassicBowlingTeaser.jpg?v=0.2-aa02f4cb",
    link: "https://play.famobi.com/classic-bowling",
    class: "classc",
    category: "action",
  },
  {
    title: "Snow Rush 3D",
    image:
      "https://img.gamedistribution.com/e1e32230bdf040d69f4e367015e1c527-512x512.jpg",
    link: "https://html5.gamedistribution.com/e1e32230bdf040d69f4e367015e1c527/?gd_sdk_referrer_url=https://gamedistribution.com/games/snow-rush-3d/",
    class: "snow",
    category: "action",
  },
  {
    title: "Moto Attacke",
    image:
      "https://img.gamedistribution.com/cd5c068325f24c17b787a29db2eb1765-512x512.jpg",
    link: "https://html5.gamedistribution.com/cd5c068325f24c17b787a29db2eb1765/?gd_sdk_referrer_url=https://gamedistribution.com/games/moto-attack/",
    class: "moto",
    category: "action",
  },
  {
    title: "Mr Cappuccino Assassino",
    image:
      "https://img.gamedistribution.com/bc1a67b30e674373b2f2af526d63e6e4-512x512.jpg",
    link: "https://html5.gamedistribution.com/bc1a67b30e674373b2f2af526d63e6e4/?gd_sdk_referrer_url=https://gamedistribution.com/games/mr-cappuccino-assassino/",
    class: "assassino",
    category: "action",
  },
  {
    title: "Agent Hunt: Spy Shooter Game",
    image:
      "https://img.gamedistribution.com/918c86d2327d4c298b6208dc62416d32-512x512.jpg",
    link: "https://html5.gamedistribution.com/918c86d2327d4c298b6208dc62416d32/?gd_sdk_referrer_url=https://gamedistribution.com/games/agent-hunt:-spy-shooter-game/",
    class: "assassino",
    category: "action",
  }
];

localStorage.setItem("games", JSON.stringify(defaultGames));

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
    image.loading = "lazy";
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
    <button id="nextBtn" ${currentPage === totalPages ? "disabled" : ""}>Next</button>
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

searchBox.addEventListener("input", (e) => {
  currentPage = 1;
  renderGames(e.target.value, currentCategory);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.category;
    currentPage = 1;
    renderGames(searchBox.value, category);
  });
});

renderGames();
