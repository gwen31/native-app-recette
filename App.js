import React from 'react';
import { StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import store from './src/redux/store';
import RecipesDetailsScreen from './src/components/RecipesEpic/RecipesDetailsScreen';
import RecipesListsScreen from './src/components/RecipesEpic/RecipesListsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="RecipesList" component={RecipesListsScreen} />
          <Stack.Screen name="RecipesDetail" component={RecipesDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
