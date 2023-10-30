import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert, TextInput } from 'react-native';
import { Card, Button as GaButton } from 'react-native-paper';

export default function App() {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = () => {
    if (productName.trim() === '' || quantity.trim() === '') {
      Alert.alert('Error', 'Please enter both product and quantity');
      return;
    }

    const newItem = {
      product: productName,
      quantity: quantity,
    };

    setBasket([...basket, newItem]);
    setProductName('');
    setQuantity('');
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
        <TextInput
          style={styles.input}
          placeholder="Nom"
         
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
         
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Sujet"
         
          onChangeText={(text) => setSubject(text)}
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Message"
          multiline={true}
          numberOfLines={4}
         
          onChangeText={(text) => setMessage(text)}
        />
          <View style={styles.buttonContainer}>
            <GaButton mode="contained" style={styles.button} onPress={handleAddToBasket}>
              Valider
            </GaButton>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        padding: 20,
      },
  input: {
     borderWidth: 1,
      borderColor: 'blue',
       padding: 10, margin: 10,
       
        borderRadius: 10, 
  },
  buttonContainer: {
    alignItems: 'center', 
    marginTop: 50,
  },
  button: {
    width: 180,
    backgroundColor: 'blue',
  },
});
