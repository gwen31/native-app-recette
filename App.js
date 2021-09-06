import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Provider} from 'react-redux';

import store from './src/redux/store';
import RecipesDetailsScreen from './src/components/RecipesEpic/RecipesDetailsScreen';
import RecipesListsScreen from './src/components/RecipesEpic/RecipesListsScreen';

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <RecipesListsScreen />
      <RecipesDetailsScreen />
    </View>
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
