import Main from "./Main";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import { icons } from "../assets/icons";

function ApplicationShell() {
  const apps = [
    {
      name: "Sales",
      href: "#",
      icon: icons.faBagShopping,
    },
    {
      name: "Users",
      href: "#",
      icon: icons.faUser,
    },
    {
      name: "Inbox",
      href: "#",
      icon: icons.faInbox,
    },
    {
      name: "Profile",
      href: "#",
      icon: icons.faCircleUser,
    },
    {
      name: "Settings",
      href: "#",
      icon: icons.faCog,
    },
    {
      name: "Products",
      href: "#",
      icon: icons.faBoxArchive,
    },
    {
      name: "Pricing",
      href: "#",
      icon: icons.faDollarSign,
    },
    {
      name: "Billing",
      href: "#",
      icon: icons.faReceipt,
    },
    {
      name: "Logout",
      href: "#",
      icon: icons.faArrowRightFromBracket,
    },
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
