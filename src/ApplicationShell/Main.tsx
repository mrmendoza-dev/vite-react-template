import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";

const games = [
  {
    title: "The Legend of Zelda: Breath of the Wild",
    description:
      "An action-adventure game set in a vast open world, where players control Link on a quest to rescue Princess Zelda.",
    release_date: "March 3, 2017",
    platforms: ["Nintendo Switch", "Wii U"],
    genres: ["Action", "Adventure"],
    developers: ["Nintendo EPD"],
    publishers: ["Nintendo"],
    metacritic_score: 97,
    cover_art: "https://example.com/images/zelda-breath-of-the-wild-cover.jpg",
    screenshots: [
      "https://example.com/images/zelda-breath-of-the-wild-screenshot1.jpg",
      "https://example.com/images/zelda-breath-of-the-wild-screenshot2.jpg",
    ],
  },
  {
    title: "The Witcher 3: Wild Hunt",
    description:
      "An open-world RPG where players take on the role of Geralt of Rivia, a monster hunter, in a richly detailed fantasy world.",
    release_date: "May 19, 2015",
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    genres: ["RPG", "Action"],
    developers: ["CD Projekt Red"],
    publishers: ["CD Projekt"],
    metacritic_score: 93,
    cover_art: "https://example.com/images/witcher-3-cover.jpg",
    screenshots: [
      "https://example.com/images/witcher-3-screenshot1.jpg",
      "https://example.com/images/witcher-3-screenshot2.jpg",
    ],
  },
  {
    title: "Minecraft",
    description:
      "A sandbox game where players can build and explore blocky, procedurally-generated worlds.",
    release_date: "November 18, 2011",
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    genres: ["Sandbox", "Survival"],
    developers: ["Mojang"],
    publishers: ["Mojang", "Microsoft Studios"],
    metacritic_score: 93,
    cover_art: "https://example.com/images/minecraft-cover.jpg",
    screenshots: [
      "https://example.com/images/minecraft-screenshot1.jpg",
      "https://example.com/images/minecraft-screenshot2.jpg",
    ],
  },
  {
    title: "Red Dead Redemption 2",
    description:
      "An action-adventure game set in the American Wild West, following the story of Arthur Morgan, an outlaw and member of the Van der Linde gang.",
    release_date: "October 26, 2018",
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    genres: ["Action", "Adventure"],
    developers: ["Rockstar Games"],
    publishers: ["Rockstar Games"],
    metacritic_score: 97,
    cover_art: "https://example.com/images/red-dead-redemption-2-cover.jpg",
    screenshots: [
      "https://example.com/images/red-dead-redemption-2-screenshot1.jpg",
      "https://example.com/images/red-dead-redemption-2-screenshot2.jpg",
    ],
  },
  {
    title: "Fortnite",
    description:
      "A popular battle royale game where players compete to be the last person or team standing while building structures and using a variety of weapons.",
    release_date: "July 25, 2017",
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    genres: ["Battle Royale", "Action"],
    developers: ["Epic Games"],
    publishers: ["Epic Games"],
    metacritic_score: 81,
    cover_art: "https://example.com/images/fortnite-cover.jpg",
    screenshots: [
      "https://example.com/images/fortnite-screenshot1.jpg",
      "https://example.com/images/fortnite-screenshot2.jpg",
    ],
  },
  {
    title: "Cyberpunk 2077",
    description:
      "An open-world RPG set in a dystopian future, where players take on the role of V, a mercenary navigating the dangerous streets of Night City.",
    release_date: "December 10, 2020",
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    genres: ["RPG", "Action"],
    developers: ["CD Projekt Red"],
    publishers: ["CD Projekt"],
    metacritic_score: 70,
    cover_art: "https://example.com/images/cyberpunk-2077-cover.jpg",
    screenshots: [
      "https://example.com/images/cyberpunk-2077-screenshot1.jpg",
      "https://example.com/images/cyberpunk-2077-screenshot2.jpg",
    ],
  },
  {
    title: "Super Mario Odyssey",
    description:
      "A platformer game featuring Mario as he embarks on a globe-trotting adventure to rescue Princess Peach from Bowser.",
    release_date: "October 27, 2017",
    platforms: ["Nintendo Switch"],
    genres: ["Platformer", "Adventure"],
    developers: ["Nintendo EPD"],
    publishers: ["Nintendo"],
    metacritic_score: 97,
    cover_art: "https://example.com/images/super-mario-odyssey-cover.jpg",
    screenshots: [
      "https://example.com/images/super-mario-odyssey-screenshot1.jpg",
      "https://example.com/images/super-mario-odyssey-screenshot2.jpg",
    ],
  },
  {
    title: "Among Us",
    description:
      "A multiplayer online game where players work together on a spaceship while trying to identify impostors among the crew.",
    release_date: "June 15, 2018",
    platforms: ["PC", "iOS", "Android"],
    genres: ["Social Deduction", "Party"],
    developers: ["InnerSloth"],
    publishers: ["InnerSloth"],
    metacritic_score: 83,
    cover_art: "https://example.com/images/among-us-cover.jpg",
    screenshots: [
      "https://example.com/images/among-us-screenshot1.jpg",
      "https://example.com/images/among-us-screenshot2.jpg",
    ],
  },
  {
    title: "Assassin's Creed Valhalla",
    description:
      "An action RPG where players take on the role of Eivor, a Viking warrior, and explore the Viking Age in England.",
    release_date: "November 10, 2020",
    platforms: [
      "PlayStation 4",
      "Xbox One",
      "PC",
      "PlayStation 5",
      "Xbox Series X/S",
    ],
    genres: ["Action", "RPG"],
    developers: ["Ubisoft Montreal"],
    publishers: ["Ubisoft"],
    metacritic_score: 84,
    cover_art: "https://example.com/images/assassins-creed-valhalla-cover.jpg",
    screenshots: [
      "https://example.com/images/assassins-creed-valhalla-screenshot1.jpg",
      "https://example.com/images/assassins-creed-valhalla-screenshot2.jpg",
    ],
  },
];

function Main() {
  let VITE_RAWG_API_KEY = import.meta.env.VITE_RAWG_API_KEY;

  const [gamesList, setGamesList] = useState([]);



  



  const consoleOptions = [
    { label: "PC (Windows)", value: 3 },
    { label: "macOS", value: 4 },
    { label: "Linux", value: 5 },

    // { label: "Six", value: 6 },
    { label: "Nintendo Switch", value: 7 },
    { label: "Nintendo 3DS", value: 8 },
    // { label: "Nintendo DS", value: 9 },
    { label: "Wii U", value: 10 },
    { label: "Wii", value: 11 },

    { label: "Neo Geo", value: 12 },
    { label: "Nintendo DSi", value: 13 },

    { label: "PlayStation 3", value: 14 }, // None?
    // { label: "Sixteen", value: 16 },
    { label: "PSP", value: 17 },
    // { label: "Twenty", value: 20 }, //None
    { label: "Android", value: 21 },
    { label: "Atari Flashback", value: 22 },
    // { label: "Twenty-Three", value: 23 },
    { label: "Game Boy Advance", value: 24 },
    { label: "Atari 8-bit", value: 25 },
    { label: "Game Boy", value: 26 },
    // { label: "Twenty-Eight", value: 28 },


    { label: "Xbox 360", value: 9 },
    { label: "Xbox One", value: 1 },
    { label: "Xbox Series X/S", value: 186 },

    { label: "PlayStation", value: 27 },
    { label: "PlayStation 2", value: 15 },
    { label: "PlayStation 4", value: 18 },
    { label: "PlayStation 5", value: 187 },
    { label: "PlayStation Vita", value: 19 },

    // { label: "Nintendo Switch", value: 6 },

    // { label: "Wii", value: 5 },
    // { label: "Nintendo 3DS", value: 10 },
    // { label: "PlayStation 3", value: 8 },
    // { label: "Wii U", value: 42 },
    // { label: "Sega Dreamcast", value: 36 },
    // { label: "Sega Saturn", value: 33 },
    // { label: "Sega Genesis", value: 29 },
  ];

  const [selectedConsole, setSelectedConsole] = useState("");
  const [activeConsoles, setActiveConsoles] = useState([1]);
  console.log(activeConsoles);

  const handleConsoleChange = (event) => {
    setSelectedConsole(event.target.value);
    // You can also perform any other actions here with the selected value
  };

  useEffect(() => {
    const apiUrl = `https://api.rawg.io/api/games?key=${VITE_RAWG_API_KEY}&platforms=${activeConsoles}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const games = data.results; // The list of games
        console.log(games);
        console.log(data);
        setGamesList(games);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    const apiUrl = `https://api.rawg.io/api/games?key=${VITE_RAWG_API_KEY}&platforms=${activeConsoles.join(
      ","
    )}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const games = data.results; // The list of games
        console.log(games);
        console.log(data);
        setGamesList(games);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [activeConsoles]);

  // Function to toggle the active state of a console
  const toggleConsole = (value) => {
    if (activeConsoles.includes(value)) {
      setActiveConsoles(activeConsoles.filter((console) => console !== value));
    } else {
      setActiveConsoles([...activeConsoles, value]);
    }
  };

  return (
    <div className="Main">
      <main className="p-4 md:ml-64 h-auto pt-20">
        <div className="Main">
          <div>
            <h2>Filter by Console:</h2>
            <div className="console-buttons">
              {consoleOptions.map((option, index) => (
                <button
                  key={option.value}
                  className={`px-4 py-2 text-sm font-medium border ${
                    index === 0
                      ? "rounded-l-lg"
                      : index === consoleOptions.length - 1
                      ? "rounded-r-md"
                      : ""
                  } ${
                    activeConsoles.includes(option.value)
                      ? "dark:bg-blue-600 dark:border-blue-600 dark:text-white bg-blue-600 border-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                      : "dark:bg-gray-700 dark:border-gray-600 dark:text-white bg-white border-gray-200 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                  }`}
                  onClick={() => toggleConsole(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <p>Selected Consoles: {activeConsoles || "None"}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gamesList &&
              gamesList.map((game) => (
                <GameCard
                  key={game.id} // Add a unique key to each element in the map function
                  title={game.name}
                  image={game.background_image}
                  platforms={game.platforms}
                  genres={game.genres}
                  screenshots={game.short_screenshots}
                />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
