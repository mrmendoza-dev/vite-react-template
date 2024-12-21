import { faBars, faBell, faEye, faMagnifyingGlass } from "@/assets/icons";
import { useApplicationShell } from "@/contexts/ApplicationShellContext";
import { apps, notifications } from "@/data/defaultData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ApplicationShell/ThemeToggle";

export const Nav = () => {
  const {
    expandedSidebar,
    setExpandedSidebar,
    sidebarWidths,
    setSidebarWidths,
  } = useApplicationShell();

  return (
    <nav className="Nav bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center">
          <button
            className="mr-2 px-3 py-2 text-sm font-medium focus:outline-none rounded-md border hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-primary-700 text-gray-600 border-gray-200 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => {
              setExpandedSidebar(!expandedSidebar);
            }}
          >
            <FontAwesomeIcon icon={faBars} className="" />
          </button>

          <Link to="/" className="flex items-center justify-between mr-4">
            <img
              src="/images/logo.png"
              className="mr-3 h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-black">
              Title
            </span>
          </Link>
          <form action="#" method="GET" className="hidden md:block md:pl-2">
            <label htmlFor="topbar-search" className="sr-only">
              Search
            </label>
            <div className="relative md:w-64 md:w-96">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                />
              </div>
              <input
                type="text"
                name="email"
                id="topbar-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <div className="flex items-center lg:order-2">
          <ThemeToggle />
          <button
            type="button"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            className="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Toggle search</span>
            <FontAwesomeIcon
              aria-hidden="true"
              icon={faMagnifyingGlass}
              className="w-5 h-5"
            />
          </button>
          {/* <!-- Notifications --> */}
          <button
            type="button"
            data-dropdown-toggle="notification-dropdown"
            className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">View notifications</span>
            {/* <!-- Bell icon --> */}

            <FontAwesomeIcon icon={faBell} className="w-5 h-5" />
          </button>
          {/* <!-- Notifications Dropdown menu --> */}
          <div
            className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
            id="notification-dropdown"
          >
            <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
              Notifications
            </div>
            <div>
              {notifications.map((notification) => (
                <a
                  key={notification.id}
                  href="#"
                  className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="w-11 h-11 rounded-full"
                      src={notification.avatar}
                      alt={`${notification.name} avatar`}
                    />
                    <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700">
                      <svg
                        aria-hidden="true"
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                        <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="pl-3 w-full">
                    <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                      {notification.message}
                    </div>
                    <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                      {notification.time}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <a
              href="#"
              className="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
            >
              <div className="inline-flex items-center">
                <FontAwesomeIcon
                  aria-hidden="true"
                  icon={faEye}
                  className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
                />
                View all
              </div>
            </a>
          </div>
          {/* <!-- Apps --> */}
          <button
            type="button"
            data-dropdown-toggle="apps-dropdown"
            className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">View notifications</span>
            {/* <!-- Icon --> */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
          </button>
          {/* <!-- Apps Dropdown menu --> */}
          <div
            className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
            id="apps-dropdown"
          >
            <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
              Apps
            </div>
            <div className="grid grid-cols-3 gap-4 p-4">
              {apps.map((app: any) => (
                <a
                  key={app.name}
                  href={app.href}
                  className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                >
                  <div className="text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-400">
                    <FontAwesomeIcon icon={app.icon} />
                  </div>
                  <div className="text-sm text-gray-900 dark:text-white">
                    {app.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="/images/avatar.jpg"
              alt="user photo"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
