import React from 'react';
import { StyleSheet, View, Text, Image, Button,TouchableOpacity } from 'react-native';

export default class ProductDetailsCard extends React.Component {
  render() {
    const product = {
      name: 'Chocolat',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget metus sed libero ultricies vehicula.',
      imageUrl: 'https://offers.kd2.org/pics/24/ec/24ec2537434c9488a98c75d42f0e3c65a3b014d4.jpg',
      price: '20.50 dt',
      rating: 4.5,
      panier: 'Ajouter au panier',
    };

    return (
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image source={{ uri: product.imageUrl }} style={styles.productImage} />

          <Text style={styles.productName}>{product.name}</Text>

          <Text style={styles.productDescription}>{product.description}</Text>

          <Text style={styles.productPrice}>{product.price}</Text>

          <Text style={styles.productRating}>Rating: {product.rating}</Text>
          <TouchableOpacity
            onPress={() => {
             
            }}
            style={styles.smallButton}
          >
            <Text style={styles.buttonText}>{product.panier}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 40,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: 300,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1F47D5',
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  productRating: {
    fontSize: 16,
    color: 'orange',
  },
  productpanier: {
marginLeft:100,
fontWeight:700,
color:'bleu',
color: '#1F47D5',
  },
  smallButton: {
    marginLeft:15,
    marginTop: 35,
    width:200,
    height: 40, 
    borderRadius: 5, 
    backgroundColor: '#1F47D5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
