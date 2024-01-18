import React, {useState} from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  TextInput,
  Pressable,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
} from 'react-native';
import {styles} from '../../assets/css/AuthScreens';
import {useNavigation} from '@react-navigation/native';
// import { handleRegister } from '../../hooks/HandleApis';
import {BASE_URL} from '../../hooks/HandleApis';
import Logo from '../../utilities/Logo';

export default function SignupScreen() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={{padding: 20}}>
      <ScrollView>
        <View style={styles.signup_img}>
          <Logo styles={styles.signup_img} />
        </View>

        <View style={styles.login_view}>
          <SafeAreaView style={styles.login_form}>
            <Text style={styles.login_text}>Sign up</Text>

            {/* <Icon name="person" size={20} color="black" style={styles.icon} /> */}
            <TextInput
              style={styles.login_input}
              placeholder="Name"
              placeholderTextColor={'#b7b7b7'}
              value={userData.name}
              onChangeText={text =>
                setUserData(data => ({...data, name: text}))
              }
            />

            {/* <Icon name="email" size={20} color="black" style={styles.icon} /> */}
            <TextInput
              style={styles.login_input}
              placeholder="Email"
              placeholderTextColor={'#b7b7b7'}
              value={userData.email}
              onChangeText={text =>
                setUserData(data => ({...data, email: text}))
              }
            />

            {/* <Icon name="phone" size={20} color="black" style={styles.icon} /> */}
            <TextInput
              style={styles.login_input}
              placeholder="Phone"
              placeholderTextColor={'#b7b7b7'}
              value={userData.phone}
              onChangeText={text =>
                setUserData(data => ({...data, phone: text}))
              }
            />

            {/* <Icon name="lock" size={20} color="black" style={styles.icon} /> */}
            <TextInput
              style={styles.login_input}
              placeholder="Password"
              placeholderTextColor={'#b7b7b7'}
              secureTextEntry
              value={userData.password}
              onChangeText={text =>
                setUserData(data => ({...data, password: text}))
              }
            />

            <TouchableOpacity
              onPress={() =>
                handleRegister(
                  userData.name,
                  userData.email,
                  userData.phone,
                  userData.password,
                  navigation,
                )
              }
              title="Submit"
              style={styles.signin}>
              <Text style={{...styles.auth_btn_text, color: '#0A7E8B'}}>
                Sign up
              </Text>
            </TouchableOpacity>

            <View style={styles.account_container}>
              <Text style={styles.account}>Have an account?</Text>
              <Pressable onPress={handleLogin}>
                <Text style={styles.login_link}> Log in</Text>
              </Pressable>
            </View>
          </SafeAreaView>
        </View>
      </ScrollView>
    </View>
  );
}

const config = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const handleRegister = async (
  name,
  email,
  phone,
  password,
  navigation,
) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/register`, {
      name,
      email,
      phone,
      password,
    });
    if (response && response.data) {
      const token = response.data.token;
      navigation.navigate('LoginScreen');
    } else {
      console.error('Registration failed: No data in the response');
    }
  } catch (error) {
    console.error('Registration failed:', error.message || error);
  }
};
