import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import RecipesListsScreen from '../components/RecipesEpic/RecipesListsScreen/index'; 
import RecipesDetailsScreen from '../components/RecipesEpic/RecipesDetailsScreen';

const Stack = createStackNavigator();

const LoginNavigator = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="RecipesList" component={RecipesListsScreen} />
          <Stack.Screen name="RecipesDetail" component={RecipesDetailsScreen} />
        </Stack.Navigator>
    );
}
export default LoginNavigator;
