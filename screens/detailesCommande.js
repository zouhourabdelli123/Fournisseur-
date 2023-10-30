import React, { useState } from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function App() {
  const [quantities, setQuantities] = useState([
    { name: 'MHarza', imageUri: 'https://th.bing.com/th/id/R.d1ce6470ed63f0d9b33227fb2ad6ef07?rik=QXilClzii94ttw&riu=http%3a%2f%2fwww.lsa-conso.fr%2fmediatheque%2f0%2f8%2f4%2f000082480_74.jpg&ehk=1hPaC18gAnfPGrGPOfyZo1UrkPZD58fWSIpitu2o4xc%3d&risl=&pid=ImgRaw&r=0', quantity: 33 },
    { name: 'ons', imageUri: 'https://www.sdprungis.fr/sites/sdpr/files/patisserieimg.png', quantity: 105 },
  ]);

  const handleQuantityChange = (index, newQuantity) => {
    const newQuantities = [...quantities];
    newQuantities[index].quantity = newQuantity;
    setQuantities(newQuantities);
  };

  return (
    <View style={styles.container}>
      <DataTable style={styles.dataTable}>
        <DataTable.Header>
          <DataTable.Title>Image</DataTable.Title>
          <DataTable.Title>Local</DataTable.Title>
          <DataTable.Title numeric>Quantité</DataTable.Title>
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
            <DataTable.Cell numeric>{data.quantity}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
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
  imageCell: {
    flex: 2, 
    marginTop:-25,
    alignItems: 'center', 
  },
});
