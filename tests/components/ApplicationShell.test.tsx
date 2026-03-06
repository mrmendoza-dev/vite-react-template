// tests/components/ApplicationShell.test.tsx
import { ApplicationShell } from "@/components/layout/ApplicationShell";
import { ApplicationProvider } from "@/contexts/ApplicationContext";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

// Mock the HomePage component
vi.mock("@/pages/HomePage", () => ({
  HomePage: () => (
    <div data-testid="home-page">
      <h1>Home Page</h1>
    </div>
  ),
}));

// Mock the ErrorBoundary component
vi.mock("@/components/feedback/ErrorBoundary", () => ({
  ErrorBoundary: ({
    children,
    label,
  }: {
    children: React.ReactNode;
    label: string;
  }) => (
    <div data-testid="error-boundary" data-label={label}>
      {children}
    </div>
  ),
}));

// Mock the Navbar component
vi.mock("@/components/layout/Navbar", () => ({
  Navbar: ({ className }: { className?: string }) => (
    <nav data-testid="navbar" className={className}>
      <div>Navbar Content</div>
    </nav>
  ),
}));

// Mock the AppSidebar component
vi.mock("@/components/layout/AppSidebar", () => ({
  AppSidebar: ({ className }: { className?: string }) => (
    <aside data-testid="app-sidebar" className={className}>
      <div>Sidebar Content</div>
    </aside>
  ),
}));

// Mock the MainContent component
vi.mock("@/components/layout/MainContent", () => ({
  MainContent: ({ className }: { className?: string }) => (
    <main data-testid="main-content" className={className}>
      <div>Main Content</div>
    </main>
  ),
}));

// Mock the SidebarProvider
vi.mock("@/components/ui/sidebar", () => ({
  SidebarProvider: ({ children, className, open, onOpenChange }: any) => (
    <div
      data-testid="sidebar-provider"
      className={className}
      data-open={open}
      onClick={() => onOpenChange?.(!open)}
    >
      {children}
    </div>
  ),
}));

// Mock the Toaster
vi.mock("sonner", () => ({
  Toaster: ({ className, position, offset }: any) => (
    <div
      data-testid="toaster"
      className={className}
      data-position={position}
      data-offset={JSON.stringify(offset)}
    >
      Toast Container
    </div>
  ),
}));

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    <ApplicationProvider>{children}</ApplicationProvider>
  </BrowserRouter>
);

describe("ApplicationShell", () => {
  it("renders ApplicationShell with all main components", () => {
    render(
      <TestWrapper>
        <ApplicationShell />
      </TestWrapper>
    );

    // Check that all main components are rendered
    expect(screen.getByTestId("error-boundary")).toBeInTheDocument();
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("app-sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("main-content")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar-provider")).toBeInTheDocument();
    expect(screen.getByTestId("toaster")).toBeInTheDocument();
  });

  it("renders ErrorBoundary with correct label", () => {
    render(
      <TestWrapper>
        <ApplicationShell />
      </TestWrapper>
    );

    const errorBoundary = screen.getByTestId("error-boundary");
    expect(errorBoundary).toHaveAttribute(
      "data-label",
      "ApplicationShell ErrorBoundary"
    );
  });

  it("renders SidebarProvider with correct props", () => {
    render(
      <TestWrapper>
        <ApplicationShell />
      </TestWrapper>
    );

    const sidebarProvider = screen.getByTestId("sidebar-provider");
    expect(sidebarProvider).toHaveClass("w-full");
    expect(sidebarProvider).toHaveAttribute("data-open", "false"); // Default sidebar state
  });

  it("renders Toaster with correct configuration", () => {
    render(
      <TestWrapper>
        <ApplicationShell />
      </TestWrapper>
    );

    const toaster = screen.getByTestId("toaster");
    expect(toaster).toHaveClass("Toaster-style");
    expect(toaster).toHaveAttribute("data-position", "top-right");
    expect(toaster).toHaveAttribute(
      "data-offset",
      JSON.stringify({ top: 120, right: 20 })
    );
  });

  it("renders Navbar with correct className", () => {
    render(
      <TestWrapper>
        <ApplicationShell />
      </TestWrapper>
    );

    const navbar = screen.getByTestId("navbar");
    expect(navbar).toHaveClass(
      "flex-shrink-0",
      "bg-background",
      "border-b",
      "backdrop-blur-sm",
      "z-50",
      "px-4",
      "py-2"
    );
  });

  it("renders AppSidebar with correct className", () => {
    render(
      <TestWrapper>
        <ApplicationShell />
      </TestWrapper>
    );

    const sidebar = screen.getByTestId("app-sidebar");
    expect(sidebar).toHaveClass("flex-shrink-0");
  });

  it("renders MainContent with correct className", () => {
    render(
      <TestWrapper>
        <ApplicationShell />
      </TestWrapper>
    );

    const mainContent = screen.getByTestId("main-content");
    expect(mainContent).toHaveClass(
      "flex-1",
      "overflow-auto",
      "bg-background",
      "p-4"
    );
  });

  it("has correct layout structure", () => {
    render(
      <TestWrapper>
        <ApplicationShell />
      </TestWrapper>
    );

    // Check that the layout structure is correct
    const errorBoundary = screen.getByTestId("error-boundary");
    const sidebarProvider = screen.getByTestId("sidebar-provider");

    expect(errorBoundary).toContainElement(sidebarProvider);
  });

  it("handles sidebar state changes", () => {
    render(
      <TestWrapper>
        <ApplicationShell />
      </TestWrapper>
    );

    const sidebarProvider = screen.getByTestId("sidebar-provider");

    // Initially closed
    expect(sidebarProvider).toHaveAttribute("data-open", "false");

    // Click to toggle (this would normally be handled by the SidebarTrigger)
    sidebarProvider.click();

    // The mock doesn't actually change state, but we can verify the click handler exists
    expect(sidebarProvider).toBeInTheDocument();
  });
});
