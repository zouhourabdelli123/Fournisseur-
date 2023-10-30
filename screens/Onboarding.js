import React from 'react';
import { StyleSheet, StatusBar, Dimensions, Alert,Image,View,TouchableOpacity } from 'react-native';
import { Block, Button, Input, theme ,Text} from 'galio-framework';

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';

export default class Login extends React.Component {
  handleLogin = () => {

    Alert.alert('Success', 'Vous vous êtes connecté avec succès', [
      {
        text: 'OK',
        onPress: () => {
        
          this.props.navigation.navigate('App');
        },
      },
    ]);
  };

  render() {
    return (
      <Block flex middle style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block style={styles.loginForm}>
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
            />
<Input
  placeholder="Mot de passe"
  placeholderTextColor="rgb(83,104,120)"
  color="rgb(0,0,0)"
  password
  viewPass
>
  
</Input>
<TouchableOpacity onPress={() => this.props.navigation.navigate("MotScreen")}>
  <Text style={{ color: "rgb(30,144,255)", fontWeight: "700", marginLeft: -100 ,fontSize:13 }}>
    Mot de passe oublié ?
  </Text>
</TouchableOpacity>



            <Button
              shadowless
              style={styles.button}
              color={materialTheme.COLORS.BUTTON_COLOR}
              onPress={this.handleLogin} 
            >
              Connexion
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
          <Text style={{  fontSize: 12 }}>
            Vous êtes nouveau sur l’application ?{" "}
          </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("RegistreScreen")}>
          <Text style={{ fontWeight: "700", color: "rgb(30,144,255)", fontSize: 12 }}>
    S'inscrire
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
  loginForm: {
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
    marginTop:20,
    backgroundColor: 'rgb(0,0,205)',
   
    width:100,
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
