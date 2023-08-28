import { StyleSheet, Text, View, Image, TouchableOpacity, AppButton } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


function RPN_NN() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

        <Image style={styles.image} source={require('./HEPLogo.png')}/>
        <View style={styles.container1}>

          <TouchableOpacity  onPress={() => navigation.navigate('Test')}>
            <Text style={styles.link}>Test znanja</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('OUIRSadrzaj')}>
            <Text style={styles.link}>Opći uvjeti za izvođenje RPN na NN</Text>
          </TouchableOpacity >

          <TouchableOpacity onPress={() => navigation.navigate('UZIRPN')}>
            <Text style={styles.link}>Uvjeti za izvođenje RPN na NN</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => navigation.navigate('DIRPN')}>
            <Text style={styles.link}>Dokumentacija za izvođenje RPN na NN</Text>
          </TouchableOpacity >

        </View>


    </View>
  );
}

export default RPN_NN;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue'
  },

  image:{
    maxWidth: 250, 
    width: '100%', 
    resizeMode: 'contain',
  },
  container1:{
    display: "flex",
    flexDirection: "column",
    marginBottom: 180,    
  },  
  link: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10,
    padding:10,
    textAlign: "center",
  },
});
