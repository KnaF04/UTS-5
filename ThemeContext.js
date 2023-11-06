import React from 'react';
import { extendTheme, ThemeProvider } from 'native-base';
import { lightTheme, darkTheme } from './themes'; // Import your custom theme configurations

// Define your custom theme by extending the default theme
const customTheme = extendTheme({
  colors: {
    primary: {
      500: '#007bff', // Customize your primary color
    },
    // Add other color customizations here
  },
  // Add more theme properties based on your requirements
});

// Create a ThemeContext to provide the theme to your app
const ThemeContext = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeContext; // Make sure you are exporting ThemeContext
