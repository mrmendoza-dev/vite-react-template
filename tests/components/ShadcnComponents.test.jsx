// tests/components/ShadcnComponents.test.jsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  describe("Button Component", () => {
    it("renders and handles clicks", async () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);

      const btn = screen.getByText(/click me/i);
      expect(btn).toBeInTheDocument();
      expect(btn).toHaveClass("bg-primary", "text-primary-foreground");

      await userEvent.click(btn);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("renders with different variants", () => {
      const { rerender } = render(
        <Button variant="secondary">Secondary</Button>
      );
      expect(screen.getByText("Secondary")).toHaveClass("bg-secondary");

      rerender(<Button variant="destructive">Destructive</Button>);
      expect(screen.getByText("Destructive")).toHaveClass("bg-destructive");

      rerender(<Button variant="outline">Outline</Button>);
      expect(screen.getByText("Outline")).toHaveClass("border");
    });

    it("handles disabled state", () => {
      render(<Button disabled>Disabled</Button>);
      const btn = screen.getByText("Disabled");
      expect(btn).toBeDisabled();
      expect(btn).toHaveClass("disabled:pointer-events-none");
    });
  });

  describe("Input Component", () => {
    it("allows typing and displays value", async () => {
      render(<Input placeholder="Type here" />);

      const input = screen.getByPlaceholderText(/type here/i);
      expect(input).toBeInTheDocument();
      expect(input).toHaveClass("flex", "h-9", "w-full");

      await userEvent.type(input, "Hello ShadCN");
      expect(input).toHaveValue("Hello ShadCN");
    });

    it("handles different input types", () => {
      render(<Input type="email" placeholder="Email" />);
      const input = screen.getByPlaceholderText("Email");
      expect(input).toHaveAttribute("type", "email");
    });

    it("handles disabled state", () => {
      render(<Input disabled placeholder="Disabled" />);
      const input = screen.getByPlaceholderText("Disabled");
      expect(input).toBeDisabled();
    });
  });

  describe("Dialog Component", () => {
    it("opens when triggered", async () => {
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
      expect(screen.getByText("Test Dialog")).toBeInTheDocument();
    });

    it("renders dialog with proper accessibility attributes", async () => {
      render(
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Accessible Dialog</DialogTitle>
            <DialogDescription>
              This dialog should have proper accessibility
            </DialogDescription>
          </DialogContent>
        </Dialog>
      );

      const triggerBtn = screen.getByText(/open dialog/i);
      await userEvent.click(triggerBtn);

      const dialog = await screen.findByRole("dialog");
      expect(dialog).toBeInTheDocument();
    });
  });

  describe("Card Component", () => {
    it("renders card with header and content", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card content goes here</p>
          </CardContent>
        </Card>
      );

      expect(screen.getByText("Card Title")).toBeInTheDocument();
      expect(screen.getByText("Card Description")).toBeInTheDocument();
      expect(screen.getByText("Card content goes here")).toBeInTheDocument();
    });

    it("applies correct styling classes", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Styled Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Content</p>
          </CardContent>
        </Card>
      );

      const cardTitle = screen.getByText("Styled Card");
      expect(cardTitle).toBeInTheDocument();
      expect(cardTitle).toHaveClass("leading-none", "font-semibold");
    });
  });

  describe("Component Integration", () => {
    it("works together in a form-like structure", async () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Form Example</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Enter your name" />
            <div className="flex gap-2">
              <Button>Submit</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </CardContent>
        </Card>
      );

      expect(screen.getByText("Form Example")).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText("Enter your name")
      ).toBeInTheDocument();
      expect(screen.getByText("Submit")).toBeInTheDocument();
      expect(screen.getByText("Cancel")).toBeInTheDocument();
    });
  });
});
