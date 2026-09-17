import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import type { Recipe } from '../../types';
import { RecipeCard } from '../../components';

export default function ShowPage() {
  const {id} = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {

    async function displayShow() {
      const response = await fetch(`https://api.sampleapis.com/recipes/recipes/${id}`);
      const rawData = await response.json();
      setRecipe(rawData)
    }

    displayShow();

  }, []);

  return (
    <>
        {recipe ? <RecipeCard recipe={recipe!}/> : null}
    </>
  )
}