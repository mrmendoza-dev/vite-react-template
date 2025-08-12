import { ThemeToggle } from "@/components/common/ThemeToggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useApplicationContext } from "@/contexts/ApplicationContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const Navbar = ({ className }: { className?: string }) => {
  const { sidebarOpen, setSidebarOpen } = useApplicationContext();

  return (
    <nav className={cn("", className)}>
      <div className="flex justify-between h-full items-center px-4 gap-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger
            className="text-foreground p-4"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
          <Link to="/" className="flex items-center justify-between mr-4">
            <img src="/images/logo.png" className="mr-3 h-8" alt="App Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-black">
              AppName
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
