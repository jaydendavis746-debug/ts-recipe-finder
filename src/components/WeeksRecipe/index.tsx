import { useEffect, useState } from "react"
import type { Recipe } from "../../types"
import { Link } from "react-router-dom"
import RecipeImage from "../RecipeImage"


export default function WeeklyRecipe() {

  const [weeklyMeals, setWeeklyMeals]=useState<Recipe[]>([])


  useEffect(()=>{

  async function displayRecipes(){
    const res = await fetch(`https://api.sampleapis.com/recipes/recipes/`)
    const allRecipes = (await res.json()).filter((r:Recipe)=> (r.photoUrl !== ""))
    setWeeklyMeals(allRecipes)
}

displayRecipes()

}, [])


function shuffle(weeklyMeals:Recipe[]) {
  let currentIndex = weeklyMeals.length;

  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [weeklyMeals[currentIndex], weeklyMeals[randomIndex]] = [
      weeklyMeals[randomIndex], weeklyMeals[currentIndex]];
  }

  console.log(weeklyMeals.slice(0,7));
  return (weeklyMeals
    .slice(0,7)
    .map(recipe => <Link to={`/recipes/${recipe.id}`} key={recipe.id}><RecipeImage recipe={recipe}/></Link> ))
    
}



  return (
    <div className='recipes' data-testids='recipes-test'>
    {shuffle(weeklyMeals)}
    </div>
  )
}
