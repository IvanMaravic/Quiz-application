import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

state = {
  screenHeight: 0,
}

/* 
<Text style={styles.text}></Text>
<Text style={styles.title}></Text>
<Text style={styles.subtitle}></Text>
<Text style={styles.blue}></Text>
<Text style={styles.bold}></Text>
{'\n'}
 */

function OUIR6() {
  const navigation = useNavigation();
  const scrollEnabled = this.state.screenHeight > height;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.title}>6. VREMENSKI UVJETI NA MJESTU RADA
</Text>
      <Text style={styles.subtitle}>6.1. Ograničenja RPN-a za nadzemne vodove niskog napona ovisno o 
vremenskim uvjetima
</Text>
      <Text style={styles.blue}>Ograničenja primjene rada pod naponom kod niskog napona, koja ovise 
o vremenskim uvjetima, utvrđena su u dodatku HRN EN 50110-1, prema 
tablici 2:</Text>
<Image style={styles.image} source={require('./tablica2.png')}/>

      <Text style={styles.subtitle}>6.2. Ograničenja RPN-a za podzemne vodove i unutrašnju opremu niskog 
napona ovisno o vremenskim uvjetima{'\n'}</Text>
<Image style={styles.image} source={require('./tablica3.png')}/>

      <Text style={styles.text}>DOPUNSKI UVJET: TEMPERATURNI UVJETI{'\n'}{'\n'}
      Uvjeti rada kod niskih i visokih temperatura opisani su u Pravilima i mjerama 
sigurnosti pri radu na električnim postrojenjima.{'\n'}{'\n'}
Kod niskih i visokih temperatura operater mora voditi računa da pojedini 
izolirani kabeli mogu postati lomljivi, tako da izolacija može biti sumnjiva.{'\n'}</Text>
      <Text style={styles.blue}>Nisu dopušteni radovi na otvorenom prostoru pri temperaturama nižim od 
-18 0C ili višim od +35 0C u hladu.{'\n'}
</Text>
      <Text style={styles.subtitle}>6.3. Ograničenja radova na čišćenju pod naponom ovisno o vremenskim 
uvjetima</Text>
      <Text style={styles.blue}>Ograničenja kod primjene čišćenja NN ovise o vremenskim uvjetima 
utvrđena su u dodatku HRN EN 50110-1 i tablici 4:</Text>
<Image style={styles.image} source={require('./tablica4.png')}/>




      </View>
    </ScrollView>
  );
}

export default OUIR6;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  container1: {
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D5D9B',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#1D5D9B',
  },
  blue: {
    fontSize: 18,
    textAlign: 'left',
    color: '#1D5D9B',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'left',
/*     marginBottom: 10,
 */  },
  bold: {
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  image:{
    width: 'deviceWidth',
    resizeMode: 'contain',
    marginBottom: -40,
    marginTop: -80, 
  }
});