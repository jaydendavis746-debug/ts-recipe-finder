import type { Recipe } from '../../types';
type CardProps = {recipe: Recipe}

export default function RecipeCard ({recipe}: CardProps) {
    return (
        <div className="recipe-card">
            <div>
                <img src={recipe.photoUrl}></img>
            </div>
            <div>
                <h2>{recipe.title}</h2>
                <em>{recipe.cuisine}, {recipe.course}</em>
                <div dangerouslySetInnerHTML={{ __html: recipe.ingredients }}></div>
                <div dangerouslySetInnerHTML={{ __html: recipe.directions }}></div>
            </div>
        </div>
    )
};