import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import More from './screens/More';
import SermonsScreen from './screens/SermonsScreen';
import Notes from './screens/Notes';

const Home = 'Home';
const Sermons = 'Sermons';
const notes = 'Notes';
const more = 'More';

const Tab = createBottomTabNavigator();

export default function MainContainer( {userId, FILE_BASE, thisSermon, setThisSermon}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === Home) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === Sermons) {
            iconName = focused ? 'list' : 'list-outline';
          } else if (rn === notes) {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (rn === more) {
            iconName = focused
              ? 'ellipsis-horizontal'
              : 'ellipsis-horizontal-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        labelStyle: {
          paddingBottom: 10,
          fontSize: 10,
        },
        style: {
          padding: 10,
          height: 70,
        },
      }}
    >
      <Tab.Screen name="Home" children={() => <HomeScreen FILE_BASE={FILE_BASE} />} options={{ tabBarVisible: false }} />
      <Tab.Screen name="Sermons" children={() => <SermonsScreen userId={userId} FILE_BASE={FILE_BASE} thisSermon={thisSermon} setThisSermon={setThisSermon} />} />
      <Tab.Screen name="Notes" children={() => <Notes userId={userId} FILE_BASE={FILE_BASE} />} />
      <Tab.Screen name="More" children={() => <More userId={userId} FILE_BASE={FILE_BASE}/>} />
    </Tab.Navigator>
  );
}
