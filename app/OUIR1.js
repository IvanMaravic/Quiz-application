import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

state = {
  screenHeight: 0,
}

function OUIR1() {
  const navigation = useNavigation();
  const scrollEnabled = this.state.screenHeight > height;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.title}>
          1. OPIS I PODRUČJE PRIMJENE OUIR-NN
        </Text>
        <Text style={styles.blue}>
          Opći uvjeti za izvođenje radova (u daljnjem tekstu OUIR-NN) primjenjuju se na radove pod naponom na električnim postrojenjima niskog napona, do 1000 V izmjenično i do 1500 V istosmjerno.{'\n'}Oni su usklađeni sa zahtjevima norme HRN EN 50110-1.
        </Text>
        <Text style={styles.subtitle}>1.1. Područje primjene OUIR-NN</Text>

        <Text style={styles.text}>         
OUIR-NN namijenjeni su za korištenje osobama na radu koje su osposobljene
i uključene u izvođenju radova pod naponom na električnim postrojenjima
niskog napona kako je to definirano važećim Pravilnikom o zaštiti na radu pri
korištenju električne energije.{'\n'}{'\n'}
Uvjeti za izvođenje radova (OUIR-NN) su opća pravila koja moraju poštovati
radnici koji rade pod naponom.{'\n'}{'\n'}
Karakteristike i uvjeti korištenja pojedinih odgovarajućih alata i opreme
opisani su u dokumentu Tehnički opis alata (u daljnjem tekstu TOA).{'\n'}{'\n'}
OUIR-NN pokrivaju područje rada pod naponom (RPN) na malim naponima
i na niskom naponu (NN) na konstrukcijama, instalacijama i opremi,
korištenjem metoda rada: {'\n'}
- na udaljenosti i{'\n'}
- u dodiru s izolacijskim rukavicama.{'\n'}{'\n'}
</Text>

<Text style={styles.bold}>
  Nije dopuštena primjena metode rada na potencijalu.{'\n'}{'\n'}
</Text>

<Text style={styles.blue}>
  Rad na potencijalu nije dopušten zbog malih udaljenosti između dijelova
električnog postrojenja na različitim fiksnim potencijalima i zbog toga što
se operater, bez obzira na načine izoliranja dijelova na potencijalu zemlje,
uvijek smatra galvanski vezanim uz potencijal zemlje.{'\n'}{'\n'}
</Text>

<Text style={styles.text}>
OUIR-NN pokriva rad pod naponom i čišćenje na:
- nadzemnim i podzemnim sustavima za distribuciju električne energije,
javnu rasvjetu i priključcima{'\n'}
- na javnim i privatnim instalacijama, električnoj opremi, vodovima i
uređajima{'\n'}
- kontrolnim, mjernim i telekomunikacijskim krugovima, uključivo i
napajanje njihovih sekundarnih krugova{'\n'}
- akumulatorskim baterijama i njihovim energetskim krugovima{'\n'}
- električnim vodovima, usponskim vodovima i servisnim sustavima.{'\n'}{'\n'}
Korištenje postupaka radova pod naponom na NN prati obveza korištenja
svih pravila koje omogućuju električni i svaki drugi rad u blizini neizoliranih
aktivnih NN dijelova.{'\n'}{'\n'}
Ipak ovi Uvjeti (OUIR-NN) moraju se primjenjivati i za pojedine specifične NN
radove, u skladu s postupkom radova pod naponom:{'\n'}
- pomicanje neizoliranih nadzemnih vodiča{'\n'}
- rad na NN dijelovima kombiniranih SN/NN sustava{'\n'}
- spajanje i odspajanje izoliranih vodova u razvodnim ormarima i završnim
spojnim razvodnim napravama{'\n'}
- čišćenje{'\n'}
- radni zahtjevi uporabe neizoliranih ili nedovoljno izoliranih savitljivih
kućišta (pregrade, barijere, savitljive izolacijske pokrivače …).{'\n'}{'\n'}
Postupci radova pod naponom ne pokrivaju ELV (MN) mali napon opremu
koja radi za:{'\n'}
- + SELV: ELV (MN) instalacije kod kojih su svi aktivni dijelovi izolirani od
ostalih instalacija dvostrukom ili pojačanom izolacijom s jedne strane i
koje su izolirane od zemlje i svih zaštitnih vodiča koji pripadaju nekoj
drugoj instalaciji s druge strane.{'\n'}
- + PELV: ELV (MN) instalacije u kojoj su svi aktivni dijelovi izolirani i
galvanski odvojeni preko transformatora za odvajanje od aktivnih dijelova
svih drugih instalacija.{'\n'}
- Telekomunikacijske, mjerne, kontrolne i upravljačke krugove kod
električnih distribucijskih mreža koje koriste napone koji ne prelaze 100
V (korištenje telefonske tehnike s vodičima presjeka jednakog ili manjeg
od 0,6 mm2).{'\n'}{'\n'}
U skladu s ovim Uvjetima, obukom treba osposobiti i kvalificirati operatere
da na vodovima mogu raditi kako slijedi:{'\n'}
- Određene NN radove na javnim rasvjetnim sustavima, kao što su zamjena
nepomičnog pribora ili neizoliranog pribora. Rad pod naponom na
sustavima javne rasvjete mora dodatno biti proveden u skladu s obilježjima
tog rada i tih instalacija, kako je to utvrđeno u HRN EN 50110-1.{'\n'}
- Određena mjerenja kao što su ona koja traže prekid neizoliranih NN
krugova radi umetanja uređaja za mjerenje ili omogućavanja premošćenja
ili dodir s neizoliranim aktivnim dijelovima.{'\n'}
- Određena ispitivanja kao što su ispitivanja dielektrične čvrstoće (otpor
izolacije) ili ispitivanja neprekinutosti strujnog kruga te radnih platformi i
laboratorijskih ispitivanja.{'\n'}{'\n'}
Tijekom mjerenja ili ispitivanja provedenih po Uvjetima (OUIR-NN) moraju
se poštovati pravila utvrđena u HRN EN 50110-1 i specifičnih potreba
(identifikacija kabela u rovu i slično).{'\n'}{'\n'}
Uvjeti (OUIR-NN) omogućavaju sve moguće primjene i za svakog se radnika
mora definirati područje specifične primjene aktivnosti te voditi računa o:{'\n'}
- karakteristikama odgovarajuće opreme i instalacija{'\n'}
- aktualnim zahtjevima za radom pod naponom{'\n'}
- kvalifikaciji odgovarajućeg osoblja.{'\n'}{'\n'}
Osim toga, svaki operater mora poznavati i granice primjene svakog od
specifičnih poslova navedenih u UIR-Specijalni radovi.{'\n'}{'\n'}
Zdravstveni uvjeti koje operater mora ispunjavati kako bi mogao pohađati
obuku za rad pod naponom i primjenjivati rad pod naponom definirani su
dokumentom Pravila i mjera sigurnosti pri radu na električnim postrojenjima
Društva.{'\n'}{'\n'}
</Text>
<Text style={styles.subtitle}>
  1.2. Podjela električne opreme
  </Text>



<Image style={styles.image} source={require('./tablica1.png')}/>
<Text style={styles.blue}>
  * Spajanje i odspajanje aktivnih podzemnih kabela na razvodnim kutijama i
ormarićima predstavlja radne postupke iz kategorije U, a ne iz P kategorije,
kao pripreme neizoliranih kabela.{'\n'}{'\n'}
Zaštitne naprave (zasloni, pregrade, savitljivi izolacijski pokrivači i zaštitni
omotači) koje pokrivaju drugu opremu utvrđene su normom HRN EN 50110-1.
</Text>



      </View>
    </ScrollView>
  );
}
export default OUIR1;

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
    textAlign: 'justify',
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



/* 
<Text style={styles.text}></Text>
<Text style={styles.title}></Text>
<Text style={styles.subtitle}></Text>
<Text style={styles.blue}></Text>
<Text style={styles.bold}></Text>
 */

