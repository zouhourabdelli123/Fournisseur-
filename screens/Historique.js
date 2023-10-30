import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DataTable, Searchbar, IconButton } from 'react-native-paper';
import { Button as GaButton, theme } from "galio-framework";
import { Button, Header, Icon, Input, Select, Switch } from "../components";

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'farid', email: 'aaa@ode.com', etat: 'En cours' },
    { id: 2, name: 'amir', email: 'samir@test.com', etat: 'Refusé' },
    { id: 3, name: 'mai', email: 'maram@kindacode.com', etat: 'Terminé' },
  ]);

  const [filteredData, setFilteredData] = useState(data);
  const [page, setPage] = useState(1);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleNextPage = () => {
  };

  const handlePrevPage = () => {
  };

  const renderIconByEtat = (etat) => {
    switch (etat) {
      case 'En cours':
        return (
          <Button small center color="success" >
Terminée
              </Button>
        );
      case 'Refusé':
        return (
          <Button small center color="success">
          Terminée
        </Button>
        
        );
      case 'Terminé':
        return (
          <Button small center color="warning" >
          Annulée
        </Button>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Rechercher"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <DataTable style={styles.dataTable}>
      <DataTable.Header>
  <DataTable.Title style={[styles.headerCell, { fontWeight: 'bold', textAlign: 'center' }]}>Nom</DataTable.Title>
  <DataTable.Title style={[styles.headerCell, { fontWeight: 'bold', textAlign: 'center' }]}>E-mail</DataTable.Title>
  <DataTable.Title style={[styles.headerCell, styles.numericCell, { fontWeight: 'bold', textAlign: 'center',color:'black' }]}>     Etat</DataTable.Title>
</DataTable.Header>

        {filteredData.map((item) => (
          <DataTable.Row key={item.id}>
            <DataTable.Cell style={styles.cell}>{item.name}</DataTable.Cell>
            <DataTable.Cell style={styles.cell}>{item.email}</DataTable.Cell>
            <DataTable.Cell style={[styles.cell, styles.numericCell]}>
              {renderIconByEtat(item.etat)}
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>

      <View style={styles.paginationContainer}>
        <IconButton icon="chevron-left" onPress={handlePrevPage} />
        <Text style={styles.pageNumber}>Page {page}</Text>
        <IconButton icon="chevron-right" onPress={handleNextPage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    backgroundColor: 'rgb(229,228,226)',
    marginLeft: '1%',
    width: '100%',
    alignSelf: 'flex-start',
  },
  dataTable: {
    marginTop: '5%',
    backgroundColor: 'rgb(248,248,255)',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },

  cell: {
    paddingVertical: 12,
  },
  numericCell: {
    textAlign: 'right',
    fontWeight:'bold'
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
  },
  pageNumber: {
    marginHorizontal: 16,
    fontWeight: 'bold',
  },

});
