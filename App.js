import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainContainer from "./navigation/MainContainer";
import LandingScreen from "./navigation/LandingScreen";
import LoginScreen from "./navigation/screens/auth/LoginScreen";
import SignupScreen from "./navigation/screens/auth/SignupScreen";
import ProfileScreen from "./navigation/screens/auth/ProfileScreen";
import SettingScreen from "./navigation/screens/auth/SettingScreen";
import NewNotes from "./navigation/screens/notes/NewNotes";
import DocumentViewer from "./navigation/screens/DocumentViewer";
import axios from "axios";
import { View, Text } from "react-native";
import EventsScreen from "./navigation/screens/EventsScreen";

import AnnouncementView from "./navigation/screens/view/AnnouncementView";
import VideoPlayer from "./navigation/screens/view/VideoPlayer";

import SermonNotes from "./navigation/screens/SermonNotes";


const Stack = createStackNavigator();

function App() {
  const [userId, setUserId] = useState(null);
  const FILE_BASE = "https://e941-197-232-61-224.ngrok-free.app";
  const [thisSermon, setThisSermon] = useState(null)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingScreen">
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="LoginScreen" children={() => <LoginScreen setUserId={setUserId} FILE_BASE={FILE_BASE} />} />
        <Stack.Screen name="SignupScreen" children={() => <SignupScreen FILE_BASE={FILE_BASE} />} />
        <Stack.Screen name="MainContainer" children={() => <MainContainer userId={userId} FILE_BASE={FILE_BASE} setThisSermon={setThisSermon} />} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileScreen" children={() => <ProfileScreen userId={userId} FILE_BASE={FILE_BASE} />} />
        <Stack.Screen name="SettingScreen" children={() => <SettingScreen FILE_BASE={FILE_BASE} />} />
        <Stack.Screen name="NewNotes" children={() => <NewNotes userId={userId} FILE_BASE={FILE_BASE} />} />
        <Stack.Screen name="SermonNotes" children={() => <SermonNotes userId={userId} FILE_BASE={FILE_BASE} thisSermon={thisSermon} />} />

        <Stack.Screen name="DocumentViewer" component={DocumentViewer} />
        <Stack.Screen name="EventsScreen" component={EventsScreen} />
        <Stack.Screen name="AnnouncementView" component={AnnouncementView} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
