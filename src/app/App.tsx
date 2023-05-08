/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect } from 'react';
import Camera from './screens/Camera.js';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home.js';
import reactotron from './config/reactotron.js';
const Stack = createNativeStackNavigator();
export const App = () => {
  if (__DEV__) {
    reactotron.connect();
  }
  async function logJSONData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = await response.json();
    console.log(jsonData);
  }

  useEffect(() => {
    logJSONData();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
