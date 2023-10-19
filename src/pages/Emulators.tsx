


function Emulators() {

    const consoleList = [
      {
        name: "Nintendo",
        image: "/images/consoles/Nintendo.png",
        emulator: {
          name: "Nestopia UE",
          file_path: "",
        },
      },
      {
        name: "Genesis",
        image: "/images/consoles/Genesis.png",
        emulator: {
          name: "Kega Fusion",
          file_path: "",
        },
      },
      {
        name: "Super Nintendo",
        image: "/images/consoles/Super_Nintendo.png",
        emulator: {
          name: "SNES9x",
          file_path: "",
        },
      },
      {
        name: "Saturn",
        image: "/images/consoles/Saturn.png",
        emulator: {
          name: "Kronos",
          file_path: "",
        },
      },
      {
        name: "PlayStation",
        image: "/images/consoles/PlayStation.png",
        emulator: {
          name: "DuckStation",
          file_path: "",
        },
      },
      {
        name: "Nintendo 64",
        image: "/images/consoles/Nintendo_64.png",
        emulator: {
          name: "simple64",
          file_path: "",
        },
      },
      {
        name: "Dreamcast",
        image: "/images/consoles/Dreamcast.png",
        emulator: {
          name: "redream",
          file_path: "",
        },
      },
      {
        name: "PlayStation 2",
        image: "/images/consoles/PlayStation_2.png",
        emulator: {
          name: "PCSX2",
          file_path: "",
        },
      },
      {
        name: "Xbox",
        image: "/images/consoles/Xbox.png",
        emulator: {
          name: "Xemu",
          file_path: "",
        },
      },
      {
        name: "GameCube",
        image: "/images/consoles/GameCube.png",
        emulator: {
          name: "Dolphin",
          file_path: "",
        },
      },
      {
        name: "Wii",
        image: "/images/consoles/Wii.png",
        emulator: {
          name: "Dolphin",
          file_path: "",
        },
      },
      {
        name: "Xbox 360",
        image: "/images/consoles/Xbox_360.png",
        emulator: {
          name: "Xenia",
          file_path: "",
        },
      },
      {
        name: "PlayStation 3",
        image: "/images/consoles/PlayStation_3.png",
        emulator: {
          name: "RPCS3",
          file_path: "",
        },
      },

      {
        name: "Game Boy Color",
        image: "/images/consoles/Game_Boy_Color.png",
        emulator: {
          name: "SameBoy",
          file_path: "",
        },
      },

      {
        name: "Game Boy Advance",
        image: "/images/consoles/Game_Boy_Advance.png",
        emulator: {
          name: "mGBA",
          file_path: "",
        },
      },
      {
        name: "Nintendo DS",
        image: "/images/consoles/Nintendo_DS.png",
        emulator: {
          name: "melonDS",
          file_path: "",
        },
      },
      {
        name: "PlayStation Portable",
        image: "/images/consoles/PlayStation_Portable.png",
        emulator: {
          name: "PPSSPP",
          file_path: "",
        },
      },
    ];


const openProgram = () => {
  const apiUrl = "http://localhost:5000/open-program";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("Program opened successfully");
      } else {
        console.error("Error opening program:", response.statusText);
        // Add this line to see the actual response data:
        response.text().then((data) => console.error("Response data:", data));
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};



    return (
      <div className="Emulators">

        <button
          type="button"
          onClick={openProgram}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Open Program
        </button>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {consoleList.map((console) => (
            <ConsoleCard
              key={console.name}
              name={console.name}
              image={console.image}
              emulator={console.emulator}
            />
          ))}
        </div>
      </div>
    );


}



function ConsoleCard({ name, image, emulator }) {
  return (
    <div className="ConsoleCard">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={image} alt={name} />
        </a>
      </div>
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center mt-2">
        {name}{" "}
      </h5>
      <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white text-center mt-2">
        {emulator.name}{" "}
      </h5>
    </div>
  );
}



export default Emulators;