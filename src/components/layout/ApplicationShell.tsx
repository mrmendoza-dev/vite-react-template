import { AppSidebar } from "@/components/layout/AppSidebar";
import { MainContent } from "@/components/layout/MainContent";
import { Navbar } from "@/components/layout/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useApplicationContext } from "@/contexts/ApplicationContext";
import { Toaster } from "sonner";

const ApplicationLayout = () => {
  return (
    <div className="flex flex-col h-full min-h-0 w-full bg-background text-foreground">
      <Navbar className="h-16 sticky top-0 flex-none border-b bg-background backdrop-blur-sm z-50" />
      <div className="flex flex-1 min-h-0 overflow-hidden h-full w-full p-4">
        <AppSidebar className="top-16 shrink-0" />
        <MainContent className="h-full w-full relative" />
      </div>
    </div>
  );
};

export const ApplicationShell = () => {
  const { sidebarOpen } = useApplicationContext();

  return (
    <div className="min-h-dvh h-dvh w-dvw overflow-hidden">
      <SidebarProvider
        className="h-full w-full"
        defaultOpen={sidebarOpen}
        style={{
          ["--sidebar-width" as string]: "10em",
        }}
      >
        <ApplicationLayout />
        <Toaster />
      </SidebarProvider>
    </div>
  );
};
