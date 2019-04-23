import { Injectable } from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
    private recipes: Recipe[] = [
        {
            id: 'r1',
            title: 'Macarrones',
            imageUrl: 'https://okdiario.com/img/recetas/2017/02/08/macarrones-con-chorizo.jpg',
            ingredients: ['Pasta', 'Tomatoes']
        },
        {
            id: 'r2',
            title: 'Paella',
            imageUrl: 'https://cocina-casera.com/wp-content/uploads/2015/11/paella-mixta-receta-casera.jpeg',
            ingredients: ['Arroz', 'Langostinos']
        }
    ];

    constructor() {
    }

    getAllRecipes() {
        return this.recipes;
    }

    getRecipe(recipeId: string) {
        return {
            ...this.recipes.find(recipe => {
                return recipe.id === recipeId;
            })
        };
    }

    deleteRecipe(recipeId: string){
        this.recipes = this.recipes.filter(recipe =>{
            return recipe.id !== recipeId;
        });
    }

}
