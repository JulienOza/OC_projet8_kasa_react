import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import PropertyCard from "../src/components/PropertyCard";

describe("PropertyCard", () => {
  it("renders the property image, title, and details link from its props", () => {
    render(
      <MemoryRouter>
        <PropertyCard
          id="c67ab8a7"
          title="Appartement cosy"
          cover="https://example.com/cover.jpg"
        />
      </MemoryRouter>,
    );

    const cardLink = screen.getByRole("link", { name: /Appartement cosy/ });
    const image = screen.getByRole("img", { name: "Appartement cosy" });

    expect(cardLink).toHaveAttribute("href", "/property/c67ab8a7");
    expect(image).toHaveAttribute("src", "https://example.com/cover.jpg");
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Appartement cosy",
    );
  });

  it("reflects empty prop values in the rendered card", () => {
    const { container } = render(
      <MemoryRouter>
        <PropertyCard id="" title="" />
      </MemoryRouter>,
    );

    const cardLink = screen.getByRole("link");
    const image = container.querySelector("img");

    expect(cardLink).toHaveAttribute("href", "/property/");
    expect(image).toHaveAttribute("alt", "");
    expect(image).not.toHaveAttribute("src");
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("");
  });

  it("renders a card when its props are omitted", () => {
    const { container } = render(
      <MemoryRouter>
        <PropertyCard />
      </MemoryRouter>,
    );

    const cardLink = screen.getByRole("link");
    const image = container.querySelector("img");

    expect(cardLink).toHaveAttribute("href", "/property/undefined");
    expect(image).not.toHaveAttribute("alt");
    expect(image).not.toHaveAttribute("src");
    expect(screen.getByRole("heading", { level: 2 })).toBeEmptyDOMElement();
  });
});
