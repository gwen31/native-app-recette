import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TasksContainer from '../components/TasksEpic/TasksContainer';
import RecipesNavigator from './RecipesNavigator';

const Tabs = createBottomTabNavigator();

const AppNavigation = () => {
 
    return (
    <NavigationContainer>
        <Tabs.Navigator
          screenOptions={
            ({route}) => ({
              tabBarIcon: ({focused, color, size})=> { 
                let icon 

                  if (route.name === 'Recettes'){
                    icon ="ios-list";
                  } else {
                    icon = 'ios-cart';
                  }
                return <Ionicons name={icon} size={size} color={color}/>
              },
            })
          }
          tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: "green",
          }}
          >
          <Tabs.Screen name="Recettes" component={RecipesNavigator} />
          <Tabs.Screen name="Liste" component={TasksContainer} />
        </Tabs.Navigator>
      </NavigationContainer>  
    );
}
export default AppNavigation;
