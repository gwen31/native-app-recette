import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import { fetchRecipes } from '../../../api/recipes';

const RecipesListsScreen = ({navigation}) => {
    
    useEffect(()=> {
        fetchRecipes()
    },[]);

    return (
        <View style={styles.container}>
            <Text>RecipesListsScreen</Text>
            <Button onPress={()=> {
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

