import React from "react";
import { describe, it, expect, afterEach, beforeEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";


import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import RecipeCard from ".";

describe("RecipeCard component", () => {
    const mockRecipe = {
        title: "California Roll Sushi Bowls",
        cuisine: "Asian",
        course: "Main Course",
        ingredients: "2 cups dry California Calrose Sushi Rice.",
        directions: "Place rice in a fine mesh strainer and rinse under cold water until water runs clear (it will take about 2 minutes of rinsing).",
        photoUrl: "https://plantoeat.s3.amazonaws.com/recipes/16687583/d99596b7acb8758e6d878ada11c36bd83c704cf4-original.jpg?1535321755",
    };

    beforeEach(() => {
        render(<RecipeCard  recipe={mockRecipe} />)
    })

    afterEach(() => {
        cleanup()
    })

    it("displays a recipeCard with title, cuisine, course, ingredients, directions, and img", async () => {
        const title = screen.getByRole("heading")
        const img = screen.getByRole("img")
        const cuisineAndCourse = screen.getByRole("figure")
        const ingredients = screen.getByRole("figure2")
        const directions = screen.getByRole("figure3")
        expect(title).toBeInTheDocument()
        expect(img).toBeInTheDocument()
        expect(cuisineAndCourse).toBeInTheDocument()
        expect(ingredients).toBeInTheDocument()
        expect(directions).toBeInTheDocument()
        expect(img).toHaveAttribute("src", "https://plantoeat.s3.amazonaws.com/recipes/16687583/d99596b7acb8758e6d878ada11c36bd83c704cf4-original.jpg?1535321755")
        expect(title.textContent).toEqual("California Roll Sushi Bowls")
        expect(cuisineAndCourse.textContent).toEqual("Asian, Main Course")
        expect(ingredients.textContent).toEqual("2 cups dry California Calrose Sushi Rice.")
        expect(directions.textContent).toEqual("Place rice in a fine mesh strainer and rinse under cold water until water runs clear (it will take about 2 minutes of rinsing).")
    })
})