// tests/components/ShadcnComponents.test.jsx
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

describe("ShadCN Components", () => {
  it("Button renders and clicks", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const btn = screen.getByText(/click me/i);
    expect(btn).toBeInTheDocument();

    await userEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("Input allows typing", async () => {
    render(<Input placeholder="Type here" />);

    const input = screen.getByPlaceholderText(/type here/i);
    expect(input).toBeInTheDocument();

    await userEvent.type(input, "Hello ShadCN");
    expect(input).toHaveValue("Hello ShadCN");
  });

  it("Dialog opens when triggered", async () => {
    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Test Dialog</DialogTitle>
          <DialogDescription>
            This is a test dialog for accessibility
          </DialogDescription>
          <p>Dialog Content</p>
        </DialogContent>
      </Dialog>
    );

    const triggerBtn = screen.getByText(/open dialog/i);
    await userEvent.click(triggerBtn);

    const content = await screen.findByText(/dialog content/i);
    expect(content).toBeInTheDocument();
  });
});
