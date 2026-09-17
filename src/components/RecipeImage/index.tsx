import type { Recipe } from '../../types';
type ImageProps = {recipe: Recipe}

export default function RecipeImage({recipe}: ImageProps) {

  return (
	<div className='recipe-image'>
		{recipe.photoUrl ? <img src={recipe.photoUrl} alt={recipe.title}/> : <h2>{recipe.title}</h2>}
        {/* <h2>{recipe.title}</h2> */}
	</div>
  )
}
