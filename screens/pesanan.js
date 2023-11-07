import React from 'react';
import { Image, FlatList } from 'react-native';
import { NativeBaseProvider, Box, Text } from 'native-base';

const Pesanan = () => {
  const data = [
    {
      id: 1,
      imageSource: require('../assets/images/danabaru.png'),
      altText: 'Payment Method 1',
      title: 'Example Product',
      quantity: '2',
      price: '$10.00',
      isFinished: false,
    },
    {
      id: 2,
      imageSource: require('../assets/images/danabaru.png'),
      altText: 'Payment Method 1',
      title: 'Example Product',
      quantity: '2',
      price: '$10.00',
      isFinished: true,
    },
    {
      id: 3,
      imageSource: require('../assets/images/wortel2.jpg'),
      altText: 'Another Image',
      title: 'Another Product Name',
      quantity: '3',
      price: '$15.00',
      isFinished: false,
    },
    {
      id: 4,
      imageSource: require('../assets/images/wortel2.jpg'),
      altText: 'Another Image',
      title: 'Another Product Name',
      quantity: '3',
      price: '$15.00',
      isFinished: true,
    },
    {
      id: 5,
      imageSource: require('../assets/images/wortel2.jpg'),
      altText: 'Another Image',
      title: 'Another Product Name',
      quantity: '3',
      price: '$15.00',
      isFinished: false,
    },
    {
      id: 6,
      imageSource: require('../assets/images/wortel2.jpg'),
      altText: 'Another Image',
      title: 'Another Product Name',
      quantity: '3',
      price: '$15.00',
      isFinished: true,
    },
    {
      id: 7,
      imageSource: require('../assets/images/wortel2.jpg'),
      altText: 'Another Image',
      title: 'Another Product Name',
      quantity: '3',
      price: '$15.00',
      isFinished: false,
    },
    {
      id: 8,
      imageSource: require('../assets/images/wortel2.jpg'),
      altText: 'Another Image',
      title: 'Another Product Name',
      quantity: '3',
      price: '$15.00',
      isFinished: true,
    },
    {
      id: 9,
      imageSource: require('../assets/images/wortel2.jpg'),
      altText: 'Another Image',
      title: 'Another Product Name',
      quantity: '3',
      price: '$15.00',
      isFinished: false,
    },
    {
      id: 10,
      imageSource: require('../assets/images/wortel2.jpg'),
      altText: 'Another Image',
      title: 'Another Product Name',
      quantity: '3',
      price: '$15.00',
      isFinished: true,
    },
    {
      id: 11,
      imageSource: require('../assets/images/wortel2.jpg'),
      altText: 'Another Image',
      title: 'Another Product Name',
      quantity: '3',
      price: '$15.00',
      isFinished: false,
    },
    {
      id: 12,
      imageSource: require('../assets/images/wortel2.jpg'),
      altText: 'Another Image',
      title: 'Another Product Name',
      quantity: '3',
      price: '$15.00',
      isFinished: true,
    },
    {
      id: 13,
      imageSource: require('../assets/images/wortel2.jpg'),
      altText: 'Another Image',
      title: 'Another Product Name',
      quantity: '3',
      price: '$15.00',
      isFinished: false,
    },
    {
      id: 14,
      imageSource: require('../assets/images/wortel2.jpg'),
      altText: 'Another Image',
      title: 'Another Product Name',
      quantity: '3',
      price: '$15.00',
      isFinished: true,
    },
    {
      id: 15,
      imageSource: require('../assets/images/wortel2.jpg'),
      altText: 'Another Image',
      title: 'Another Product Name',
      quantity: '3',
      price: '$15.00',
      isFinished: false,
    },
    // Add more data as needed
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
      background={item.isFinished ? 'green.200' : 'red.200'}
      rounded={20}
      shadow={3} // Use shadow={2} for a subtle shadow
    >
      <Box
        position="absolute"
        top={2}
        start={2}
        zIndex={1}
        backgroundColor={item.isFinished ? 'green.500' : 'red.500'}
        padding={1}
        borderRadius={3}
        rounded={10}
      >
        <Text color="white" fontSize="xs">
          {item.isFinished ? 'Selesai' : 'Belum selesai'}
        </Text>
      </Box>
  
      <Image
        source={item.imageSource}
        alt={item.altText}
      />
  
      <Box ml={2} flex={1} flexDirection="column" justifyContent="space-between">
        <Text fontWeight="bold">{item.title}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <Text>Price: {item.price}</Text>
      </Box>
    </Box>
  );
  
  return (
    <NativeBaseProvider>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </NativeBaseProvider>
  );
};

export default Pesanan;
