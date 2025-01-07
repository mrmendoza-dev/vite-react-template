import { Navbar } from "@/components/layout/Navbar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { MainContent } from "@/components/layout/MainContent";
import { SidebarProvider } from "@/components/ui/sidebar";

export const ApplicationShell = () => {
  return (
    <SidebarProvider>
      <Navbar />
      <div className="flex h-screen w-full pt-16 text-white">
        <AppSidebar />
        <MainContent />
      </div>
    </SidebarProvider>
  );
};
