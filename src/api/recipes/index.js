import axios from 'axios';

import {fetchRecipesAction, fetchSelectedRecipeAction} from '../../redux/action';

const ENDPOINT_BASE = "https://api.spoonacular.com/recipes";
const ENDPOINT_RECIPES = ENDPOINT_BASE + "/complexSearch";
const apiKey = "5b0cd9ef88d141388461f9b2d71b7ca8";
const MAX_PER_PAGE = 30;

//requetes Axios, pour recupérer la liste des recettes

export const fetchRecipes = async (dispatch, query) => {
    try {
        const response = await axios.get(ENDPOINT_RECIPES, {
            params: {
                apiKey,
                number: MAX_PER_PAGE
            },
        });
            dispatch(fetchRecipesAction(response.data.results)) //results c'est ce que l'on recupère dans l'API

        } catch(e){
            console.log('error requete recipes', e);
        }
};
//requetes Axios, pour recupérer les informations d'une recette

export const fetchSelectedRecipe = async (dispatch, recipeId) => {
    try {

        const response = await axios.get(ENDPOINT_BASE + "/" + recipeId + "/information", {
            params: {
                apiKey
            }
        })
        
        dispatch(fetchSelectedRecipeAction(response.data)) 
    } catch(e) {
            console.log('error', e)
        }
    }
    
