import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages';
import Login from './src/pages/login';
import LostPassword from './src/pages/lost-password';
import CreateAccont from './src/pages/create-account';

const Stack = createNativeStackNavigator();

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator>
       
       <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
       <Stack.Screen name='Login' component={Login}  options={{headerShown:false}}/>
       <Stack.Screen name='LostPassword' component={LostPassword}  options={{headerShown:false}}/>
       <Stack.Screen name='CreateAccont' component={CreateAccont}  options={{headerShown:false}}/>
       

     </Stack.Navigator>
   </NavigationContainer>
  );
}

