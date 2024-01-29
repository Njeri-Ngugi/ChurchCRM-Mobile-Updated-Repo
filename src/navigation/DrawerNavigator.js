import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import BottomTabNavigator from './BottomTabNavigator';
import ProfileScreen from '../screens/auth/ProfileScreen';
import More from '../screens/More';
import {BASE_URL} from '../hooks/HandleApis';
import DrawerNavigatorcss from '../assets/css/DrawerNavigatorcss';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const {userData} = props;
  const [userId, setUserId] = useState(null);

  const handleSignOut = () => {
    console.log('Signing out...');
    // setUserId(null);
    // navigation.navigate('LoginScreen');
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={DrawerNavigatorcss.header}>
        <View style={DrawerNavigatorcss.itemContainer}>
          <Image
            source={require('../assets/images/one.jpg')}
            style={DrawerNavigatorcss.image_logo}
          />
        </View>
        {userData && (
          <>
            <Text style={DrawerNavigatorcss.NameText}>
              {userData.name}
              <Icon name="person" style={DrawerNavigatorcss.icon} />
            </Text>
            <Text style={DrawerNavigatorcss.EmailText}>
              {userData.email} 
              <Icon name="person" style={DrawerNavigatorcss.icon} />
            </Text>
          </>
        )}
      </View>

      {Object.entries(props.descriptors).map(([key, descriptor], index) => {
        const focused = index === props.state.index;
        return (
          <DrawerItem
            key={key}
            label={() => (
              <Text
                style={
                  focused
                    ? DrawerNavigatorcss.drawerLabelFocused
                    : DrawerNavigatorcss.drawerLabel
                }>
                {descriptor.options.title}
              </Text>
            )}
            onPress={() =>
              descriptor.navigation.navigate(descriptor.route.name)
            }
            style={[
              DrawerNavigatorcss.drawerItem,
              focused ? DrawerNavigatorcss.drawerItemFocused : null,
            ]}
          />
        );
      })}
      <View style={DrawerNavigatorcss.footer}>
        <TouchableOpacity
          style={DrawerNavigatorcss.signOutButton}
          onPress={handleSignOut}>
          <Text style={DrawerNavigatorcss.signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = ({userId}) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (userId !== undefined) {
      console.log('user id caontainer:', userId);

      fetchUserData(userId);
    }
  }, [userId]);

  const fetchUserData = async userId => {
    try {
      const response = await fetch(`${BASE_URL}/api/profile/${userId}`);
      const userData = await response.json();

      setUserData(userData);

      console.log('User Data:', userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: '#087E8B',
          height: 50,
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={DrawerNavigatorcss.headerLeft}>
            <Icon name="bars" size={20} color="#ffffff" />
          </TouchableOpacity>
        ),
      })}
      drawerContent={props => (
        <CustomDrawerContent {...props} userData={userData} />
      )}>
      <Drawer.Screen
        name="HomeTabs"
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          headerRight: () => (
            <View style={DrawerNavigatorcss.headerRight}>
              <Icon name="bell" size={20} color="#fff" />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        initialParams={{userId: userId}}
        options={{
          title: 'ProfileScreen',
          labelStyle: DrawerNavigatorcss.drawerLabelWhite,
          headerTitle: () => (
            <Text style={DrawerNavigatorcss.headerTitle}>ProfileScreen</Text>
          ),
        }}
      />
      <Drawer.Screen
        name="More"
        component={More}
        initialParams={{userId: userId}}
        options={{
          title: 'More',
          labelStyle: DrawerNavigatorcss.drawerLabelWhite,
          headerTitle: () => (
            <Text style={DrawerNavigatorcss.headerTitle}>More</Text>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
