import React from 'react';
import { NativeBaseProvider, Box, Text, Image } from 'native-base';

const Metode = () => {
  return (
    <NativeBaseProvider>
      <Box
        flexDirection="row"
        alignItems="center"
        p={2}
        borderBottomWidth={1}
        borderWidth={2}
        borderColor="gray.200"
        backgroundColor={'black'}
      >
        {/* Left side (Picture) */}
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          alt="Payment Method 1"
          size={98}
        />
        {/* Right side (Title-like Text) */}
        <Box ml={2} flex={1}>
          <Text fontWeight="bold">Payment Method 1</Text>
        </Box>
      </Box>

      <Box
        flexDirection="row"
        alignItems="center"
        p={2}
        borderBottomWidth={1}
        borderColor="gray.200"
        w={96} // Set a specific width for the container
      >
        {/* Left side (Picture) */}
        <Image
          source={{ uri: 'your-image-url-2' }}
          alt="Payment Method 2"
          size={12}
        />
        {/* Right side (Title-like Text) */}
        <Box ml={2} flex={1}>
          <Text fontWeight="bold">Payment Method 2</Text>
        </Box>
      </Box>

      <Box
        flexDirection="row"
        alignItems="center"
        p={2}
        borderBottomWidth={1}
        borderColor="gray.200"
        w={96} // Set a specific width for the container
      >
        {/* Left side (Picture) */}
        <Image
          source={{ uri: 'your-image-url-3' }}
          alt="Payment Method 3"
          size={12}
        />
        {/* Right side (Title-like Text) */}
        <Box ml={2} flex={1}>
          <Text fontWeight="bold">Payment Method 3</Text>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default Metode;
