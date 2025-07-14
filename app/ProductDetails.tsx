import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ImageSourcePropType } from 'react-native';

// Define product type
interface Product {
  id: number;
  name: string;
  price: number;
  image: ImageSourcePropType;
  description?: string;
}

// Define route type
type RootStackParamList = {
  ProductDetails: { product: Product };
};

type ProductDetailsRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

const ProductDetailsScreen: React.FC = () => {
  const route = useRoute<ProductDetailsRouteProp>();
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={product.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>
        {product.description || 'No description available.'}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Add to Cart" onPress={() => alert('Added to cart!')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#888',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 24,
  },
  buttonContainer: {
    alignSelf: 'flex-start',
  },
});

export default ProductDetailsScreen;