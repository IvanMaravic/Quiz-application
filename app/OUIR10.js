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

function OUIR10() {
  const navigation = useNavigation();
  const scrollEnabled = this.state.screenHeight > height;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.title}>PREPORUKE{'\n'}{'\n'}
10. ODRŽAVANJE PROFESIONALNE KVALIFICIRANOSTI ZA RPN NA NN{'\n'}</Text>
      <Text style={styles.text}>Povjerenstvo za rad pod naponom donijelo je zaključke čijom primjenom bi se 
smanjila pojava sljedećih problema:{'\n'}
– nedostatak opreza i nepoštivanje OUIR-NN i UIR-NN{'\n'}
– zaboravljanje pravila kod radnika koji nemaju dovoljno praktičnog iskustva{'\n'}
– nedostatak opreza kod primjene RPN s obzirom na prethodno iskustvo
rada u beznaponskom stanju i zato što se rad pod naponom poima kao 
nešto ˝uobičajeno˝.{'\n'}{'\n'}
Povjerenstvo za rad pod naponom izdaje preporuke za obnovu Ovlaštenja za 
RPN i održavanje iskustva i profesionalne kvalificiranosti za RPN NN, za radnike s 
Ovlaštenjem za RPN NN.{'\n'}</Text>      
  <Text style={styles.subtitle}>10.1. Obnova Ovlaštenja za rad pod naponom</Text>

      <Text style={styles.text}>HRN EN 50110-1 predviđa obnovu Ovlaštenja za rad pod naponom svake 
kalendarske godine.{'\n'}{'\n'}
Ovlaštenje za rad pod naponom daje poslodavac operateru za kojeg 
posjeduje uvjerenje da ima znanje i iskustvo potrebno za takav rad i da je 
on operater koji je predviđen i potreban za praktičan rad pod naponom.{'\n'}{'\n'}
Ovlaštenje za rad pod naponom ne obnavlja se operaterima koji:{'\n'}
– imaju dulji (1 godina) ili trajni prekid prakse{'\n'}
– u međuvremenu budu raspoređeni na radno mjesto bez posebnih uvjeta 
rada{'\n'}
– u međuvremenu izgube psihofizičku i zdravstvenu sposobnost za rad 
pod naponom{'\n'}
– učestalo krše pravila i mjere sigurnosti kod izvođenja rada pod naponom.{'\n'}{'\n'}
Obnova Ovlaštenja za rad pod naponom može se sustavno produljivati 
operateru koji nije imao dulji prekid praktičnog rada, a to se utvrđuje 
na temelju gore propisanog postupka koji se koristi za godišnju obnovu 
Ovlaštenja.{'\n'}</Text>
      <Text style={styles.subtitle}>10.2. Održavanje profesionalne kvalificiranosti uz tečaj obnove znanja</Text>
      <Text style={styles.text}>Propisani postupak godišnje obnove Ovlaštenja za rad pod naponom nije 
dovoljan za održavanje iskustva i profesionalnu kvalifikaciju na području 
RPN NN.{'\n'}{'\n'}
Povjerenstvo za RPN preporučuje da se svi radnici organiziraju, okupljaju u 
jednom ili više tečajeva obnove znanja, a učestalost i referentne termine treba 
dogovoriti tako da budu pristupačni različitim operaterima s Ovlaštenjem za 
radove pod naponom.{'\n'}{'\n'}
10.2.1. Učestalost
Učestalost se računa od datuma početne obuke ili posljednjeg tečaja 
obnove znanja.{'\n'}{'\n'}
Preporučeno razdoblje je:{'\n'}
– četiri godine za sve operatere s Ovlaštenjem za rad pod naponom koji 
redovito rade pod naponom (40 i više od 40 puta godišnje){'\n'}
– tri godine za sve operatere s Ovlaštenjem za rad pod naponom koji 
povremeno rade pod naponom (manje od 40 puta godišnje){'\n'}
– izvanredno, prilikom promjene propisa, pravila, tehnologije izvođenja 
radova i odluke poslodavca{'\n'}{'\n'}
uzimajući u obzir rad pod naponom u jednoj godini.{'\n'}{'\n'}
10.2.2. Uvjeti upućivanja
Uvjeti upućivanja za svaki tečaj obnove znanja moraju se dogovarati između 
Društva i nastavno-obrazovnog centra.{'\n'}{'\n'}
10.2.3. Instruktori i mjesto održavanja tečaja obnove znanja
Tečaj obnove znanja mora provoditi instruktor za RPN iz nastavno 
obrazovnog centra.{'\n'}{'\n'}
Tečaj može biti održan ili u nastavno obrazovnom centru ili u organizacijskoj 
jedinici Društva.{'\n'}{'\n'}
10.2.4. Tečaj obnove znanja{'\n'}
Sadržaj tečaja obnove znanja dogovara se prema potrebama Društva, a 
koje proizlaze iz uočenih nedostataka ili prema redovitom planu održavanja 
tečaja obnove znanja.{'\n'}{'\n'}
Svaki tečaj obnove znanja mora uključiti teorijski dio (propise, upute itd.) i 
praktičnu primjenu propisa.
Trajanje tečaja obnove znanja ne može biti kraće od dva radna dana. {'\n'}{'\n'}
10.2.5. Uvjerenje za operatera{'\n'}
Na kraju tečaja obnove znanja, nastavno obrazovni centar mora operateru 
izdati uvjerenje o tome da je sudionik uspješno savladao sadržaj tečaja 
obnove znanja.{'\n'}{'\n'}
Polazniku koji ne savlada tečaj obnove znanja izdaje se zapisnik koji se 
dostavlja i poslodavcu.{'\n'}</Text>
      <Text style={styles.subtitle}>10.3. Prekid prakse</Text>
      <Text style={styles.text}>Održavanje profesionalne kvalificiranosti na području RPN obično zahtijeva 
neprekinutu praksu i redoviti rad pod naponom.{'\n'}{'\n'}
Ako je nastao potpuni prekid praktičnog RPN (osoba nije posjedovala 
Ovlaštenje za RPN) tijekom više od tri godine, tada taj operater mora biti 
upućen na ponovnu početnu obuku za RPN.{'\n'}{'\n'}
Ako je prekid trajao između jedne i tri godine, operater mora proći tečaj 
obnove znanja</Text>



      </View>
    </ScrollView>
  );
}

export default OUIR10;


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