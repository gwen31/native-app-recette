import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const RecipesDetailsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>RecipesDetailsScreen</Text>
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