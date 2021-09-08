import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const RecipesDetailsScreen = ({route, navigation}) => {
    const {id} = route.params;
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