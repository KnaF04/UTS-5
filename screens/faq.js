import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

const FAQScreen = () => {
  const [collapsed, setCollapsed] = useState(Array(3).fill(true));

  const toggleCollapse = (index) => {
    const newCollapsed = [...collapsed];
    newCollapsed[index] = !newCollapsed[index];
    setCollapsed(newCollapsed);
  };

  return (
    <View style={{ padding: 16 }}>
      <TouchableOpacity onPress={() => toggleCollapse(0)}>
        <View
          style={{
            backgroundColor: 'lightgray',
            padding: 16,
            borderRadius: 8,
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Apa itu Brokoli?</Text>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed[0]}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
            borderRadius: 8,
            marginBottom: 16,
            borderColor: 'lightgray',
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 16 }}>
            Brokoli adalah sayuran berwarna hijau dengan batang yang keras dan kepala bunga kecil yang padat. Sayuran ini dikenal karena nilai gizinya yang tinggi dan sering digunakan dalam berbagai hidangan.
          </Text>
        </View>
      </Collapsible>

      <TouchableOpacity onPress={() => toggleCollapse(1)}>
        <View
          style={{
            backgroundColor: 'lightgray',
            padding: 16,
            borderRadius: 8,
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Bagaimana cara memasak Sawi?</Text>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed[1]}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
            borderRadius: 8,
            marginBottom: 16,
            borderColor: 'lightgray',
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 16 }}>
            Sawi dapat digoreng dengan bawang putih dan saus tiram untuk hidangan yang lezat. Sawi juga bisa ditambahkan ke sup dan semur untuk rasa dan gizi tambahan.
          </Text>
        </View>
      </Collapsible>

      <TouchableOpacity onPress={() => toggleCollapse(2)}>
        <View
          style={{
            backgroundColor: 'lightgray',
            padding: 16,
            borderRadius: 8,
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Mengapa Bawang populer dalam masakan?</Text>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed[2]}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
            borderRadius: 8,
            marginBottom: 16,
            borderColor: 'lightgray',
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 16 }}>
            Bawang, juga dikenal sebagai bawang merah, populer dalam masakan karena rasanya yang kuat dan aromanya. Bawang ini memberikan kedalaman dan kekayaan rasa pada berbagai hidangan dan merupakan bahan dasar dalam banyak masakan.
          </Text>
        </View>
      </Collapsible>
    </View>
  );
};

export default FAQScreen;
