import { Block, Text, theme } from "galio-framework";
import { Image, ScrollView, StyleSheet ,TouchableOpacity,View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { DrawerItem as DrawerCustomItem } from "../components";
import Images from "../constants/Images";
import React from "react";

function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const screens = ["Home", "Les commandes",'Ajouter un local',"Profile", "Historique", "Support"];
  const handleLogout = () => {
    navigation.navigate("Onboarding");
  };
  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Block flex={0.06} >
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
              />
            );
          })}
          <Block
            flex
            style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8}}
          >
           
             <TouchableOpacity onPress={handleLogout} style={[styles.logoutButton, { marginLeft: 10 }]}>
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Icon name="sign-out" size={20} color="rgb(65,105,225)" />
    <Text style={{ fontWeight: "700", color: "rgb(65,105,225)", marginLeft: 8 }}>
      Logout
    </Text>
  </View>
</TouchableOpacity>
          </Block>
        </ScrollView>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {

    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: "center",
  },
  logo: {
    height: 10,
    width: 10,
    marginLeft:140
  },

});

export default CustomDrawerContent;
