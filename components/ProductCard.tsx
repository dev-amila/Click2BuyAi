import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import { ImageSourcePropType } from 'react-native';
interface Product {
  id: number;
  name: string;
  price: number;
  image: ImageSourcePropType;
}

interface ProductCardProps {
  product: Product;
  onPress?: (event: GestureResponderEvent) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={product.image} style={styles.image} resizeMode="cover" />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    marginBottom: 16,
    marginHorizontal: 8,
    width: 140,
  },
  image: {
    height: 120,
    width: '100%',
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
});

export default ProductCard;

