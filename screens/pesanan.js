import React from 'react';
import { NativeBaseProvider, Box, Heading, Text } from 'native-base';

const Pesanan = () => {
  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        p={4}
        alignItems="center"
        justifyContent="center"
        bg="primary.300"
      >
        <Heading size="lg" mb={2}>
          Pesanan Screen
        </Heading>
        <Text fontSize="xl" mb={4}>
          This is the Pesanan screen.
        </Text>
      </Box>
    </NativeBaseProvider>
  );
};

export default Pesanan;
