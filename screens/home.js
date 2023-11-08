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
        bg=""
      >
        <Heading size="lg" mb={2}>
        Home Screen
        </Heading>
        <Text fontSize="xl" mb={4}>
          Cuma pindah screen karna screen satu sama lain tidak nyambung
        </Text>
        <Button
            w="170"
            h="50"
            justifyContent="center"
            alignItems="center"
            marginTop={5}
            colorScheme="green"
            onPress={() => {
            navigation.navigate('FAQ');
            }}mb={2}>
            FAQ
        </Button>

        <Button
            w="170"
            h="50"
            justifyContent="center"
            alignItems="center"
            marginTop={5}
            marginBottom={5}
            colorScheme="green"
            onPress={() => {
            navigation.navigate('Pesanan');
            }}mb={2}>
            Pesanan
        </Button>


        <Button
            w="170"
            h="50"
            justifyContent="center"
            alignItems="center"
            colorScheme="green"
            onPress={() => {
            navigation.navigate('Metode');
            }}>
            Metode Pembayaran
        </Button>

      </Box>
    </NativeBaseProvider>
  );
};

export default Home;
