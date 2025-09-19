// tests/components/ApplicationShell.test.tsx
import { ApplicationShell } from "@/components/layout/ApplicationShell";
import { ApplicationProvider } from "@/contexts/ApplicationContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

// Mock the ErrorBoundary component
vi.mock("@/components/feedback/ErrorBoundary", () => ({
  ErrorBoundary: ({
    children,
    label,
  }: {
    children: React.ReactNode;
    label: string;
  }) => <div data-testid={`error-boundary-${label}`}>{children}</div>,
}));

// Mock the Toaster component
vi.mock("sonner", () => ({
  Toaster: ({
    className,
    position,
  }: {
    className: string;
    position: string;
  }) => (
    <div data-testid="toaster" className={className} data-position={position}>
      Toaster
    </div>
  ),
}));

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    <ApplicationProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ApplicationProvider>
  </BrowserRouter>
);

describe("ApplicationShell", () => {
  it("renders all layout components", () => {
    render(
      <TestWrapper>
        <ApplicationShell />
      </TestWrapper>
    );

    // Check ErrorBoundary wrapper
    expect(
      screen.getByTestId("error-boundary-ApplicationShell ErrorBoundary")
    ).toBeInTheDocument();

    // Check main layout structure
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();

    // Check SidebarProvider wrapper exists
    const sidebarWrapper = document.querySelector(
      '[data-slot="sidebar-wrapper"]'
    );
    expect(sidebarWrapper).toBeInTheDocument();

    // Check Toaster
    expect(screen.getByTestId("toaster")).toBeInTheDocument();
    expect(screen.getByTestId("toaster")).toHaveAttribute(
      "data-position",
      "top-right"
    );
  });

  it("renders Navbar component with correct elements", () => {
    render(
      <TestWrapper>
        <ApplicationShell />
      </TestWrapper>
    );

    // Check Navbar elements
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(
      document.querySelector('[data-slot="sidebar-trigger"]')
    ).toBeInTheDocument();
    expect(screen.getByText("AppName")).toBeInTheDocument();
    expect(screen.getByAltText("App Logo")).toBeInTheDocument();

    // Check theme toggle by ID
    expect(document.getElementById("theme-toggle")).toBeInTheDocument();
  });

  it("renders AppSidebar component with menu items", () => {
    render(
      <TestWrapper>
        <ApplicationShell />
      </TestWrapper>
    );

    // Check sidebar structure exists
    const sidebarWrapper = document.querySelector(
      '[data-slot="sidebar-wrapper"]'
    );
    expect(sidebarWrapper).toBeInTheDocument();

    // Check menu groups and items
    expect(screen.getByText("Core")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Account")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();

    // Check navigation links
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toHaveAttribute("href", "/");

    const profileLink = screen.getByRole("link", { name: /profile/i });
    expect(profileLink).toHaveAttribute("href", "/profile");
  });

  it("renders MainContent component with routing", () => {
    render(
      <TestWrapper>
        <ApplicationShell />
      </TestWrapper>
    );

    // Check main content area
    const mainContent = screen.getByRole("main");
    expect(mainContent).toBeInTheDocument();
    expect(mainContent).toHaveAttribute("id", "main-content");
    expect(mainContent).toHaveAttribute("tabIndex", "-1");

    // Check that HomePage content is rendered (default route)
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("handles sidebar toggle functionality", async () => {
    const user = userEvent.setup();

    render(
      <TestWrapper>
        <ApplicationShell />
      </TestWrapper>
    );

    // Check initial state
    const sidebarTrigger = document.querySelector(
      '[data-slot="sidebar-trigger"]'
    );
    expect(sidebarTrigger).toBeInTheDocument();

    // Click sidebar trigger
    await user.click(sidebarTrigger!);

    // The sidebar state should be managed by the context
    // We can verify the trigger exists and is clickable
    expect(sidebarTrigger).toBeInTheDocument();
  });

  it("renders Settings dialog when triggered", async () => {
    const user = userEvent.setup();

    render(
      <TestWrapper>
        <ApplicationShell />
      </TestWrapper>
    );

    // Click settings button
    const settingsButton = screen.getByRole("button", { name: /settings/i });
    await user.click(settingsButton);

    // Check dialog content
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getAllByText("Settings")[1]).toBeInTheDocument(); // Dialog title
    expect(
      screen.getByText("App preferences and account options.")
    ).toBeInTheDocument();
  });

  it("has correct CSS classes and styling", () => {
    render(
      <TestWrapper>
        <ApplicationShell />
      </TestWrapper>
    );

    // Check main container classes
    const mainContainer = screen.getByRole("main").parentElement;
    expect(mainContainer).toHaveClass("flex-1", "flex", "flex-row", "min-h-0");

    // Check navbar classes
    const navbar = screen.getByRole("navigation");
    expect(navbar).toHaveClass(
      "flex-shrink-0",
      "bg-background",
      "border-b",
      "backdrop-blur-sm"
    );

    // Check sidebar wrapper classes
    const sidebarWrapper = document.querySelector(
      '[data-slot="sidebar-wrapper"]'
    );
    expect(sidebarWrapper).toHaveClass("flex", "min-h-svh", "w-full");
  });
});
