import React from 'react';
import { StyleSheet, StatusBar, Dimensions, Alert, Image, View, TouchableOpacity } from 'react-native';
import { Block, Button, Input, theme, Text } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import materialTheme from '../constants/Theme';

export default class Register extends React.Component {
  state = {
    email: '',
    password: '',
    newPassword: '',
   
  };

  handleRegister = () => {
    const { email, password, newPassword } = this.state;
  
    if (!email || !password || !newPassword) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs obligatoires.');
      return;
    }
  
    Alert.alert('Succès', 'Vous vous êtes inscrit avec succès.', [
      {
        text: 'OK',
        onPress: () => {
          setTimeout(() => {
            this.props.navigation.navigate('Onboarding'); 
          }, 3000); 
        },
      },
    ]);
  };
  
  render() {
    return (
      <Block flex middle style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block style={styles.registerForm}>
          <Block>
            <Image
              source={require('../assets/imgs/eshop-logo.png')}
              style={styles.image}
            />
          </Block>
          <Block center>
            <Input
              placeholder="E-mail"
              placeholderTextColor="rgb(83,104,120)"
              color="rgb(0,0,0)"
              labelColor="240,248,255"
              onChangeText={(text) => this.setState({ email: text })}
            />
            <Input
              placeholder="Nouveau mot de passe"
              placeholderTextColor="rgb(83,104,120)"
              color="rgb(0,0,0)"
              password
              viewPass
              onChangeText={(text) => this.setState({ password: text })}
            />
            <Input
              placeholder="Confirmer mot de passe"
              placeholderTextColor="rgb(83,104,120)"
              color="rgb(0,0,0)"
              password
              viewPass
              onChangeText={(text) => this.setState({ newPassword: text })}
            />
          

            <Button
              shadowless
              style={styles.button}
              color={materialTheme.COLORS.BUTTON_COLOR}
              onPress={this.handleRegister}
            >
              Register
            </Button>
          </Block>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 30,
              marginTop: 20,
            }}
          >
            <Text>
            Vous avez déjà un compte ?{" "}
            </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Onboarding")}>
              <Text style={{ fontWeight: "700", color: "rgb(30,144,255)" }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(244,240,236)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },
  registerForm: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 4,
    width: '80%',
    backgroundColor: ' rgb(211,211,211)',
    borderRadius: theme.SIZES.BASE,
  },
  input: {
    width: '100%',
    height: theme.SIZES.BASE * 3,
    marginBottom: theme.SIZES.BASE,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: theme.SIZES.BASE / 2,
    color: 'white',
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'rgb(0,0,205)',
    width: 100,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },
});
