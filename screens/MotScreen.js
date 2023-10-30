import React, { useState } from 'react';
import { StyleSheet, StatusBar, Dimensions, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { Block, Button, theme, Text } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import materialTheme from '../constants/Theme';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (email) {
      alert(`Password reset email sent to ${email}`);
      
      setTimeout(() => {
        navigation.navigate('Onboarding');
      }, 3000); 
    } else {
      alert('Veuillez entrer votre adresse e-mail pour réinitialiser votre mot de passe.');
    }
  };
  

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
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="rgb(83,104,120)"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TouchableOpacity onPress={handleResetPassword} style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Réinitialiser le mot de passe</Text>
        </TouchableOpacity>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(244,240,236)',
    justifyContent: 'center',
    alignItems: 'center',
    height:100,
    
  },
  registerForm: {
    width: '80%',
    backgroundColor: 'rgb(211,211,211)',
    borderRadius: theme.SIZES.BASE,
    padding: theme.SIZES.BASE * 2,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.SIZES.BASE,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: theme.SIZES.BASE,
    borderColor: 'rgb(83,104,120)',
    borderWidth: 1,
    borderRadius: theme.SIZES.BASE / 2,
    paddingHorizontal: 10,
  },
  resetButton: {
    backgroundColor: 'rgb(30,144,255)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: theme.SIZES.BASE / 2,
  },
  resetButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },
});
