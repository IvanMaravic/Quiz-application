import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

state = {
  screenHeight: 0,
}

function DIRPN() {
  const navigation = useNavigation();
  const scrollEnabled = this.state.screenHeight > height;
  return (
    <ScrollView contentContainerStyle={styles.container}>
            
          <TouchableOpacity  onPress={() => navigation.navigate('DIRPN1')}>
            <Text style={styles.link}>1. RADNI ZADATAK ZA RPN</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('DIRPN2')}>
            <Text style={styles.link}>2. PRIPREMA ZA RPN</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('DIRPN3')}>
            <Text style={styles.link}>3. NALOG ZA RPN</Text>
          </TouchableOpacity >

          <TouchableOpacity onPress={() => navigation.navigate('DIRPN4')}>
            <Text style={styles.link}>4. ZAHTJEVZA IZDAVANJE DOPUSNICE ZA RPN</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => navigation.navigate('DIRPN5')}>
            <Text style={styles.link}>5. DOPUSNICA ZA RAD POD NAPONOM</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('DIRPN6')}>
            <Text style={styles.link}>6a TRAJNA DOPUSNICA ZA RAD POD NAPONOM - NADZEMNE IZOLIRANE I NEIZOLIRANE MREŽE NN</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('DIRPN7')}>
            <Text style={styles.link}>6b TRAJNA DOPUSNICA ZA RAD POD NAPONOM - PODZEMNE MREŽE NISKOG NAPONA</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('DIRPN8')}>
            <Text style={styles.link}>6c TRAJNA DOPUSNICA ZA RAD POD NAPONOM - UNUTRAŠNJA ELEKTRIČNA POSTROJENJA NN</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('DIRPN9')}>
            <Text style={styles.link}>6d TRAJNA DOPUSNICA ZA RAD POD NAPONOM - ČIŠĆENJE ELEKTRIČNIH POSTROJENJA NN</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('DIRPN10')}>
            <Text style={styles.link}>7. IZJAVA RUKOVODITELJA RADOVA VANJSKOG IZVOĐAČA</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('DIRPN11')}>
            <Text style={styles.link}>7a IZJAVA RUKOVODITELJA RADOVA VANJSKOG IZVOĐAČA I UPUTA ZA KRETANJE PO POSTROJENJU</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('DIRPN12')}>
            <Text style={styles.link}>8 OVLAŠTENJE ZA RAD POD NAPONOM</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('DIRPN13')}>
            <Text style={styles.link}>ISPRAVE ZA RAD POD NAPONOM - NN</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('DIRPN14')}>
            <Text style={styles.link}>ISPRAVE ZA RAD POD NAPONOM</Text>
          </TouchableOpacity >

        

        
      </ScrollView>
  );
}

export default DIRPN;

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

