import React from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import ProductCard from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';

interface Product {
    id: number;
    name: string;
    price: number;
    image: any;
}

const products: Product[] = [
    { id: 1, name: 'Nike Air Max', price: 129.99, image: require('../assets/images/Modern_Furniture.jpg')},
    { id: 2, name: 'Adidas Runner', price: 99.99, image: require('../assets/images/Modern_Furniture.jpg')},
    { id: 3, name: 'Puma Sport X', price: 89.99, image: require('../assets/images/Modern_Furniture.jpg') },
    { id: 4, name: 'Reebok Classic', price: 74.99, image: require('../assets/images/Modern_Furniture.jpg')},
    { id: 5, name: 'New Balance 574', price: 109.99, image: require('../assets/images/Modern_Furniture.jpg') },
    { id: 6, name: 'ASICS Gel-Lyte', price: 99.99, image: require('../assets/images/Modern_Furniture.jpg') },
    { id: 7, name: 'Under Armour Charged', price: 84.99, image: require('../assets/images/Modern_Furniture.jpg') },
    { id: 8, name: 'Converse All Star', price: 69.99, image: require('../assets/images/Modern_Furniture.jpg')},
    { id: 9, name: 'Vans Old Skool', price: 64.99, image: require('../assets/images/Modern_Furniture.jpg') },
    { id: 10, name: 'Fila Disruptor', price: 79.99, image: require('../assets/images/Modern_Furniture.jpg') },
    { id: 11, name: 'Jordan Air 1', price: 139.99, image: require('../assets/images/Modern_Furniture.jpg') },
    { id: 12, name: 'Sketchers Go Walk', price: 59.99, image: require('../assets/images/Modern_Furniture.jpg') },
  ];
  

// export default function AboutUs() {
const ProductListScreen: React.FC = () => {
    return (
        <View style={{ flex: 1, padding: 16 }}>
            <FlatList
                style={styles.card_layout}
                data={products}
                renderItem={({ item }) => (
                    <ProductCard
                        product={item}
                        onPress={() => Alert.alert('Product Clicked', item.name)}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={{ paddingBottom: 16 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card_layout: {
        // display: 'grid',
    },
});

export default ProductListScreen;