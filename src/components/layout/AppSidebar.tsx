import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
import { Camera, ChevronDown, FileText, Home, Settings } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export const AppSidebar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Default open state for groups
  const [openGroups, setOpenGroups] = useState({
    Core: true,
    Tools: true,
    Productivity: true,
    System: true,
  });

  // Toggle function for collapsible groups
  const toggleGroup = (groupLabel: keyof typeof openGroups) => {
    setOpenGroups({
      ...openGroups,
      [groupLabel]: !openGroups[groupLabel],
    });
  };

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
      label: "Tools",
      items: [
        {
          title: "Screen Tools",
          url: "/screen-tools",
          icon: Camera,
        },
      ],
    },
    {
      label: "Productivity",
      items: [
        {
          title: "Notes",
          url: "/notes",
          icon: FileText,
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
      className="top-16 shrink-0"
      variant={isMobile ? "floating" : "sidebar"}
      collapsible={isMobile ? "offcanvas" : "icon"}
    >
      <SidebarContent className="space-y-0">
        {menuGroups.map((group) => (
          <Collapsible
            key={group.label}
            open={openGroups[group.label as keyof typeof openGroups]}
            onOpenChange={() =>
              toggleGroup(group.label as keyof typeof openGroups)
            }
            className="group/collapsible w-full"
          >
            <SidebarGroup className="py-1">
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className="flex w-full items-center cursor-pointer py-1 px-2 hover:bg-foreground/5 rounded-lg">
                  {group.label}
                  <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
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
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};
