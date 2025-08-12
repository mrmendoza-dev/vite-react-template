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
      collapsible={isMobile ? "offcanvas" : "icon"}
    >
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
