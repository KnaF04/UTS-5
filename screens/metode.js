import React, { useState } from 'react';
import { Image, FlatList } from 'react-native';
import { NativeBaseProvider, Box, Text, Radio } from 'native-base';

const Metode = () => {
  const [selectedMethod, setSelectedMethod] = useState('option1');

  const paymentMethods = [
    {
      id: 'option1',
      imageSource: require('../assets/images/gopaybaru.png'),
      altText: 'Gopay',
      title: 'Gopay',
    },
    {
      id: 'option2',
      imageSource: require('../assets/images/danabaru.png'),
      altText: 'Dana',
      title: 'Dana',
    },
    {
      id: 'option3',
      imageSource: require('../assets/images/shopeepay.png'),
      altText: 'Shopeepay',
      title: 'Shopeepay',
    },
    {
      id: 'option4',
      imageSource: require('../assets/images/gopay.jpg'),
      altText: 'Gopay',
      title: 'Gopay',
    },
    {
      id: 'option5',
      imageSource: require('../assets/images/danabaru.png'),
      altText: 'Dana',
      title: 'Dana',
    },
    {
      id: 'option6',
      imageSource: require('../assets/images/shopeepay.png'),
      altText: 'Shopeepay',
      title: 'Shopeepay',
    },
  ];

  const renderItem = ({ item }) => (
    <Box
      flexDirection="row"
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
      shadow={3}
    >
      <Image source={item.imageSource} alt={item.altText} style={{ width: 123, height: 123, resizeMode: 'contain' }} />
      <Box ml={2} flex={1} flexDirection="row" justifyContent="space-between" alignItems="center" marginRight={2}>
        <Text fontWeight="bold">{item.title}</Text>
        <Radio.Group name="paymentMethod" value={selectedMethod} onChange={setSelectedMethod}>
          <Radio value={item.id} size="lg" colorScheme="teal" borderWidth={2} />
        </Radio.Group>
      </Box>
    </Box>
  );

  return (
    <NativeBaseProvider>
      <FlatList
        data={paymentMethods}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </NativeBaseProvider>
  );
};

export default Metode;
