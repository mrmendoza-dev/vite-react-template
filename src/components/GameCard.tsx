import { nanoid } from "nanoid";

function GameCard({ title, image, platforms, genres, screenshots, rating }) {
  return (
    <div className="GameCard">
      <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p> */}

          <div className="genres flex gap-3 flex-wrap text-sm">
            {genres &&
              genres.map((genre) => {
                return (
                  <span
                    key={nanoid()}
                    className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                  >
                    {genre.name}
                  </span>
                );
              })}
          </div>

          <div className="platforms flex gap-3 flex-wrap text-sm">
            {platforms &&
              platforms.map((platform) => {
                return (
                  <span
                    key={nanoid()}
                    className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"
                  >
                    {platform.platform.name}
                  </span>
                );
              })}
          </div>

          <div className="screenshots-grid grid grid-cols-3 gap-3">
            {screenshots &&
              screenshots.map((screenshot) => {
                return (
                  <div className="screenshot-wrapper" key={nanoid()}>
                    <img
                      className="screenshot"
                      src={screenshot.image}
                      alt={title}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;

GameCard.defaultProps = {
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
};
