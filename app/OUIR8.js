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

function OUIR8() {
  const navigation = useNavigation();
  const scrollEnabled = this.state.screenHeight > height;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.title}>8. ODRŽAVANJE ALATA</Text>
      <Text style={styles.subtitle}>8.1. Periodičko ispitivanje</Text>
      <Text style={styles.text}>
Izolacijske cijevi moraju proći redovito ispitivanje najmanje jedanput 
godišnje, koje se provodi u ispitnom laboratoriju.{'\n'}{'\n'}
Alat se mora pripremiti (očistiti i osušiti) za periodičko ispitivanje. Poslodavac 
je dužan imenovati osobu koja obavlja pripremu alata za periodičko 
ispitivanje.{'\n'}{'\n'}
Svaki alat koji ne zadovolji kod ispitivanja mora:{'\n'}
– odmah biti uklonjen iz uporabe{'\n'}
– označiti naljepnicom ˝Nije za uporabu˝.{'\n'}
</Text>
      <Text style={styles.blue}>Periodičko ispitivanje treba zadovoljiti sve dodatne i specifične zahtjeve koji 
su utvrđeni u TOA.{'\n'}</Text>
      <Text style={styles.text}>Poslodavac mora imenovati odgovornu osobu zaduženu za praćenje 
provedbe propisanog periodičkog ispitivanja.{'\n'}</Text>
      <Text style={styles.blue}>Odgovorna osoba zadužena za praćenje periodičkog ispitivanja mora voditi 
dnevnik s datumima ispitivanja i rezultatima ispitivanja.{'\n'}</Text>
      <Text style={styles.subtitle}>8.2. Svakodnevno održavanje</Text>
      <Text style={styles.text}>Alati moraju biti čisti i u dobrom radnom stanju (uključivo i izolacijske dijelove 
izoliranih alata).{'\n'}{'\n'}
Ako se traži pranje, tada ono treba provoditi sapunom.{'\n'}</Text>
      <Text style={styles.blue}>Korisnici moraju slijediti specifične informacije iz TOA.{'\n'}</Text>
      <Text style={styles.subtitle}>8.3. Modificiranje alata</Text>
      <Text style={styles.text}>Ni jedan alat ne smije se modificirati u odnosu na originalnu izvedbu i 
namjenu{'\n'}</Text>
      <Text style={styles.subtitle}>8.4. Popravci</Text>
      <Text style={styles.text}>U nedostatku specifičnih uputa za popravak pojedinog alata (ako ne postoje 
u TOA), popravak smije obaviti proizvođač ili ovlašteni serviser.{'\n'}</Text>
      <Text style={styles.blue}>TOA daje posebne informacije:{'\n'}
– da se alat ne može popraviti{'\n'}
– koje popravke smije raditi sam korisnik.{'\n'}</Text>
      <Text style={styles.subtitle}>8.5. Skladištenje i transport</Text>
      <Text style={styles.text}>Alati moraju biti očišćeni nakon uporabe i potom brižljivo pohranjeni na 
lokaciji predviđenoj za tu svrhu.{'\n'}{'\n'}
Kada su daleko od mjesta rada, alati koji su većinom izrađeni od izolacijskih 
cijevi moraju biti skladišteni i transportirani nakon što su na ispravan način 
učvršćeni i pakirani radi sprječavanja oštećenja.{'\n'}{'\n'}
Ako alati imaju čeljusti, one moraju biti zatvorene.{'\n'}</Text>
      <Text style={styles.blue}>U TOA specificirane su posebne mjere u vezi sa skladištenjem određenog 
alata.</Text>



      </View>
    </ScrollView>
  );
}

export default OUIR8;


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