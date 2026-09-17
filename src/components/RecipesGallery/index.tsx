import { useEffect, useState } from 'react'
import type { Recipe } from '../../types';

export default function RecipesGallery() {

const [recipes, setRecipes] = useState<Recipe[]>([])

useEffect(()=>{
async function displayRecipes(){
    const res = await fetch('https://api.sampleapis.com/recipes/recipes')
    const data = await res.json()
    setRecipes(data)

}
displayRecipes()

}, []);


  return (
   <div className='recipes' data-testids='recipes-test'>
        {recipes.map(recipe => <p>{recipe.title}</p>)}
   </div>
  )
}
