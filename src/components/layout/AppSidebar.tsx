import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useApplicationContext } from "@/contexts/ApplicationContext";
import { cn } from "@/lib/utils";
import { Home, Settings, User } from "lucide-react";

import { Link } from "react-router-dom";

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
    label: "Account",
    items: [
      {
        title: "Profile",
        url: "/profile",
        icon: User,
      },
    ],
  },
];

export const AppSidebar = ({ className }: { className?: string }) => {
  const { setSidebarOpen } = useApplicationContext();
  const { isMobile, setOpenMobile } = useSidebar();

  const handleClick = () => {
    if (isMobile) {
      // Close the mobile sheet by updating the sidebar's internal mobile state
      setOpenMobile(false);
      // Also update the ApplicationContext state for consistency
      setSidebarOpen(false);
    }
  };

  return (
    <Sidebar
      className={cn("h-full relative", className)}
      variant={isMobile ? "floating" : "sidebar"}
      collapsible={isMobile ? "offcanvas" : "icon"}
    >
      <SidebarContent className="space-y-0 w-full overflow-x-hidden">
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
                      <Link to={item.url} onClick={handleClick}>
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

        <SidebarFooter className="mt-auto pb-4">
          <Dialog>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <DialogTrigger asChild>
                    <button type="button" >
                      <Settings />
                      <span>Settings</span>
                    </button>
                  </DialogTrigger>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Settings</DialogTitle>
                <DialogDescription>
                  App preferences and account options.
                </DialogDescription>
              </DialogHeader>
              {/* Demo content for testing */}
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>{" "}
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>{" "}
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>{" "}
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>{" "}
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>{" "}
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>{" "}
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>{" "}
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>{" "}
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>{" "}
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>{" "}
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>{" "}
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>{" "}
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>{" "}
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>{" "}
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  This is a demo Settings dialog opened from the sidebar. Add
                  your settings form here.
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
};
