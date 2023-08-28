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
      <Text style={styles.title}>4. POSTUPCI RADA POD NAPONOM{'\n'}
</Text>

      <Text style={styles.subtitle}>4.1. Rad na vodičima i dijelovima
</Text>

      <Text style={styles.text}>4.1.1. Rad na neizoliranim dijelovima električnog postrojenja
Rad pod naponom započinje kada operater ulazi ili unosi svoj alat u prostor 
manji od 0,30 m, tako da održava najmanju udaljenost približavanja od 
0,30 m između neizoliranih aktivnih dijelova ili vodiča i nezaštićenih dijelova 
svojeg tijela.{'\n'}</Text>

      <Text style={styles.blue}>Svaki put kada operater pristupa električnom postrojenju ili dijelu opreme 
za RPN, mora nositi osobnu zaštitnu opremu koja ga štiti od električkih i 
mehaničkih izvora opasnosti.{'\n'}{'\n'}
Neutralni vodič se smatra aktivnim vodičem i prema njemu se mora odnositi 
kao prema aktivnom vodiču.{'\n'}</Text>

<Text style={styles.text}>Rad pod naponom završava kada je posao završen i operater se udalji izvan 
granice od 0,30 m od neizoliranih aktivnih dijelova.{'\n'}</Text>

      <Text style={styles.text}>4.1.2. Rad na izoliranim vodičima 
Rad pod naponom započinje kada operater otvara ili probija izolacijski plašt 
na faznom ili neutralnom vodiču u dodiru s vodičem, uz stupanj zaštite manji 
od IP2X.{'\n'}</Text>

      <Text style={styles.blue}>Tamo gdje nije moguće sa sigurnošću utvrditi stupanj zaštite IP2X, vodiče 
treba smatrati neizoliranim vodičima.{'\n'}</Text>

      <Text style={styles.text}>Rad pod naponom završava kada operater završi obnovu izolacije na 
zadnjem vodiču i spoji zadnju stezaljku s vodičem.{'\n'}</Text>

      <Text style={styles.subtitle}>4.2. Rad na podzemnim kabelima u kanalima i tunelima
</Text>

      <Text style={styles.text}>4.2.1. Rad na kabelima
Rad pod naponom započinje kada operater započne skidati vanjsku izolaciju 
s kabela.{'\n'}{'\n'}
Priprema rada na aktivnom NN kabelu općenito se smatra kao radni 
postupak RPN-a.{'\n'}</Text>

      <Text style={styles.blue}>Priprema kabela s metalnim plaštem zahtijeva uporabu alata i osobne 
zaštitne opreme za rad pod naponom zbog toga što se pri rezanju vanjskog 
plašta može oštetiti izolacija vodiča.{'\n'}</Text>

      <Text style={styles.text}>Rezanje i spajanje neutralnog vodiča mora se uvijek smatrati radom pod 
naponom.{'\n'}{'\n'}
Rad pod naponom završava kada operater završi obnovu izolacije zadnjeg 
faznog i neutralnog vodiča s potpunom sigurnošću.{'\n'}{'\n'}
4.2.2. Rad na opremi (izolacijske spojnice ili kabelski završetci)
Rad pod naponom započinje uvijek kada operater otvara spojnicu, kabelski 
završetak, skida ili probija njihovu izolaciju.{'\n'}</Text>

      <Text style={styles.blue}>Sljedeće radnje ne smatraju se radnim postupcima rada pod naponom:{'\n'}
– dodir s vanjskim kućištem spojne opreme, bez obzira na vrstu materijala 
tog kućišta (predlaže se da se operater uvjeri u beznaponsko stanje 
kućišta){'\n'}
– dodir s vodičima koji uzemljuju neutralni vodič{'\n'}
– otvaranje spojnica ili kabelskih završetaka ispunjenih izolacijskim 
materijalom radi otkrivanja vrsta ispune, kako je određeno u poglavlju 6. 
UIR-NN.{'\n'}</Text>

      <Text style={styles.text}>Instalacija u spojnici podliježe u potpunosti radnom postupku RPN-a, 
čak i ako nije moguće da operater pristupi do aktivnih dijelova, zbog 
konstrukcijskog osiguranja.{'\n'}{'\n'}
Rad pod naponom završava kada se uklone izolacijski pokrivači (izolacijske 
prostirke) na kojima se stoji tijekom rada.{'\n'}</Text>

      <Text style={styles.blue}>Kvaliteta izolacije mora operateru biti poznata već kod skidanja izolacije da 
bi je mogao ponovno postaviti u nepromijenjenom stupnju kvalitete.{'\n'}</Text>

      <Text style={styles.text}>4.2.3. Rad na NN kabelskim spojnicama
Rad pod naponom započinje postavljanjem izolacijskog pokrivača u kabelski 
rov (primjerice, kada treba pomaknuti kabelske spojnice).{'\n'}{'\n'}
Rad pod naponom prestaje kada se uklone izolacijski pokrivači.{'\n'}</Text>

      <Text style={styles.blue}>Kako je određeno u HRN EN 50110-1, otvaranje i zatvaranje spojnih kutija ne 
smatra se radnim postupkom rada pod naponom, ali ipak zahtijeva određenu 
predostrožnost u smislu zaštite od neželjenih opasnosti koje mogu nastati 
kod te opreme.{'\n'}
</Text>

      <Text style={styles.subtitle}>4.3. Rad na NN opremi 
</Text>

      <Text style={styles.text}>Kod radova na NN opremi od 500 V do 1000 V, pomicanje poklopaca, 
okvira ili metalnih pregrada da bi se moglo pristupiti do aktivnih neizoliranih 
dijelova, smatra se radnim postupcima RPN-a.{'\n'}{'\n'}
Rad pod naponom završava tek kada su svi poklopci, okviri ili metalne 
pregrade stavljeni ponovno na svoje mjesto i potpuno učvršćeni.{'\n'}</Text>

      <Text style={styles.blue}>Postoji opasnost od slučajnog dodira poklopaca, okvira ili metalnih pregrada 
s aktivnim neizoliranim dijelovima.{'\n'}</Text>

      <Text style={styles.subtitle}>4.4. Rad na električnim instalacijama i opremi
</Text>

      <Text style={styles.text}>4.4.1. Rad na otvorenim kućištima
U skladu s t. 4.1. UIR-NN određuje se početak i završetak RPN-a.{'\n'}{'\n'}
4.4.2. Rad na razvodnim kutijama i ormarima{'\n'}{'\n'}
4.4.2.1. Kod rada na NN opremi do 500 V otvaranje i zatvaranje vrata razvodne 
kutije ili ormara nije radni postupak rada pod naponom.{'\n'}</Text>

      <Text style={styles.blue}>Otvaranje vrata neke razvodne kutije ili ormara može biti slično otvaranju 
vrata nekog prostora (električna pogonska prostorija), u koji je ulazak 
dopušten samo električarima.{'\n'}</Text>

      <Text style={styles.text}>Rad pod naponom započinje kada operater dođe na udaljenost od 0,30 m 
od aktivnih neizoliranih dijelova koji su pristupačni kod otvorenih vrata.{'\n'}{'\n'}
4.4.2.2. Rad pod naponom završava kada je radni postupak završen i operater se 
udalji na udaljenost veću od 0,30 m od aktivnih neizoliranih dijelova.</Text>



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