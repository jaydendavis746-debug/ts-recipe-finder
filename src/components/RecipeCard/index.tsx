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
                <em>{recipe.course}, Cuisine:{recipe.cuisine} </em>
                <div >
                    <h2>Ingredients list: </h2>
                    <p dangerouslySetInnerHTML={{ __html: recipe.ingredients }}></p>
                </div>
                <div >
                    <h2>Instructions:</h2>
                    <p dangerouslySetInnerHTML={{ __html: recipe.directions }}></p>
                </div>
            </div>
        </div>
    )
};