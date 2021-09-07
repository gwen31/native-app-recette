import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { fetchRecipes } from '../../../api/recipes';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';

import {getRecipes} from '../../../redux/selectors';

const RecipesListsScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const recipes = useSelector(getRecipes);
    useEffect(()=> {
        fetchRecipes(dispatch);
    },[]);

    return (
        <View style={styles.container}>
            <Text>RecipesListsScreen</Text>
            {recipes.map(recipe => {
                return <Text>{recipe.title}</Text>
            })}
            <Button 
                onPress={()=> {
                navigation.navigate("RecipesDetail");
            }} title="Aller sur l'écran détails" />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default RecipesListsScreen;

