import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { MainContent } from "@/components/layout/MainContent";

const StubHomePage = () => (
  <div data-testid="home-page">
    <h1>Home Page</h1>
    <p data-testid="home-stub-content">Stub</p>
  </div>
);

describe("MainContent routing", () => {
  it("renders main landmark and home at /", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainContent homePage={StubHomePage} />
      </MemoryRouter>,
    );

    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute("id", "main-content");
    expect(main).toHaveAttribute("tabIndex", "-1");
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });

  it("renders home for unknown paths via catch-all", () => {
    render(
      <MemoryRouter initialEntries={["/unknown"]}>
        <MainContent homePage={StubHomePage} />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });

  it("merges className on main", () => {
    render(
      <BrowserRouter>
        <MainContent className="custom-shell" homePage={StubHomePage} />
      </BrowserRouter>,
    );

    expect(screen.getByRole("main")).toHaveClass("custom-shell", "h-full");
  });

  it("applies contentClassName to inner wrapper", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainContent contentClassName="inner-padding" homePage={StubHomePage} />
      </MemoryRouter>,
    );

    const main = screen.getByRole("main");
    const inner = main.firstChild as HTMLElement;
    expect(inner).toHaveClass("inner-padding", "min-h-full");
  });
});
