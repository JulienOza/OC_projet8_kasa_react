import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Accordion from "../src/components/Accordion";

describe("Accordion", () => {
  it("renders its title and content collapsed by default", () => {
    render(
      <Accordion title="Description">
        <p>Un logement confortable.</p>
      </Accordion>,
    );

    const trigger = screen.getByRole("button", { name: "Description" });
    const panel = document.querySelector('[role="region"]');

    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).toHaveAttribute("aria-controls", panel.id);
    expect(panel).toHaveAttribute("aria-hidden", "true");
    expect(panel).not.toHaveClass("is-open");
    expect(screen.getByText("Un logement confortable.")).toBeInTheDocument();
  });

  it("opens and closes when the trigger is clicked", () => {
    render(
      <Accordion title="Équipements">
        <ul>
          <li>Wifi</li>
        </ul>
      </Accordion>,
    );

    const trigger = screen.getByRole("button", { name: "Équipements" });
    const panel = document.querySelector('[role="region"]');

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(panel).toHaveAttribute("aria-hidden", "false");
    expect(panel).toHaveClass("is-open");

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(panel).toHaveAttribute("aria-hidden", "true");
    expect(panel).not.toHaveClass("is-open");
  });

  it("allows accordions to be opened independently and gives each panel a unique id", () => {
    render(
      <>
        <Accordion title="Description">Détails</Accordion>
        <Accordion title="Équipements">Liste</Accordion>
      </>,
    );

    const [descriptionTrigger, equipmentTrigger] = screen.getAllByRole("button");
    const [descriptionPanel, equipmentPanel] = document.querySelectorAll(
      '[role="region"]',
    );

    expect(descriptionPanel.id).not.toBe(equipmentPanel.id);
    expect(descriptionTrigger).toHaveAttribute(
      "aria-controls",
      descriptionPanel.id,
    );
    expect(equipmentTrigger).toHaveAttribute("aria-controls", equipmentPanel.id);

    fireEvent.click(descriptionTrigger);
    expect(descriptionTrigger).toHaveAttribute("aria-expanded", "true");
    expect(equipmentTrigger).toHaveAttribute("aria-expanded", "false");
  });

  it("renders safely when title and children are omitted", () => {
    render(<Accordion />);

    const trigger = screen.getByRole("button");
    const panel = document.querySelector('[role="region"]');

    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveTextContent("");
    expect(panel).toHaveAttribute("aria-hidden", "true");
    expect(panel.querySelector(".accordion__content")).toBeEmptyDOMElement();
  });
});
