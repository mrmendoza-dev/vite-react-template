import { ApplicationShell } from "@/components/layout/ApplicationShell";
import { Providers } from "@/contexts/Providers";
import "@/styles/App.css";

function App() {
return (
<div className="App">
<Providers>
<ApplicationShell />
</Providers>
</div>
);
}

export default App;

import { ErrorBoundary } from "@/components/feedback/ErrorBoundary";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { MainContent } from "@/components/layout/MainContent";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useApplicationContext } from "@/contexts/ApplicationContext";
import { Toaster } from "sonner";

const ApplicationLayout = () => {
return (
<div className="flex flex-col h-full min-h-0 w-full bg-background text-foreground">
<Navbar className="h-16 shrink-0 top-0 flex-none border-b bg-background backdrop-blur-sm z-50" />
<div className="flex flex-1 min-h-0 overflow-hidden h-full w-full">
<AppSidebar className="top-16 shrink-0" />
<ScrollArea className="h-full w-full">
<MainContent className="h-full w-full relative p-4" />
</ScrollArea>
</div>
</div>
);
};

export const ApplicationShell = () => {
const { sidebarOpen } = useApplicationContext();

return (
<div className="min-h-dvh h-dvh w-dvw overflow-hidden">
<ErrorBoundary label="ApplicationShell ErrorBoundary">
<SidebarProvider
className="h-full w-full"
defaultOpen={sidebarOpen}
style={{
            ["--sidebar-width" as string]: "10em",
            // ["--sidebar-width-icon" as string]: "0rem",
          }} >
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

export const MainContent = ({ className }: { className?: string }) => {
return (
<main className={cn("h-full w-full relative", className)}>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="\*" element={<HomePage />} />
</Routes>
</main>
);
};

import {
Sidebar,
SidebarContent,
SidebarGroup,
SidebarGroupContent,
SidebarGroupLabel,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Home, Settings } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export const AppSidebar = ({ className }: { className?: string }) => {
const isMobile = useMediaQuery({ maxWidth: 768 });

// Grouped menu items
const menuGroups = [
{
label: "Core",
items: [
{
title: "Home",
url: "/",
icon: Home,
},
],
},
{
label: "System",
items: [
{
title: "Settings",
url: "/settings",
icon: Settings,
},
],
},
];

return (
<Sidebar
className={cn("h-full", className)}
variant={isMobile ? "floating" : "sidebar"}
collapsible={isMobile ? "offcanvas" : "icon"} >
<SidebarContent className="space-y-0">
{menuGroups.map((group) => (
<SidebarGroup key={group.label} className="py-1">
<SidebarGroupLabel className="px-2 py-1 text-xs font-medium text-muted-foreground">
{group.label}
</SidebarGroupLabel>
<SidebarGroupContent>
<SidebarMenu>
{group.items.map((item) => (
<SidebarMenuItem key={item.title}>
<SidebarMenuButton asChild>
<Link to={item.url}>
<item.icon />
<span>{item.title}</span>
</Link>
</SidebarMenuButton>
</SidebarMenuItem>
))}
</SidebarMenu>
</SidebarGroupContent>
</SidebarGroup>
))}
</SidebarContent>
</Sidebar>
);
};
