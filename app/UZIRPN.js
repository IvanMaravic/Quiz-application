import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

state = {
  screenHeight: 0,
}

function UZIRPN() {
  const navigation = useNavigation();
  const scrollEnabled = this.state.screenHeight > height;
  return (
      <ScrollView contentContainerStyle={styles.container}>

          <TouchableOpacity  onPress={() => navigation.navigate('UZIRPN1')}>
            <Text style={styles.link}>1. DEFINICIJE I POJMOVI</Text>
          </TouchableOpacity >
        
          <TouchableOpacity  onPress={() => navigation.navigate('UZIRPN2')}>
            <Text style={styles.link}>2. PRIPREMA RADA I RADNOG MJESTA</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('UZIRPN3')}>
            <Text style={styles.link}>3. ORGANIZACIJA RADOVA I IZVOĐENJE</Text>
          </TouchableOpacity >

          <TouchableOpacity onPress={() => navigation.navigate('UZIRPN4')}>
            <Text style={styles.link}>4. POSTUPCI RADA POD NAPONOM</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => navigation.navigate('UZIRPN5')}>
            <Text style={styles.link}>5. SPAJANJE I ODSPAJANJE STRUJNIH KRUGOVA</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('UZIRPN6')}>
            <Text style={styles.link}>6. RAD NA UREĐAJIMA I OPREMI</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('UZIRPN7')}>
            <Text style={styles.link}>7. SPECIJALNI RADNI POSTUPCI</Text>
          </TouchableOpacity >
        

        
      </ScrollView>
  );
}

export default UZIRPN;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'left',
    padding: 15,
  },
  link: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'left',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});


