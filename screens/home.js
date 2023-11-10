import React from 'react';
import { NativeBaseProvider, Box, Heading, Text, Button, Center, HStack, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

const Home = () => {
    const navigation = useNavigation();
          return (
    <SafeAreaView>
        <Center>
        <VStack  justifyContent='center' alignItems="center"   flexDirection="column" space={10} mt={20}>
        <Heading>
        Home Screen
        </Heading>
        </VStack>
        </Center>


    </SafeAreaView>
  );
};

export default Home;
