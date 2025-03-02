import { Navbar } from "@/components/layout/Navbar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { MainContent } from "@/components/layout/MainContent";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "sonner";
import { useApplicationContext } from "@/contexts/ApplicationContext";

export const ApplicationShell = () => {
  const { sidebarOpen } = useApplicationContext();

  return (
    <SidebarProvider defaultOpen={sidebarOpen}>
      <div className="fixed inset-0 flex flex-col">
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
