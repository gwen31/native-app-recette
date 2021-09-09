import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {fetchSelectedRecipe} from '../../../api/recipes';

const RecipesDetailsScreen = ({route, navigation}) => {
    const {id} = route.params;
    const dispatch = useDispatch();

    useEffect(()=> {
        fetchSelectedRecipe(dispatch, id)
    },[])

    return (
        <View style={styles.container}>
            <Text>RecipesDetailsScreen</Text>
            <Text>{id}</Text>
            <Button 
                title="Revenir" 
                onPress={()=> { 
                navigation.goBack();
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default RecipesDetailsScreen;