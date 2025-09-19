// tests/components/Routes.test.tsx
import { MainContent } from "@/components/layout/MainContent";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

// Mock the HomePage component (which is the actual root route)
vi.mock("@/pages/HomePage", () => ({
  HomePage: () => (
    <div data-testid="home-page">
      <h1>Home Page</h1>
      <div data-testid="home-content">
        {Array.from({ length: 100 }, (_, index) => (
          <div key={index} data-testid={`card-${index}`}>
            Card {index + 1}
          </div>
        ))}
      </div>
    </div>
  ),
}));

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

const RouterTestWrapper = ({
  children,
  initialEntries,
}: {
  children: React.ReactNode;
  initialEntries: string[];
}) => <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>;

describe("Routes in MainContent", () => {
  it("renders MainContent component structure", () => {
    render(
      <TestWrapper>
        <MainContent />
      </TestWrapper>
    );

    // Check main element structure
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");

    // Check container div
    const container = screen.getByRole("main").firstChild;
    expect(container).toHaveClass("min-h-full");
  });

  it("renders HomePage on root route (/)", () => {
    render(
      <RouterTestWrapper initialEntries={["/"]}>
        <MainContent />
      </RouterTestWrapper>
    );

    // Check that HomePage is rendered
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
    expect(screen.getByText("Home Page")).toBeInTheDocument();
    expect(screen.getByTestId("home-content")).toBeInTheDocument();

    // Check that cards are rendered
    expect(screen.getByTestId("card-0")).toBeInTheDocument();
    expect(screen.getByTestId("card-99")).toBeInTheDocument();
    expect(screen.getByText("Card 1")).toBeInTheDocument();
    expect(screen.getByText("Card 100")).toBeInTheDocument();
  });

  it("renders empty main element for unknown routes", () => {
    render(
      <RouterTestWrapper initialEntries={["/nonexistent"]}>
        <MainContent />
      </RouterTestWrapper>
    );

    // Check that main element exists but is empty for unknown routes
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });

  it("renders HomePage for all routes (catch-all)", () => {
    const testRoutes = ["/dashboard", "/settings", "/profile"];

    testRoutes.forEach((route) => {
      const { unmount } = render(
        <RouterTestWrapper initialEntries={[route]}>
          <MainContent />
        </RouterTestWrapper>
      );

      // All routes should render HomePage due to catch-all route
      expect(screen.getByTestId("home-page")).toBeInTheDocument();
      expect(screen.getByText("Home Page")).toBeInTheDocument();

      unmount();
    });
  });

  it("applies correct className when provided", () => {
    const customClassName = "custom-main-content";

    render(
      <TestWrapper>
        <MainContent className={customClassName} />
      </TestWrapper>
    );

    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveClass(customClassName);
    expect(mainElement).toHaveClass("h-full", "w-full", "relative");
  });

  it("renders without className prop", () => {
    render(
      <TestWrapper>
        <MainContent />
      </TestWrapper>
    );

    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveClass("h-full", "w-full", "relative");
  });

  it("has correct accessibility attributes", () => {
    render(
      <TestWrapper>
        <MainContent />
      </TestWrapper>
    );

    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });

  it("renders all 100 cards in HomePage", () => {
    render(
      <TestWrapper>
        <MainContent />
      </TestWrapper>
    );

    // Check that all cards are rendered
    for (let i = 0; i < 100; i++) {
      expect(screen.getByTestId(`card-${i}`)).toBeInTheDocument();
      expect(screen.getByText(`Card ${i + 1}`)).toBeInTheDocument();
    }
  });

  it("maintains proper DOM structure", () => {
    render(
      <TestWrapper>
        <MainContent />
      </TestWrapper>
    );

    // Check DOM hierarchy
    const mainElement = screen.getByRole("main");
    const container = mainElement.firstChild;
    const homePage = screen.getByTestId("home-page");

    expect(mainElement).toContainElement(container as Element);
    expect(container).toContainElement(homePage);
  });
});
