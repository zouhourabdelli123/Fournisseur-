import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Button } from '../components';
import { Images, argonTheme } from '../constants';
import { HeaderHeight } from '../constants/utils';
import { DataTable } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {
  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '25%' }}
            >
              <Block flex style={styles.profileCard}>
                <Block middle style={styles.avatarContainer}>
                  <Image
                    source={{ uri: Images.ProfilePicture }}
                    style={styles.avatar}
                  />
                </Block>
                <Block style={styles.info}>
                  <Block
                    middle
                    row
                    space="evenly"
                    style={{ marginTop: 20, paddingBottom: 24 }}
                  >
                    <Button
                      small
                      style={{ backgroundColor: argonTheme.COLORS.INFO }}
                    >
                      Connecter
                    </Button>
                    <Button
                      small
                      style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
                    >
                      Message
                    </Button>
                  </Block>
                  <Block row space="between">
                    <Block middle>
                      <Text
                        bold
                        size={18}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                        2K
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>
                        commandes
                      </Text>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={18}
                        style={{ marginBottom: 4 }}
                      >
                        10
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>
                        Photos
                      </Text>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={18}
                        style={{ marginBottom: 4 }}
                      >
                        89
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>
                        observations
                      </Text>
                    </Block>
                  </Block>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={28} color="#32325D">
                      Ahmed ben salah
                    </Text>
                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                      Tunisie, Sfax
                    </Text>
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Block middle>
                   
                  </Block>
                  <Block row space="between" style={{ marginTop: 20 }}>
                    <Text bold size={16} color="#32325D">
                     Local
                    </Text>
                  </Block>
                  <DataTable>
                    <DataTable.Header>
                      <DataTable.Title>Nom</DataTable.Title>
                      <DataTable.Title>Adresse</DataTable.Title>
                      <DataTable.Title>Action</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                      <DataTable.Cell>maram</DataTable.Cell>
                      <DataTable.Cell>123 Rue de la République</DataTable.Cell>
                      <DataTable.Cell style={styles.btn}>
                        <Icon
                          name="edit"
                          size={20}
                          color={argonTheme.COLORS.INFO}
                          style={styles.icon}
                        />
                        <Icon
                          name="trash"
                          size={20}
                          color={argonTheme.COLORS.ERROR}
                          style={styles.icon}
                        />
                      </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell>bilel</DataTable.Cell>
                      <DataTable.Cell>456 Avenue habib bourgiba</DataTable.Cell>
                      <DataTable.Cell style={styles.btn} >
                        <Icon
                          name="edit"
                          size={20}
                          color={argonTheme.COLORS.INFO}
                          style={styles.icon}
                        />
                        <Icon
                          name="trash"
                          size={20}
                          color={argonTheme.COLORS.ERROR}
                          style={styles.icon}
                        />
                      </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell>mohamed</DataTable.Cell>
                      <DataTable.Cell>789 cité ons</DataTable.Cell>
                      <DataTable.Cell style={styles.btn}>
                        <Icon
                          name="edit"
                          size={20}
                          color={argonTheme.COLORS.INFO}
                          style={styles.icon}
                        />
                        <Icon
                          name="trash"
                          size={20}
                          color={argonTheme.COLORS.ERROR}
                          style={styles.icon}
                        />
                      </DataTable.Cell>
                    </DataTable.Row>
                  </DataTable>
                </Block>
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    flex: 1,
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
  },
  profileBackground: {
    width: width,
    height: height / 2,
  },
  profileCard: {
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  info: {
    paddingHorizontal: 40,
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -80,
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0,
  },
  nameInfo: {
    marginTop: 35,
  },
  divider: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure,
  },
  icon: {
    marginRight: 10,
  },

  btn:{
marginLeft:20,
  }
});

export default Profile;
