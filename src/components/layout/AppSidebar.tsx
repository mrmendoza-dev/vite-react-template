import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, Settings, Users } from "lucide-react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Separator } from "@/components/ui/separator";

export const AppSidebar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Sidebar
      className="top-16 shrink-0"
      variant={isMobile ? "floating" : "sidebar"}
      collapsible={isMobile ? "offcanvas" : "icon"}
    >
      <SidebarContent>
        <SidebarHeader>
          <span className="text-sm font-medium">Navigation</span>
        </SidebarHeader>
        <Separator />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Home className="h-4 w-4" />
              <span>Home</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Users className="h-4 w-4" />
              <span>Users</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
