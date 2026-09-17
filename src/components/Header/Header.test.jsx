import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from "react-router-dom";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Header from ".";

describe("Header Component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("Displays a nav bar with three children", () => {
        const nav = screen.getByRole("navigation");

        expect(nav).toBeInTheDocument();
        expect(nav.childNodes.length).toBe(3);
	});

	it("Changes location to recipe page when navlink is clicked", async () => {
        expect(window.location.href).not.toContain("/recipes")
        const allRecipes = screen.getByText("All recipes");
        await userEvent.click(allRecipes);
        expect(window.location.href).toContain("/recipes")
    });

	it("Changes location to search page when navlink is clicked", async () => {
        expect(window.location.href).not.toContain("/search")
        const searchRecipes = screen.getByText("Search recipes");
        await userEvent.click(searchRecipes);
        expect(window.location.href).toContain("/search")
    });
});
