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

function OUIR7() {
  const navigation = useNavigation();
  const scrollEnabled = this.state.screenHeight > height;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.title}>7. PREGLED ALATA PRIJE RADA</Text>
      <Text style={styles.text}>
Sav alat koji se upotrebljava za rad pod naponom mora biti u skladu s normama 
za rad pod naponom, a svaku novu vrstu alata koja se uvodi u opremu za rad pod 
naponom mora biti utvrditi Povjerenstvo za RPN.{'\n'}</Text>
      <Text style={styles.subtitle}>7.1. Osobni alat</Text>
      <Text style={styles.text}>
Sav alat prije rada treba vizualno pregledati na samom mjestu rada i utvrditi 
njegovu ispravnost.
Svaki radnik odgovoran je za pregled i održavanje svog osobnog alata.{'\n'}
</Text>
      <Text style={styles.subtitle}>7.2. Zajednički alat</Text>
      <Text style={styles.text}>Rukovoditelj radova odgovoran je za pregled zajedničkog alata.{'\n'}</Text>
      <Text style={styles.subtitle}>7.3. Pregled</Text>
      <Text style={styles.text}>Pregled se mora obaviti prema opisu u nastavku.{'\n'}
</Text>
      <Text style={styles.blue}>Tijekom pregleda treba voditi računa o specifičnim podacima iz TOA.{'\n'}</Text>
      <Text style={styles.text}>7.3.1. Izolacijski dijelovi alata i opreme
      Osim čišćenja tih dijelova, treba pregledati sljedeće:{'\n'}
– trenutačno stanje dijelova od izolacijskog materijala{'\n'}
– trenutačno stanje izolacije izoliranih alata{'\n'}</Text>
      <Text style={styles.blue}>Ako se kod izoliranog alata vidi metal ili postoji samo tanki sloj izolacijske 
presvlake, tada se takav alat mora odmah staviti izvan uporabe, popraviti 
ga ili zamijeniti novim.{'\n'}</Text>
      <Text style={styles.text}>– postojanje rupa ili ogrebotina na bilo kojem dijelu izolacije alata (potpuno 
ili djelomično oštećenje izolacije), izolacijskog materijala bez obzira na to 
je li savitljiv ili krut{'\n'}
– odsustvo bilo kakvih ogrebotina na gumenom materijalu (ili sintetičkom 
materijalu){'\n'}
– odsustvo rupa ili ogrebotina, uključivo i one najmanje na izolacijskim 
rukavicama.{'\n'}</Text>
      <Text style={styles.blue}>Tijekom pregleda rukavica ispravnost se utvrđuje napuhivanjem rukavica 
namatanjem.{'\n'}
</Text>
      <Text style={styles.text}>7.3.2. Ostali dijelovi alata
Provjeriti:{'\n'}
– nema vidljivih oštećenja (pukotina, deformacija itd.){'\n'}
– da svi mehanizmi rade ispravno{'\n'}</Text>
      <Text style={styles.blue}>Mehaničke greške na alatu i greške na izolaciji mogu dovesti do ozbiljnih 
posljedica.{'\n'}</Text>
      <Text style={styles.text}>– da nema slomljenih kabela, užadi i kopči na alatima i materijalu.{'\n'}{'\n'}
7.3.3. Alati koji ne zadovoljavaju pregled{'\n'}
Alati koji ne zadovoljavaju pregled moraju biti izuzeti iz kompleta alata i 
označeni s „Nije za uporabu“.</Text>



      </View>
    </ScrollView>
  );
}

export default OUIR7;


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