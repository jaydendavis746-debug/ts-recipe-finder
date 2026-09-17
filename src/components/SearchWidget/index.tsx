import React, {useState, useEffect} from 'react'
import type { Recipe } from '../../types';
import { Link } from 'react-router-dom';
import RecipeCard from '../RecipeCard';

export default function SearchWidget() {
    
    const [searchString, setSearchString] = useState("Chicken");
    const [inputValue, setInputValue] = useState("");
    const [recipeData, setRecipeData] = useState<Recipe[]>([])

	// function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    //     const newInput = e.target.value;
    //     setInputValue(newInput);
    // }

    function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        setSearchString(inputValue);
        setInputValue("");
    }

    useEffect(() => {

        async function searchAPI() {
            const response = await fetch(`https://api.sampleapis.com/recipes/recipes?q=${searchString}`);
            const data: Recipe[] = await response.json();
            console.log(data);
            // const data = rawData.map(s => s);
            setRecipeData(data);
        }

        searchAPI();

    }, [searchString]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={searchString}
                    value={inputValue}
                    required
                />
                <input type="submit" value="Search" />
            </form>
            {/* <ShowList /> */}
            {recipeData.map(recipe => <Link to={`${recipe.id}`} key={recipe.id}><RecipeCard recipe={recipe}/></Link> )}
        </>
    );
}