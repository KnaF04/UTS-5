import React from 'react';
import { NativeBaseProvider, Box, Heading, Text, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
  const handleButtonClick = (buttonText) => {
    alert(`${buttonText} button clicked`);
  };

  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        p={4}
        alignItems="center"
        justifyContent="center"
        bg="primary.100"
      >
        <Heading size="lg" mb={2}>
          Welcome to the Home Screen
        </Heading>
        <Text fontSize="xl" mb={4}>
          This is a simple NativeBase template in the Home screen.
        </Text>
        <Button
            colorScheme="teal"
            onPress={() => {
            navigation.navigate('FAQ');
            }}mb={2}>
            Click Me (Button 1)
        </Button>

        <Button
            colorScheme="teal"
            onPress={() => {
            navigation.navigate('Pesanan');
            }}mb={2}>
            Click Me (Button 2)
        </Button>


        <Button
            colorScheme="teal"
            onPress={() => {
            navigation.navigate('Metode');
            }}>
            Click Me (Button 3)
        </Button>

      </Box>
    </NativeBaseProvider>
  );
};

export default Home;
