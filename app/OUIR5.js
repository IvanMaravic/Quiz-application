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

function OUIR5() {
  const navigation = useNavigation();
  const scrollEnabled = this.state.screenHeight > height;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.title}>5. OSOBNA ZAŠTITNA OPREMA 
</Text>
      <Text style={styles.text}>– Osobna zaštitna oprema (OZO) su sredstva zaštite svakog operatera, pa 
je on odgovoran za njeno održavanje i provjeru.{'\n'}
– OZO je obvezna za sve vrste radova pod naponom, osim ako nije posebno 
naglašena iznimka.{'\n'}
– Drugi operater koji se približi operateru ili slučajno dođe u dodir s 
operaterom izravno ili preko alata ili predmeta bilo koje vrste, mora imati 
OZO koja odgovara naravi opasnosti kojoj je izložen operater.{'\n'}</Text>


      <Text style={styles.subtitle}>5.1. Opasnost od kratkog spoja i električnog udara
</Text>
      <Text style={styles.text}>Da bi se umanjila moguća opasnost od kratkog spoja i električnog udara 
operater ne smije nositi nikakve metalne predmete ili privjeske oko zglobova 
na ruci ili oko vrata.{'\n'}</Text>
      <Text style={styles.blue}>Vodeći računa o tome mora se paziti na:{'\n'}
– narukvice ili lančiće koji vise{'\n'}
– metalne vodljive dijelove koji mogu ispasti iz džepova i dovesti do kratkog 
spoja ili doći u dodir s fiksnim potencijalom ili s nekoliko različitih fiksnih 
potencijala.{'\n'}</Text>
      <Text style={styles.text}>Operaterima je strogo zabranjeno nošenje zaštitnih naočala ili sunčanih 
naočala koje imaju metalne okvire i držače.{'\n'}</Text>


      <Text style={styles.subtitle}>5.2. Uporaba osobne zaštitne opreme</Text>
      <Text style={styles.text}>
Operateri se moraju koristiti odgovarajućom utvrđenom OZO, određenom 
na temelju procjene rizika, vodeći računa o uvjetima na mjestu rada i metodi 
rada koja se koristi.{'\n'}
</Text>
      <Text style={styles.blue}>Ovi uvjeti primjenjuju se na operatera i sve one koji se nalaze na mjestu rada.
      {'\n'}</Text>
      <Text style={styles.text}>Uz OZO, koja je propisana za radove u skladu s propisima i pravilima zaštite 
na radu – radu na visini, operateri moraju nositi OZO, kako je propisano u 
poglavlju 3. OUIR-NN ˝Mjere sprječavanja električnog udara˝ te u poglavlju 
4. OUIR-NN ˝Mjere sprječavanja kratkih spojeva˝.{'\n'}</Text>

      <Text style={styles.subtitle}>5.3. Zaštita glave</Text>
      <Text style={styles.text}>
Glava operatera mora biti zaštićena od posljedice:{'\n'}
– mehaničkih izvora opasnosti{'\n'}
– električnog udara{'\n'}
– kratkog spoja.{'\n'}{'\n'}
5.3.1. Mehanički izvori opasnosti
Zaštitna kaciga svojim karakteristikama koje proizlaze iz izrade i 
upotrijebljenih materijala mora osigurati zaštitu od mehaničkih ozljeda glave 
koje mogu biti posljedica:{'\n'}
– kretanja operatera, nekontroliranih ili nehotičnih pokreta glavom u blizini 
dijelova električnog postrojenja (npr. konzole na stupu, zidani dijelovi i 
drugi dijelovi opreme u transformatorskim stanicama i sl.){'\n'}
– nehotičnih udaraca komadima alata (npr. pad alata ili dijela opreme sa 
stupa na glavu operatera u blizini stupa){'\n'}
– nehotičnih udaraca dijelovima opreme pri transportu na visinu ili spuštanju 
opreme u kabelski rov{'\n'}
– ostalih izvora mehaničkih opasnosti za glavu operatera.{'\n'}

</Text>
      <Text style={styles.blue}>Radi ublažavanja udaraca i smanjivanja prijenosa energije udarca u glavu 
na vratne kralješke zaštitna kaciga može imati ugrađene ublaživače udaraca 
na središnjem gornjem dijelu kacige, poput umetaka s lomljivim plastičnim 
vijcima (eng. crash box, shock absorber).{'\n'}</Text>
      <Text style={styles.text}>5.3.2. Električni udar
OZO koja štiti od posljedica električnog udara (udarci zbog refleksnih 
reakcija…) je zaštitna kaciga izrađena od sintetičkog materijala, koja nema 
metalnih dijelova i ventilacijskih otvora.{'\n'}{'\n'}
5.3.3. Kratki spoj
Kratki spoj izaziva emisiju topline, UV zraka i prskanje iskri i komadića 
materijala.{'\n'}{'\n'}
Zaštita od toplinskih učinaka ostvaruje se zaštitnom kacigom s vizirom za 
lice, koja nema otvore za ventilaciju i koja se ne topi zbog učinka električnog 
luka. Vizir pruža zaštitu od UV zraka.{'\n'}{'\n'}
Kompletna zaštitna kaciga s vizirom pruža zaštitu od prskanja komadića 
materijala.{'\n'}</Text>

      <Text style={styles.subtitle}>5.4. Zaštita tijela{'\n'}</Text>
      <Text style={styles.text}>5.4.1. Operater je obvezan nositi odjeću koja nema nikakvih metalnih zatvarača i 
pokriva sve dijelove tijela, osim glave i šaka.{'\n'}
</Text>
      <Text style={styles.blue}>Iako neka odjeća može pružati i povećanu sigurnost, to ne oslobađa 
operatera obveze primjene poglavlja 3. OUIR-NN ˝Mjere sprječavanja električnog udara˝.{'\n'}</Text>
      <Text style={styles.text}>Odjeća koja bi mogla biti izravno izložena slučajnom učinku pojave 
električnog luka mora biti izrađena od materijala koji se ne topi ili gori zbog 
luka ili otvorenog plamena.{'\n'}</Text>
      <Text style={styles.blue}>Mješavina pamuka i sintetike može ograničiti učinke električnog luka i 
spriječiti širenje plamena.{'\n'}</Text>
      <Text style={styles.text}>Minimalni zahtjevi definirani su Propisnikom za osobna zaštitna sredstva 
(radno zaštitno odijelo TIP 6), uz dodatne uvjete da materijali za izradu 
patent-zatvarača, dugmadi i dr. budu od nevodljivih i nezapaljivih materijala.{'\n'}</Text>
      <Text style={styles.blue}>Radna odijela za rad pod naponom na niskom naponu trebaju biti izrađena 
od materijala koji zadovoljavaju ispitivanja minimalno prema normi HRN 
EN 61482-1-2 (ograničeni i usmjereni električni luk u zatvorenom prostoru), 
a poželjno i prema HRN EN 61482-1-1 (određivanje razreda otpornosti na 
električni luk upotrebom otvorenog luka). Također, prednost se može dati 
zaštitnoj odjeći koja dizajnom i materijalima upotrijebljenim u njenoj izradi 
pozitivno nadmašuje zahtjeve iz Propisnika za osobna zaštitna sredstva 
(primjerice, upotrebom materijala provjerenih i dokazanih u zaštiti od 
topline uključujući i zaštitu od prskanja otopljenih čestica metala, a koji 
ujedno osiguravaju lakša i prozračnija radna odijela). Zaštitna odjeća protiv 
toplinskih opasnosti od električnog luka mora zadovoljavati hrvatsku normu 
HRN EN 61482-2. Za električna postrojenja niskog napona radno odijelo bi 
trebalo imati oznaku klase 1 otpornosti na utjecaj električnog luka (4 kA/0,5 
s). Tkanine radnih odijela izrađene od bioceluloznih vlakana imaju bolja 
svojstva u odnosu na tkanine izrađene aramidnih vlakana.{'\n'}</Text>
      <Text style={styles.text}>5.4.2. Ako je nužno, operater može obući dodatnu osobnu zaštitnu opremu 
(primjerice kišnu kabanicu) preko njegove radne odjeće koja zadovoljava t. 
5.4.1. OUIR-NN.{'\n'}{'\n'}
Rukavi odjeće moraju se uložiti u izolacijske rukavice i ne smiju ih preklapati 
da ne bi poništile električnu zaštitu izolacijskih rukavica.{'\n'}{'\n'}
Ovratnik zaštitnog radnog odijela mora biti izveden tako da zajedno s vizirom 
pruža potpunu zaštitu vrata operatera i mora se zakopčati do kraja.{'\n'}
</Text>

      <Text style={styles.subtitle}>5.5 Zaštita nogu{'\n'}</Text>
      <Text style={styles.text}>5.5.1. Zaštitna obuća za izvođenje radova pod naponom na niskom naponu 
treba ispuniti opće i tehničke zahtjeve definirane u Propisniku za osobna 
zaštitna sredstva, gdje su navedeni opisi i tehničke specifikacije za niske 
zaštitne cipele bez metalnih dijelova (raz. S3) Tip 13 i visoke zaštitne cipele 
bez metalnih dijelova (raz. S3) Tip 14. Ove cipele upotrebljavaju se za rad u 
suhim uvjetima rada. Njihov opis nalazi se i u TOA-NN.{'\n'}{'\n'}
5.5.2. U Propisniku za osobna zaštitna sredstva definirani su opći tehnički zahtjevi s 
opisom i tehničkom specifikacijom za gumene čizme za izvođenje radova pod 
naponom na niskom naponu, a gumene čizme upotrebljavaju se za rad u vlažnim 
uvjetima rada (kiša, rosa, snijeg, led, mraz). Njihov opis nalazi se i u TOA-NN.{'\n'}</Text>


      <Text style={styles.subtitle}>5.6. Specifična zaštita izolacijskim rukavicama (rad u dodiru){'\n'}</Text>      
      <Text style={styles.text}>
5.6.1. Za rad s pomoću izolacijskih rukavica (rad u dodiru) predviđena je posebna 
zaštita dodatnim vanjskim rukavicama od silikonizirane kože (nadrukavice) 
ili se radi s pomoću kompozitnih izolacijskih rukavica.{'\n'}{'\n'}
Za učinkovitu izolaciju izolacijske rukavice moraju imati završni dio (manžeta) 
najmanje 5 cm dulji od vanjskih kožnih rukavica.{'\n'}
</Text>
      <Text style={styles.bold}>Izolacijske rukavice štite od električnog udara.{'\n'}
</Text>
      <Text style={styles.blue}>Dodatne rukavice od silikonizirane kože koje se postavljaju preko izolacijskih 
rukavica predstavljaju:{'\n'}
– mehaničku zaštitu{'\n'}
i{'\n'}
– zaštitu od topline nastale kratkim spojem.{'\n'}{'\n'}
Kompozitne izolacijske rukavice predstavljaju:{'\n'}
– zaštitu od električnog udara{'\n'}
– mehaničku zaštitu{'\n'}
i{'\n'}
– zaštitu od topline nastale kratkim spojem.{'\n'}</Text>
      <Text style={styles.text}>5.6.2. Kada se rad obavlja u pogonskoj prostoriji električnog postrojenja koja ima 
djelomično ili prirodno vodljivi pod, operater upotrebljava zaštitnu radnu 
obuću za rad pod naponom ili mora stajati na izolacijskom tepihu ili na 
izolacijskoj klupici.{'\n'}</Text>
      <Text style={styles.blue}>
Primjerice, betonski pod smatra se prirodno vodljivim.{'\n'}</Text>




      </View>
    </ScrollView>
  );
}

export default OUIR5;


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