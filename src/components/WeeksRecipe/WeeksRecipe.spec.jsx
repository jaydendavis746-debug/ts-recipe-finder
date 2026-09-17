import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import WeeklyRecipe from '.';
import { BrowserRouter } from 'react-router-dom';


global.fetch = vi.fn()

function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)) }
}

describe("WeeklyRecipe component", () => {

    afterEach(() => {
        cleanup();
    })

    it("displays a random recipe", async () => {
        const data = [{
            "id": 1,
            "title": "California Roll Sushi Bowls",
            "photoUrl": "https://plantoeat.s3.amazonaws.com/recipes/16687583/d99596b7acb8758e6d878ada11c36bd83c704cf4-original.jpg?1535321755"

        }]

        fetch.mockResolvedValue(createFetchResponse(data))

        render(
            <BrowserRouter>
                <WeeklyRecipe />
            </BrowserRouter>
        )

        expect(fetch).toHaveBeenCalledWith('https://api.sampleapis.com/recipes/recipes/')

        const recipe = await screen.findByAltText("California Roll Sushi Bowls")

        expect(recipe).toBeInTheDocument()
    })
});


// "id": 1,
//             "title": "California Roll Sushi Bowls",
//             "course": "Main Course",
//             "cuisine": "Asian",
//             "mainIngredient": "Vegetables",
//             "description": "",
//             "source": "https://www.cookingclassy.com/california-roll-sushi-bowls/",
//             "url": "https://www.cookingclassy.com/california-roll-sushi-bowls/",
//             "urlHost": "cookingclassy.com",
//             "prepTime": 15,
//             "cookTime": 25,
//             "totalTime": 40,
//             "servings": 5,
//             "yield": 5,
//             "ingredients": "2 cups dry California Calrose Sushi Rice\n5 Tbsp rice vinegar, (, divided)\n2 Tbsp granulated sugar\n1/2 tsp salt\n1/4 cup light mayonnaise\n1 1/2 Tbsp sriracha\n1/4 cup low-sodium soy sauce\n10 oz imitation crab, or lump crabmeat, (, torn or chopped into small bite size pieces)\n1 1/2 cups diced English cucumber\n3/4 cup roughly chopped matchstick carrots\n1 nori sheet (, chopped or crumbled into small pieces (add more if you'd like))\n1 1/2 Tbsp chopped pickled sushi ginger\n1 large avocado, (, peeled and diced)\nBlack and toasted sesame seeds, (, for garnish)",
//             "directions": "Place rice in a fine mesh strainer and rinse under cold water until water runs clear (it will take about 2 minutes of rinsing). Tap bottom of strainer with palm of your hand until water no longer falls from strainer (it should be well drained). Transfer rice to a medium saucepan along with 2 1/4 cups water. Bring mixture to a full boil then reduce heat to low, cover with lid and simmer 15 minutes. Remove from heat, keep covered and let rest 15 minutes.\nMeanwhile, in a small saucepan combine 4 Tbsp of the vinegar with the sugar and salt. Heat over medium heat, cook and whisk until sugar has dissolved. Remove from heat, let cool while rice is resting then pour vinegar mixture over rice and toss to evenly coat.\nIn a small mixing bowl whisk together mayonnaise with sriracha. Thin with 1 1/2 tsp of water if desired. Transfer to a sandwich size resealable bag. Set aside.\nIn a small mixing bowl whisk together soy sauce and remaining 1 Tbsp vinegar, set aside. In a large mixing bowl gently toss together crab meat, cucumber, carrots, nori, ginger and avocado. Divide prepared rice among 4 or 5 bowls. Top with crab mixture then spoon soy sauce mixture over top of each serving. Cut a small tip from one corner of the resealable bag holding the sriracha mixture, drizzle over each serving. Serve immediately.\nRecipe source: adapted with changes from Whole Foods",
//             "tags": "Easy, Salad",
//             "rating": "",
//             "publicUrl": "https://www.plantoeat.com/recipes/16687583",
//             "photoUrl": "https://plantoeat.s3.amazonaws.com/recipes/16687583/d99596b7acb8758e6d878ada11c36bd83c704cf4-original.jpg?1535321755",
//             "private": "no",
//             "nutritionalScoreGeneric": "",
//             "calories": 465,
//             "fat": "8 g",
//             "cholesterol": "8 mg",
//             "sodium": "1185 mg",
//             "sugar": "9 g",
//             "carbohydrate": "84 g",
//             "fiber": "6 g",
//             "protein": "10 g",
//             "cost": ""