import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getSelectedRecipe } from "../../../redux/selectors";
import { fetchSelectedRecipe } from '../../../api/recipes';

const RecipesDetailsScreen = ({route, navigation}) => {
    const {id} = route.params;
    const dispatch = useDispatch();
    const recipe = useSelector(getSelectedRecipe);

    useEffect(()=> {
        fetchSelectedRecipe(dispatch, id)
    },[])

    return (
        <ScrollView>
            <View style={styles.containerImage}>
                <Image 
                    source={{uri: recipe.image}} 
                    rezizeMode="cover" 
                    style={styles.image} 
                    />
            </View>
            <View>
                <Text style={styles.title}>{recipe.title}</Text>
            </View>
            <View style={styles.containerIngredients}>
                {recipe.extendedIngredients.map((ing)=> {
                    return <Text style={styles.ing}>{ing.original}</Text>
                })}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerImage:{
        height: 250,
    },
    image: {
        height: 250,
    },
    title: {
       fontWeight: 'bold',
       fontSize: 26,
       textAlign: 'center',
       marginVertical: 10, //regroupe marginTop et marginBottom
    },
    containerIngredients: {
        borderTopWidth: 1,
        borderTopColor: 'grey',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        padding: 15,
    },
    ing:{
      fontSize: 16,  
    }
});
export default RecipesDetailsScreen;