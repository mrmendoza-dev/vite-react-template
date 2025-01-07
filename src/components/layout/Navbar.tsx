import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 border-b bg-background z-50 text-foreground">
      <div className="flex justify-between h-full items-center px-4 gap-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="text-foreground p-4" />
          <Link to="/" className="flex items-center justify-between mr-4">
            <img
              src="/images/logo.png"
              className="mr-3 h-8"
              alt="App Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-black">
              AppName
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
