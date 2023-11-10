import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider, extendTheme, Icon } from 'native-base';
import { FontAwesome } from '@expo/vector-icons'; // or 'react-native-vector-icons/FontAwesome' for non-Expo projects
import Home from './screens/home';
import FAQScreen from './screens/faq';
import Pesanan from './screens/pesanan';
import Metode from './screens/metode';

const Tab = createBottomTabNavigator();

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
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home'; // Replace with the appropriate Font Awesome icon name
              } else if (route.name === 'FAQ') {
                iconName = 'question-circle'; // Replace with the appropriate Font Awesome icon name
              } else if (route.name === 'Pesanan') {
                iconName = 'file'; // Replace with the appropriate Font Awesome icon name
              } else if (route.name === 'Metode') {
                iconName = 'credit-card'; // Replace with the appropriate Font Awesome icon name
              }

              // Render the Font Awesome icon
              return <Icon as={FontAwesome} name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="FAQ" component={FAQScreen} />
          <Tab.Screen name="Pesanan" component={Pesanan} />
          <Tab.Screen name="Metode" component={Metode} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
