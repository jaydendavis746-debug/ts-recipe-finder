import React from "react";
import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";


import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import RecipeImage from ".";

describe("RecipeImage component", () => {

    it("Display an image", () => {
        const mockRecipe = {
            photoUrl: "https://plantoeat.s3.amazonaws.com/recipes/16687583/d99596b7acb8758e6d878ada11c36bd83c704cf4-original.jpg?1535321755"
        }

        render(<RecipeImage recipe={mockRecipe} />)

        const img = screen.getByRole('img')
        expect(img).toBeInTheDocument()
        expect(img).toHaveAttribute('src', "https://plantoeat.s3.amazonaws.com/recipes/16687583/d99596b7acb8758e6d878ada11c36bd83c704cf4-original.jpg?1535321755")
    })
})