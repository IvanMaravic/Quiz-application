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

function OUIR9() {
  const navigation = useNavigation();
  const scrollEnabled = this.state.screenHeight > height;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.title}>9. ODNOS IZMEĐU OPERATERA I RUKOVODITELJA RADOVA
</Text>
      <Text style={styles.subtitle}>9.1. Propisani postupci
</Text>
      <Text style={styles.text}>9.1.1. Radni zadaci za izvođenje radova pod naponom na električnim postrojenjima 
niskog napona mogu se temeljiti na redovitom planu održavanja, prethodnim 
obavijestima o kvaru i slično.{'\n'}{'\n'}
9.1.2. Prije početka rada operater i rukovoditelj radova obvezno moraju imati 
kompletno popunjenu radnu dokumentaciju za rad pod naponom u pisanom 
obliku ili poslanu u obliku poruke (s usklađivanjem teksta). Pri tome operatera 
određuje poslodavac ili njegov ovlašteni predstavnik.{'\n'}{'\n'}
9.1.3. Nalog za rad mora se koristiti za svaki pojedini rad.
9.1.4. RPN se smije izvoditi jedino ako uz Nalog za rad operater ima:{'\n'}
– Dopusnicu za RPN {'\n'}
ili{'\n'}
– Trajnu dopusnicu za učestale standardne radne postupke RPN-a.{'\n'}

</Text>
      <Text style={styles.blue}>Radni postupci koji se mogu obuhvatiti Trajnom dopusnicom za RPN su 
pretežito često ponavljani radovi koji ne zahtijevaju mijenjanje uklopnog 
stanja mreže.{'\n'}</Text>
      <Text style={styles.text}>9.1.5. Dopusnica za RPN može biti:{'\n'}
– izdana izravno rukovoditelju radova{'\n'}
ili{'\n'}
– dostavljena putem snimane govorne komunikacije (s usklađivanjem 
teksta){'\n'}{'\n'}
za što odgovara voditelj električnog postrojenja.{'\n'}{'\n'}
9.1.6. Operater mora obavijestiti rukovoditelja radova o početku rada pod naponom 
u skladu s usmenim uputama koje je primio od rukovoditelja radova.{'\n'}{'\n'}
9.1.7. RPN na kontroli ili upravljanju dijelovima SN opreme dopušten je kada 
oprema nije u SRZ.{'\n'}</Text>
      <Text style={styles.subtitle}>9.2. Početak rada
</Text>
      <Text style={styles.text}>9.2.1. Prije početka rada pod naponom na mjestu rada rukovoditelj radova 
uspostavlja kontakt s voditeljem postrojenja koji odlučuje dopušta li takav 
rad:{'\n'}
– hoće li zadržati postrojenje pod naponom{'\n'}
ili{'\n'}
– isključiti pojedini dio postrojenja tijekom dijela radova ili tijekom svih 
radova.{'\n'}

</Text>
      <Text style={styles.blue}>Nakon dobivene Dopusnice za RPN sam operater odgovoran je za konačnu 
odluku o provedbi RPN.{'\n'}</Text>
      <Text style={styles.text}>9.2.2. Ako se rad ne može provesti na postrojenju pod naponom, operater je dužan 
informirati rukovoditelja radova o pronađenim poteškoćama.{'\n'}{'\n'}
9.2.3. Ako je riječ o složenom poslu ili samo dijelu složenog posla koji zahtijeva više 
operatera na istom postrojenju ili instalaciji, treba uspostaviti koordinaciju 
između njih pa se određuje jedan koordinator rada.{'\n'}</Text>
      <Text style={styles.subtitle}>9.3. Identifikacija postrojenja
</Text>
      <Text style={styles.text}>9.3.1. Voditelj električnog postrojenja mora dati rukovoditelju radova (operateru) 
sve informacije nužne za identificiranje postrojenja ili instalacije na kojima 
treba izvesti radove.{'\n'}{'\n'}
9.3.2. Identifikacija podzemne kabelske mreže na kojoj se treba raditi mora biti 
provedena s potpunom sigurnošću uz prisustvo rukovoditelja radova i uz 
prisustvo operatera. Ako postoji opasnost zabune, kabel mora biti vidljivo 
označen s jednom ili više jasno prepoznatljivih oznaka.{'\n'}</Text>
      <Text style={styles.subtitle}>9.4. Promjena uklopnog stanja 
</Text>
      <Text style={styles.text}>Bilo kakva promjena uklopnog stanja opreme ili instalacije koja bi se trebala 
napraviti zbog radova pod naponom mora biti provedena jedino uz jasnu 
suglasnost voditelja električnog postrojenja.
Promjena uklopnog stanja mreže može utjecati na elektroenergetski sustav 
u smislu smjera tokova snage, količine ili puta distribuiranja električne 
energije.{'\n'}{'\n'}
Operater će vratiti električno postrojenje u početno uklopno stanje, osim 
ako voditelj električnog postrojenja ne zahtijeva drukčije.{'\n'}</Text>
      <Text style={styles.subtitle}>9.5. Incidenti na mjestu rada 
</Text>
      <Text style={styles.text}>O bilo kakvim incidentima na mjestu rada rukovoditelj radova mora odmah 
obavijestiti voditelja električnog postrojenja, organizatora radova, službu 
zaštite na radu i prema potrebi hitne službe.{'\n'}
</Text>
      <Text style={styles.subtitle}>9.6. Završetak rada
</Text>
      <Text style={styles.text}>Kod završetka rada koji je proveden u skladu s Dopusnicom za RPN ili 
Trajnom dopusnicom za RPN, rukovoditelj radova (operater) dužan je 
obavijestiti voditelja električnog postrojenja o završetku posla povratom 
Dopusnice za RPN ili porukom (s usklađenim tekstom).{'\n'}</Text>
      <Text style={styles.blue}>Napomena: Rukovoditelj radova dužan je obavijestiti voditelja električnog 
postrojenja o bilo kakvom nužnom prekidu rada (primjerice prekid povezan 
s vremenskim uvjetima). Tada se uklopno stanje mreže ne mijenja.</Text>



      </View>
    </ScrollView>
  );
}

export default OUIR9;


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