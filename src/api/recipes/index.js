import axios from 'axios';

import {fetchRecipesAction} from '../../redux/action';

//Variables adresse API, ma key de l'API, et nombre par page
const ENDPOINT_RECIPES = "https://api.spoonacular.com/recipes/complexSearch";
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

