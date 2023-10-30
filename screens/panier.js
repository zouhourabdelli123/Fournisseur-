import React, { useState } from 'react';
import { View, StyleSheet, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { DataTable } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [quantities, setQuantities] = useState([
    { name: 'John', imageUri: 'https://th.bing.com/th/id/R.d1ce6470ed63f0d9b33227fb2ad6ef07?rik=QXilClzii94ttw&riu=http%3a%2f%2fwww.lsa-conso.fr%2fmediatheque%2f0%2f8%2f4%2f000082480_74.jpg&ehk=1hPaC18gAnfPGrGPOfyZo1UrkPZD58fWSIpitu2o4xc%3d&risl=&pid=ImgRaw&r=0', quantity: 33 },
    { name: 'Bob', imageUri: 'https://th.bing.com/th/id/R.67f33aaf7c2f5e1205441bb0f2d6d246?rik=qptHqcMSxPrajQ&riu=http%3a%2f%2fcontent.shopmium.com%2fpublic%2foffers%2fteaser%2fcropped_343-1386334944.jpg%3f1386334944&ehk=Bv34vO969E2ZmT5AHVJO7t7wEbTsaZW2hr7Owf4WEVw%3d&risl=&pid=ImgRaw&r=0', quantity: 105 },
  ]);

  const handleQuantityChange = (index, newQuantity) => {
    const newQuantities = [...quantities];
    newQuantities[index].quantity = newQuantity;
    setQuantities(newQuantities);
  };

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index].quantity += 1;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index].quantity > 0) {
      newQuantities[index].quantity -= 1;
      setQuantities(newQuantities);
    }
  };

  return (
    <View style={styles.container}>
      <DataTable style={styles.dataTable}>
        <DataTable.Header>
          <DataTable.Title>Image</DataTable.Title>
          <DataTable.Title>Nom</DataTable.Title>
          <DataTable.Title numeric>Quantité</DataTable.Title>
          <DataTable.Title numeric>Action</DataTable.Title>
        </DataTable.Header>

        {quantities.map((data, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell style={styles.imageCell}>
              <Image
                source={{
                  uri: data.imageUri,
                }}
                style={{ width: 50, height: 50 }}
              />
              
            </DataTable.Cell>
            <DataTable.Cell>{data.name}</DataTable.Cell>
            <DataTable.Cell numeric>
              <View style={styles.inputContainer}>
                <TouchableOpacity onPress={() => handleDecrement(index)}>
                  <Icon name="minus" size={12} color="blue" />
                </TouchableOpacity>
                <TextInput
                  style={styles.input}
                  value={data.quantity.toString()}
                  onChangeText={(text) => handleQuantityChange(index, text)}
                  keyboardType="numeric"
                />
                <TouchableOpacity onPress={() => handleIncrement(index)}>
                  <Icon name="plus" size={12} color="blue" />
                </TouchableOpacity>
              </View>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Icon name="trash" size={24} color="red" />
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>

      <View style={styles.buttonContainer}>
        <Button title="Valider" onPress={() => alert('La commande est validée')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingHorizontal: 30,
  },
  dataTable: {
    marginTop: '10%',
    backgroundColor: 'rgb(248, 248, 255)',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 6,
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'rgb(229, 228, 226)',
    borderRadius: 12,
    padding: 5,
  },
  input: {
    flex: 1, 
    width: 40,
    height: 30,
    textAlign: 'center',
  },
  imageCell: {
    marginTop: -25,
  },
  buttonContainer: {

    marginTop: 20,
    alignItems: 'center',
  },
});
