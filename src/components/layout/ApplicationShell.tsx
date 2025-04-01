import { Navbar } from "@/components/layout/Navbar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { MainContent } from "@/components/layout/MainContent";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "sonner";
import { useApplicationContext } from "@/contexts/ApplicationContext";

export const ApplicationShell = () => {
  const { sidebarOpen } = useApplicationContext();

  return (
    <SidebarProvider
      defaultOpen={sidebarOpen}
      style={{
        ["--sidebar-width" as string]: "10em",
      }}
    >
      <div className="flex flex-col h-screen w-screen bg-background text-foreground">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <AppSidebar />
          <MainContent />
        </div>
      </div>
      <Toaster />
    </SidebarProvider>
  );
};
