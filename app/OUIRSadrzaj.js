import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

state = {
  screenHeight: 0,
}

function OUIRSadrzaj() {
  const navigation = useNavigation();
  const scrollEnabled = this.state.screenHeight > height;
  return (
      <ScrollView contentContainerStyle={styles.container}>


          <TouchableOpacity  onPress={() => navigation.navigate('OUIR1')}>
            <Text style={styles.link}>1. OPIS I PODRUČJE PRIMJENE OUIR-NN</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('OUIR2')}>
            <Text style={styles.link}>2. DEFINICIJE I POJMOVI</Text>
          </TouchableOpacity >

          <TouchableOpacity onPress={() => navigation.navigate('OUIR3')}>
            <Text style={styles.link}>3. MJERE SPRJEČAVANJA ELEKTRIČNOG UDARA</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => navigation.navigate('OUIR4')}>
            <Text style={styles.link}>4. MJERE SPRJEČAVANJA KRATKIH SPOJEVA</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('OUIR5')}>
            <Text style={styles.link}>5. OSOBNA ZAŠTITNA OPREMA</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('OUIR6')}>
            <Text style={styles.link}>6. VREMENSKI UVJETI NA MJESTU RADA</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('OUIR7')}>
            <Text style={styles.link}>7. PREGLED ALATA PRIJE RADA</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('OUIR8')}>
            <Text style={styles.link}>8. ODRŽAVANJE ALATA</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('OUIR9')}>
            <Text style={styles.link}>9. ODNOS IZMEĐU OPERATERA I RUKOVODITELJA RADOVA</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('OUIR10')}>
            <Text style={styles.link}>10. ODRŽAVANJE PROFESIONALNE KVALIFICIRANOSTI ZA RPN NA NN</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('OUIR11')}>
            <Text style={styles.link}>11. PREDSTAVNICI POSLODAVCA ZADUŽENI ZA RADNIKE KOJI IZVODE RPN NA NN</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('OUIR12')}>
            <Text style={styles.link}>12. ISPRAVE ZA RAD POD NAPONOM – DODATNE ODREDBE</Text>
          </TouchableOpacity >

          <TouchableOpacity  onPress={() => navigation.navigate('OUIR13')}>
            <Text style={styles.link}>TIJEK IZDAVANJA ISPRAVA ZA RAD POD NAPONOM</Text>
          </TouchableOpacity >

        
      </ScrollView>
  );
}

export default OUIRSadrzaj;

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



