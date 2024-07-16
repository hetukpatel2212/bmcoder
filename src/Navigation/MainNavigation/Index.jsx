import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../../Screens/Home/Index';
import TabNavigation from '../TabNavigation/Index';
import MeditationDetails from '../../Screens/MeditationDetails/Index';
import Downloads from '../../Screens/Downloads/Index';
import MusicPlayer from '../../Screens/MusicPlayer/Index';
import Tips from '../../Screens/Tips/Index';
import Timer from '../../Screens/Timer/Index';
import Form from '../../Screens/Form/Index';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MeditationDetails"
          component={MeditationDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Downloads"
          component={Downloads}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MusicPlayer"
          component={MusicPlayer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tips"
          component={Tips}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Timer"
          component={Timer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Form"
          component={Form}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
