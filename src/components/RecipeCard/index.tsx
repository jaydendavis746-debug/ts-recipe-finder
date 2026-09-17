import type { Recipe } from '../../types';
type CardProps = {recipe: Recipe}

export default function RecipeCard ({recipe}: CardProps) {
    return (
        <div className="recipe-card">
            <div>
                <img src={recipe.photoUrl}></img>
            </div>
            <div>
                <h2 className='recipe-title' >{recipe.title}</h2>
                <em role='figure'>{recipe.cuisine}, {recipe.course}</em>
                <div role='figure2' dangerouslySetInnerHTML={{ __html: recipe.ingredients }}></div>
                <div role='figure3' dangerouslySetInnerHTML={{ __html: recipe.directions }}></div>
            </div>
        </div>
    )
};