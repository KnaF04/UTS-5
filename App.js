import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, extendTheme, ThemeProvider, Box, Text } from 'native-base';
import Home from './screens/home';
import FAQ from './screens/faq';
import Pesanan from './screens/pesanan';
import Metode from './screens/metode';

const Stack = createNativeStackNavigator();
const customTheme = extendTheme({
  colors: {
    primary: {
      500: '#007bff', // Customize your primary color
    },
    // Add other color customizations here
  },
  // Add more theme properties based on your requirements
});
const App = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FAQ" component={FAQ} />
        <Stack.Screen name="Pesanan" component={Pesanan} />
        <Stack.Screen name="Metode" component={Metode} />

      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
