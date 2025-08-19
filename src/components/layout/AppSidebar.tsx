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
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Home, Settings, User } from "lucide-react";
import { useMediaQuery } from "react-responsive";
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
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Sidebar
      className={cn("h-full w-full relative", className)}
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

        <SidebarFooter className="mt-auto pb-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/settings">
                  <Settings />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
};
