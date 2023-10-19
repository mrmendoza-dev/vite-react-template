import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../assets/icons";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="Sidebar">
      <aside
        // className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidenav"
        id="drawer-navigation"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
          <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <FontAwesomeIcon
                  icon={icons.faHouse}
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                />

                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <FontAwesomeIcon
                  icon={icons.faMagnifyingGlass}
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                />

                <span className="ml-3">Search Games</span>
              </Link>
            </li>
            <li>
              <Link
                to="/emulators"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <FontAwesomeIcon
                  icon={icons.faGamepad}
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                />
                <span className="ml-3">Emulators</span>
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <FontAwesomeIcon
                  icon={icons.faCog}
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                />
                <span className="ml-3">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
