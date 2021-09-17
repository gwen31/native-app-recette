import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const RecipeListItem = ({item, navigation}) => {
    return (
        <TouchableOpacity  onPress={()=> {
            navigation.navigate("RecipesDetail", { 
                id: item.id
            });
        }} >
            <View style={styles.container}>
                <Image source={{uri: item.image}} style={styles.image} />
                <View style={styles.containerRight}>
                <Text style={styles.title}>{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        maxWidth: '100%',
    },
    containerRight:{
        width: '70%',
        paddingLeft: 10,
        paddingTop: 10,
    },
    image:{
        width:'30%',
        height:100,
    },
    title:{
        fontSize:16,
        fontWeight: 'bold',
    }
})
export default RecipeListItem;

