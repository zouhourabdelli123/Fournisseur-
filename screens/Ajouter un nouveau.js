import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Card, Text, Header } from 'react-native-elements';

export default function AddProductScreen({ navigation }) {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [Description, setDescription] = useState('');
  const [Catégorie, setCatégorie] = useState('');

  const handleAddProduct = () => {
    if (productName && productPrice && Description &&Catégorie) {
      alert('Ajouté avec succès');
     
      setProductName('');
      setProductPrice('');
      setCatégorie('');
      setDescription('');
    } else {
      alert('Veuillez remplir tous les champs du formulaire.');
    }
  };

  return (
    <View style={styles.container}>
      
      <Card containerStyle={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Nom Local"
          onChangeText={(text) => setProductName(text)}
          value={productName}
        />
        <TextInput
          style={styles.input}
          placeholder="Adresse Local"
          onChangeText={(text) => setProductPrice(text)}
          value={productPrice}
          keyboardType="numeric"
        />
       
         <TextInput
          style={styles.input}
          placeholder="Description"
          onChangeText={(text) => setDescription(text)}
          value={Description}
        
        />
        <Button
          title="Ajouter le Produit"
          onPress={handleAddProduct}
          color="#1E4BE7"
          borderRadius={80}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    borderRadius: 10,
    padding: 20,
    margin: 20,
    backgroundColor: 'white',
    elevation: 13,
  },
  input: {
    height: 40,
    borderBottomWidth: 0.65,
    borderColor: 'gray',
    marginBottom: 20,
    paddingLeft: 10,
  },
});
