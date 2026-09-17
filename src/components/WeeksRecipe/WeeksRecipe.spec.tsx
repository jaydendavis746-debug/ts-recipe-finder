import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import WeeklyRecipe from '.';

type FakeRecipe = {
    id: number,
    title: string
}

global.fetch = vi.fn()

function createFetchResponse(data: FakeRecipe[]) {
  return { json: () => new Promise((resolve) => resolve(data)) }
}

describe("WeeklyRecipe component", () => {

    afterEach(() => {
        cleanup();
    })

    it("displays a random recipe", async () => {
        const data = [{id: 1, title: "mushrooms"}]

        fetch.mockResolvedValue(createFetchResponse(data))

        render(<WeeklyRecipe />)

        expect(fetch).toHaveBeenCalledWith('https://api.sampleapis.com/recipes/recipes/')

        const recipe = await screen.findByRole("navigation")
        expect(recipe).toHaveProperty("key", data[0].id)
    })
});