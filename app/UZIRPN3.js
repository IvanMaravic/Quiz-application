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
      <Text style={styles.title}>3. ORGANIZACIJA RADOVA I IZVOĐENJE{'\n'}
</Text>

      <Text style={styles.subtitle}>3.1. Zahtjevi koji se odnose na električno postrojenje i opremu
</Text>

      <Text style={styles.text}>Rad pod naponom ne može se izvoditi{'\n'}
– u prostorima gdje postoji opasnost od eksplozije.{'\n'}</Text>

      <Text style={styles.subtitle}>3.2. Uloga operatera
</Text>

      <Text style={styles.text}>3.2.1. Svi operateri, bez obzira na njihovu ulogu na mjestu rada, moraju:{'\n'}
– imati Ovlaštenje za rad na električnom postrojenju i opremi navedenoj u 
Nalogu za rad{'\n'}
– voditi računa o vlastitoj sigurnosti i poduzimati mjere zaštite na radu od 
mogućih opasnosti na mjestu rada{'\n'}
– koristiti se alatom i opremom namijenjenom za izvođenje predviđenog 
rada{'\n'}
– primjenjivati propise iz norme HRN EN 50110-1, iz UIR-NN i iz TOA-NN
– biti informirani o namjerama svih članova tima i informirati ostale o 
vlastitim namjerama.{'\n'}{'\n'}
3.2.2. Operateri moraju slijediti upute dobivene od rukovoditelja radova.{'\n'}</Text>

      <Text style={styles.subtitle}>3.3. Uloga rukovoditelja radova
</Text>

      <Text style={styles.text}>3.3.1. Tijekom rada{'\n'}
Kada je rad u tijeku rukovoditelj radova mora, uz sva ostala zaduženja koja 
se odnose na njegove zadaće, raditi i sljedeće.{'\n'}{'\n'}
– Neprestano nadgleda i koordinira rad operatera tijekom svih koraka rada i 
treba biti siguran da operateri i svi pomoćnici, koji nemaju Ovlaštenje za rad 
pod naponom, slijede u potpunosti dane im upute, tako da su ispunjeni uvjeti:{'\n'}
 • svi razumiju ispravno svoje dužnosti{'\n'}
 • upućuju ostale o svojim namjerama.{'\n'}</Text>

      <Text style={styles.blue}>Kod takvog nadgledanja, rukovoditelj radova samostalno odlučuje odakle 
treba nastaviti rad i prema potrebi imenuje zamjenu za osobu koju udaljava 
s mjesta rada.{'\n'}{'\n'}
Rukovoditelj radova mora osigurati da, u slučaju potrebe mijenjanja položaja 
ili mjesta rada, operater koji izvodi tu promjenu obavijesti ostale operatere 
u blizini o toj namjeri.
U slučaju nestanka napona, rukovoditelj radova mora prekinuti rad.{'\n'}
</Text>

      <Text style={styles.text}>– Imenuje svog zamjenika ako je riječ o prostorno vrlo velikom mjestu 
rada pa sam ne može nadgledati čitav prostor. Tako imenovani zamjenik 
mora imati Ovlaštenje za rad pod naponom koje obuhvaća poslove koje 
nadgleda.{'\n'}</Text>

      <Text style={styles.blue}>Za takvo nadgledanje, određeni zamjenik slobodan je odabrati jednaki 
način provođenja rada kao što radi i osoba zadužena za nadgledanje radova 
(rukovoditelj radova).{'\n'}</Text>

      <Text style={styles.text}>– Rukovoditelj radova, prema potrebi, može sam ili s drugim operaterima 
izvoditi i pojedine korake RPN-a na samom mjestu rada i ako je mjesto 
rada ograničeno (osoba za nadgledanje rada koja se nalazi na stupu ne 
može nadgledati radnika na drugom stupu).{'\n'}
</Text>

      <Text style={styles.blue}>Te mogućnosti za istodobni rad i nadgledanje primjenjuju se kod:{'\n'}
– razvodnih ormarića{'\n'}
– podzemnih kabela{'\n'}
– nadzemnih vodova ili neizoliranih vodiča, kada rukovoditelj rada i operater 
rade na jednakoj razini stupa istog voda.{'\n'}


</Text>

      <Text style={styles.text}>– Osoba zadužena za nadgledanje ili rukovoditelj radova mogu privremeno 
zaustaviti operatere i osobno izvesti neki korak rada pod naponom.{'\n'}{'\n'}
3.3.2. Promjene u postupku{'\n'}{'\n'}
3.3.2.1. Ako se pojave određene poteškoće koje zahtijevaju da se radni postupak 
bitno izmijeni u odnosu na prvobitno planirani, rukovoditelj rada mora:{'\n'}
– zaustaviti rad i proglasiti privremeni prekid rada{'\n'}
– zatražiti od operatera da napuste mjesto rada{'\n'}
– provesti novu analizu{'\n'}
– upoznati ostale s novim odlukama.{'\n'}</Text>

      <Text style={styles.blue}>Sve te odluke moraju biti proslijeđene voditelju postrojenja.
</Text>

      <Text style={styles.text}>3.3.2.2. Ako dođe do promjene rukovoditelja rada, novi rukovoditelj rada mora:{'\n'}
– informirati sve operatere{'\n'}
– proučiti mjesto rada prije nego što ga preuzme{'\n'}
– informirati o tome voditelja postrojenja.{'\n'}</Text>

      <Text style={styles.text}>3.3.3. Prekid rada{'\n'}{'\n'}
3.3.3.1. Ako se rad mora neočekivano prekinuti na dulje vrijeme i taj prekid može 
prouzročiti:{'\n'}
– odgodu predviđenog vremena za završetak rada{'\n'}
ili{'\n'}
– u potpunosti napuštanje tog rada{'\n'}{'\n'}
tada rukovoditelj radova mora:{'\n'}
– informirati o tome voditelja električnog postrojenja.{'\n'}
</Text>

      <Text style={styles.blue}>Primjerice, kada iznenadne vremenske okolnosti prekinu rad na otvorenom, 
tada treba:</Text>

      <Text style={styles.text}>
– uvjeriti se da se neizolirani vodljivi dijelovi nalaze na sigurnoj udaljenosti 
od drugih neizoliranih dijelova na različitom potencijalu{'\n'}
– ako treba, mora provjeriti da je svaki ugrađeni izolacijski sustav prekrivanja 
i sustav premosnica dobro i stabilno učvršćen{'\n'}
– ako treba, mora ukloniti opremu zbog opasnosti od poplavljivanja{'\n'}</Text>

      <Text style={styles.blue}>To se može dogoditi ako se rad obavlja na vanjskim razvodnim ormarićima.{'\n'}
</Text>

<Text style={styles.text}>
– ukloniti sve alate s mjesta rada koji nisu nužni.{'\n'}{'\n'}
3.3.3.2. Ako prekid rada koji je započet traži potpuno napuštanje rada, rukovoditelj 
radova mora osigurati:{'\n'}
– završetak koraka rada koji je započet{'\n'}
– poduzeti sve nužne mjere da mjesto rada bude sigurno od pristupa 
neovlaštenih osoba.{'\n'}{'\n'}
3.3.4. Ponovni početak rada{'\n'}
Prije nego što ponovno započne rad, rukovoditelj radova mora pregledati 
mjesto rada i uvjeriti se:{'\n'}
– da je mjesto rada u redu i da nije pretrpjelo veća oštećenja koja bi mogla 
utjecati na početno planirani raspored rada{'\n'}
– da su svi neizolirani vodljivi dijelovi na različitom potencijalu ostali na 
dovoljnoj udaljenosti{'\n'}
– da su svi izolacijski sustavi i premosnice ispravni i da ih je moguće 
upotrijebiti{'\n'}
– informirati voditelja električnog postrojenja o ponovnom početku rada.</Text>


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