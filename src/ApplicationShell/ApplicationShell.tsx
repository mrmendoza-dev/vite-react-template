import Main from "./Main";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import { icons } from "../assets/icons";

function ApplicationShell() {
  const apps = [
  
  ];

  return (
    <div className="ApplicationShell">
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        <Nav apps={apps} />
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default ApplicationShell;
