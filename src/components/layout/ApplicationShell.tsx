import { ErrorBoundary } from "@/components/feedback/ErrorBoundary";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { MainContent } from "@/components/layout/MainContent";
import { Navbar } from "@/components/layout/Navbar";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { useApplicationContext } from "@/contexts/ApplicationContext";
import { useEffect, useRef } from "react";
import { Toaster } from "sonner";

const ApplicationLayout = () => {
  const { openMobile, isMobile } = useSidebar();
  const wasOpenRef = useRef(openMobile);

  useEffect(() => {
    if (isMobile && wasOpenRef.current && !openMobile) {
      const main = document.getElementById(
        "main-content"
      ) as HTMLElement | null;
      main?.focus();
    }
    wasOpenRef.current = openMobile;
  }, [openMobile, isMobile]);

  return (
    <div className="min-h-dvh h-[100dvh] w-[100dvw] flex flex-col">
      {/* Navigation */}
      <Navbar className="flex-shrink-0 bg-background border-b backdrop-blur-sm z-50 px-4 py-2" />

      {/* Main Section */}
      <div className="flex-1 flex flex-row min-h-0">
        {/* Sidebar */}
        <AppSidebar className="flex-shrink-0" />

        {/* Main Content */}
        <MainContent className="flex-1 overflow-auto bg-background p-4" />
      </div>
    </div>
  );
};

export const ApplicationShell = () => {
  const { sidebarOpen, setSidebarOpen } = useApplicationContext();

  return (
    <div className="h-full w-full overflow-hidden">
      <ErrorBoundary label="ApplicationShell ErrorBoundary">
        <SidebarProvider
          className="w-full"
          open={sidebarOpen}
          onOpenChange={setSidebarOpen}
          style={{
            ["--sidebar-width" as string]: "10em",
            // ["--sidebar-width-icon" as string]: "0rem",
          }}
        >
          <ApplicationLayout />
          <Toaster
            className="Toaster-style"
            position="top-right"
            offset={{
              top: 120,
              right: 20,
            }}
          />
        </SidebarProvider>
      </ErrorBoundary>
    </div>
  );
};
