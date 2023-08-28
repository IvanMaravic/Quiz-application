import { StyleSheet, Text, View, Image, TouchableOpacity, AppButton } from 'react-native';
import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

function HomeSCreen() {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>

        <Image style={styles.image} source={require('./HEPLogo.png')}/>

        <View style={styles.container1}>

          <View style={styles.container2}>
          <TouchableOpacity  onPress={() => navigation.navigate('RPN-NN')}>
            <Text style={styles.link}>RPN - NN</Text>
          </TouchableOpacity >

{/*           <TouchableOpacity  onPress={() => navigation.navigate('RPN-CISCENJE')}>
            <Text style={styles.link}>RPN-ČIŠĆENJE</Text>
          </TouchableOpacity > */}
        </View>

{/*         <View style={styles.container2}>
          <TouchableOpacity onPress={() => navigation.navigate('RPN-SN')}>
            <Text style={styles.link}>RPN - SN</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('UKLOPNICARI')}>
            <Text style={styles.link}>UKLOPNIČARI</Text>
          </TouchableOpacity >
        </View> */}

        </View>
        
        <Text style={styles.text1}>Rad pod naponom - NN</Text>

        
      </View>
  );
}

export default HomeSCreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image:{
    maxWidth: 250, 
    width: '100%', 
    resizeMode: 'contain' 

  },
  container1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 60,
  },
  container2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  link: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10,
    padding:10,
  },
  text1: {
    fontSize: 20,
  }, 


});

