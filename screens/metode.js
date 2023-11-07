import React, { useState } from 'react';
import { Image } from 'react-native';
import { NativeBaseProvider, Box, Text, Radio } from 'native-base';

const Metode = () => {
  const [selectedMethod, setSelectedMethod] = useState('option1');

  return (
    <NativeBaseProvider>
      <Radio.Group name="paymentMethod" value={selectedMethod} onChange={setSelectedMethod}>
        <Box
          flexDirection="row" // Set flexDirection to "row"
          alignItems="center"
          p={2}
          borderBottomWidth={1}
          borderWidth={2}
          borderColor="gray.200"
          marginTop={3}
          marginLeft={3}
          marginRight={3}
          background={'white'}
          rounded={10}
        >
          {/* Left side (Picture) */}
          <Image
            source={require('../assets/images/danabaru.png')}
            alt="Payment Method 1"
          />
          {/* Right side (Title-like Text) with Radio button */}
          <Box ml={2} flex={1} flexDirection="row" justifyContent="space-between" alignItems="center" marginRight={2}>
            <Text fontWeight="bold">Dana</Text>
            <Radio value="option2" />
          </Box>
        </Box>

        <Box
          flexDirection="row" // Set flexDirection to "row"
          alignItems="center"
          p={2}
          borderBottomWidth={1}
          borderWidth={2}
          borderColor="gray.200"
          marginTop={1}
          marginLeft={3}
          marginRight={3}
          borderRadius={2}
          rounded={10}
          background={'white'}
        >
          {/* Left side (Picture) */}
          <Image
            source={require('../assets/images/gopaybaru.png')}
            alt="Payment Method 1"          />
          {/* Right side (Title-like Text) with Radio button */}
          <Box ml={2} flex={1} flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text fontWeight="bold">Gopay</Text>
            <Radio value="option1" />
          </Box>
        </Box>

        <Box
          flexDirection="row" // Set flexDirection to "row"
          alignItems="center"
          p={2}
          borderBottomWidth={1}
          borderWidth={2}
          borderColor="gray.200"
          marginTop={1}
          marginLeft={3}
          marginRight={3}
          borderRadius={2}
          rounded={10}
          background={'white'}
        >
          {/* Left side (Picture) */}
          <Image
            source={require('../assets/images/shopeepay.png')}
            alt="Payment Method 1"          />
          {/* Right side (Title-like Text) with Radio button */}
          <Box ml={2} flex={1} flexDirection="row" justifyContent="space-between" alignItems="center" marginRight={2}>
            <Text fontWeight="bold">Shopeepay</Text>
            <Radio value="option3" />
          </Box>
        </Box>

        {/* Add similar code for other payment methods with their respective Radio buttons */}
      </Radio.Group>
    </NativeBaseProvider>
  );
};

export default Metode;
