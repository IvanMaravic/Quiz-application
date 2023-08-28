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

function OUIR12() {
  const navigation = useNavigation();
  const scrollEnabled = this.state.screenHeight > height;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.title}>12. ISPRAVE ZA RAD POD NAPONOM – DODATNE ODREDBE {'\n'}
</Text>
      <Text style={styles.subtitle}>12.1. Popunjavanje i izdavanje isprava za rad pod naponom
</Text>
      <Text style={styles.text}>Isprave za rad pod naponom na niskom naponu, načine njihovog 
popunjavanja, izdavanja i čuvanja opisane su u Pravilima i mjerama sigurnosti 
za rad na električnim postrojenjima.{'\n'}{'\n'}
Ove isprave mogu se kombinirati s ispravama za rad u beznaponskom 
stanju ako pojedini posao treba dijelom odraditi u beznaponskom stanju 
električnog postrojenja.{'\n'}{'\n'}
U blok-dijagramu koji opisuje redoslijed izdavanja isprava za rad za 
standardne postupke RPN koji ne zahtijevaju posebnu pripremu (upotreba 
Trajne dopusnice za rad pod naponom), Prilog 1 ovih OUIR–NN važenje 
Trajne dopusnice se ograničava vremenski i veže uz pojedinačne Naloge za 
rad (za svako mjesto rada izdaje se Nalog za rad). Nositelji Trajne dopusnice 
za rad pod naponom mogu biti isključivo operateri koji posjeduju Ovlaštenje 
za rad pod naponom s razinom stručnosti 2 (rukovoditelj radova). Zabranjena 
je upotreba Trajne dopusnice za rad pod naponom pri izvođenju stručne 
prakse.{'\n'}</Text>
      <Text style={styles.subtitle}>12.2. Osnova pokretanja rada pod naponom
</Text>
      <Text style={styles.text}>RPN na postrojenju se, u pravilu, pokreće i priprema na temelju sljedećeg:{'\n'}
– planova{'\n'}
– izvještaja{'\n'}
– obavijesti o kvaru{'\n'}
– dojave o kvaru, nedostatku ili stanju električnog postrojenja (o čemu se 
vodi posebna evidencija){'\n'}
– posebne pisane odluke ili naloga{'\n'}{'\n'}
a organizira i izvodi na temelju propisanih isprava za rad pod naponom.{'\n'}</Text>
      <Text style={styles.subtitle}>12.3. Organizacija izrade Pripreme za rad pod naponom
</Text>
      <Text style={styles.text}>Priprema za rad pod naponom odrađuje se prije termina planiranog rada. 
Ona sadrži analizu rizika i načine njihova otklanjanja te kratko opisani 
redoslijed radnji (koraka).{'\n'}{'\n'}
Za potrebe izrade Pripreme za rad pod naponom operater ili rukovoditelj 
radova obavljaju pregled mjesta rada i dokumentiraju zatečeno stanje 
(detaljno fotografiranje je prikladan način stvaranja priloga za analizu rizika, 
određivanje pristupačnosti mjestu rada i opisu koraka rada). Za potrebe 
izlaska na buduće mjesto rada i izrade Pripreme za rad pod naponom izdaje 
se Radni zadatak, a ponekad je za to potreban i Nalog za rad (ulazak u 
električno postrojenje i zonu rada pod naponom).{'\n'}</Text>
      <Text style={styles.subtitle}>12.4. Nositelji Ovlaštenja za rad pod naponom
</Text>
      <Text style={styles.text}>Nositelji Ovlaštenja za rad pod naponom mogu biti svi stručni radnici koji su 
završili kompletnu obuku za RPN, odnosno uspješno prošli stručno-teorijski 
dio obuke, odradili stručnu praksu, položili završni ispit te ispunjavaju uvjete 
za početno izdavanje i/ili produljivanje Ovlaštenja za rad pod naponom 
na temelju redovite primjene RPN i pohađanja tečajeva obnove znanja. 
Operateri koji odrađuju stručnu praksu ne mogu biti nositelji Ovlaštenja za 
rad pod naponom sve dok ne polože završni ispit. Do trenutka stjecanja 
Ovlaštenja za rad pod naponom (za potrebe provođenja stručne prakse) 
operater koristi uvjerenje koje mu je nakon završetka stručno-teorijskog 
dijela obuke izdala ovlaštena ustanova.</Text>



      </View>
    </ScrollView>
  );
}

export default OUIR12;


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