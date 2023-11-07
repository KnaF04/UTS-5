// pesanan.js
import React from 'react';
import { View, Text, Image, Container, Content } from 'native-base';

const Pesanan = () => {
  // Sample data for orders
  const orders = [
    {
      id: 1,
      productImage: 'https://example.com/product1.jpg',
      productName: 'Product 1',
      price: '$10.00',
      quantity: 3,
      isFinished: true, // Order is finished
    },
    {
      id: 2,
      productImage: 'https://example.com/product2.jpg',
      productName: 'Product 2',
      price: '$15.00',
      quantity: 2,
      isFinished: false, // Order is not finished yet
    },
  ];

  return (
    <Container>
      <Content>
        {orders.map((order) => (
          <View
            key={order.id}
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
              padding: 10,
            }}
          >
            {/* Left side: Order Condition */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>{order.isFinished ? 'Finish' : 'Not Finish Yet'}</Text>
            </View>

            {/* Right side: Product Information */}
            <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center' }}>
              {/* Product Image */}
              <Image
                source={{ uri: order.productImage }}
                style={{ width: 80, height: 80, marginRight: 10 }}
              />

              {/* Product Details */}
              <View>
                <Text>{order.productName}</Text>
                <Text>{order.price}</Text>
                <Text>Quantity: {order.quantity}</Text>
              </View>
            </View>
          </View>
        ))}
      </Content>
    </Container>
  );
};

export default Pesanan;
