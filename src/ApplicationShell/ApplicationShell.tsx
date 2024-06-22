import Main from "./Main";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import { icons } from "../assets/icons";

function ApplicationShell() {
  const apps = [
  
  ];

  return (
    <div className="ApplicationShell w-screen h-screen">
      <div className="antialiased bg-gray-50 dark:bg-gray-900 h-full">
        <Nav apps={apps} />
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default ApplicationShell;
