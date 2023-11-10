import React from 'react';
import { Image, FlatList, SafeAreaView } from 'react-native';
import { NativeBaseProvider, Box, Text } from 'native-base';

const Pesanan = () => {
  const data = [
    {
      id: 1,
      imageSource: require('../assets/images/brokoli.jpg'),
      altText: 'Payment Method 1',
      title: 'Brokoli',
      quantity: '2',
      price: 'Rp 20,000',
      isFinished: true,
    },
    {
      id: 2,
      imageSource: require('../assets/images/sawi.jpg'),
      altText: 'Payment Method 1',
      title: 'Sawi',
      quantity: '2',
      price: 'Rp 15,000',
      isFinished: true,
    },
    {
      id: 3,
      imageSource: require('../assets/images/bawang.jpg'),
      altText: 'Another Image',
      title: 'Bawang',
      quantity: '3',
      price: 'Rp 10,000',
      isFinished: false,
    },
    {
      id: 4,
      imageSource: require('../assets/images/bayam.jpg'),
      altText: 'Another Image',
      title: 'Bayam',
      quantity: '3',
      price: 'Rp 12,000',
      isFinished: true,
    },
    {
      id: 5,
      imageSource: require('../assets/images/terong.jpg'),
      altText: 'Another Image',
      title: 'Terong',
      quantity: '3',
      price: 'Rp 18,000',
      isFinished: false,
    },
    {
      id: 6,
      imageSource: require('../assets/images/kubis.jpg'),
      altText: 'Another Image',
      title: 'Kubis',
      quantity: '3',
      price: 'Rp 14,000',
      isFinished: true,
    },
    {
      id: 7,
      imageSource: require('../assets/images/tomat.jpg'),
      altText: 'Another Image',
      title: 'Tomat',
      quantity: '3',
      price: 'Rp 25,000',
      isFinished: false,
    },
    {
      id: 8,
      imageSource: require('../assets/images/wortel2.jpg'),
      altText: 'Another Image',
      title: 'Wortel',
      quantity: '3',
      price: 'Rp 10,000',
      isFinished: false,
    },
  ];
  


  
  const renderItem = ({ item }) => (
    <SafeAreaView>
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
      shadow={3} 
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
  style={{ width: 123, height: 123 }}
/>
  
      <Box ml={2} flex={1} flexDirection="column" justifyContent="space-between">
        <Text fontWeight="bold">{item.title}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <Text>Price: {item.price}</Text>
      </Box>
    </Box>
    </SafeAreaView>
  );
  
  return (

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

  );
};


export default Pesanan;
