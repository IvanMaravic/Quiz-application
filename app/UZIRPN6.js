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
      <Text style={styles.title}>6. RAD NA UREĐAJIMA I OPREMI{'\n'}</Text>

      <Text style={styles.subtitle}>6.1. Opća pravila</Text>

      <Text style={styles.text}>6.1.1. Uvjeti uočljivosti
Rad na uređajima ili opremi dopušten je samo ako su uređaji ili oprema 
pristupačni i dobro vidljivi.{'\n'}</Text>

      <Text style={styles.blue}>Uređaji i oprema su dobro vidljivi kada, primjerice, nema nikakvih tragova 
oštećenja na kućištu ili pojačanog zagrijavanja ili neuobičajenih zvukova iz 
njih.{'\n'}</Text>

      <Text style={styles.text}>6.1.2. Oprema punjena izolacijskim materijalom
Ako su uređaj ili oprema ispunjeni izolacijskim materijalom nepoznatog tipa, 
operater mora otvoriti redom čitavo kućište da odredi vrstu materijala.{'\n'}{'\n'}
Ako je materijal hladno lijevan ili krhak, moguće je i dopušteno njegovo 
skidanje pod naponom.{'\n'}{'\n'}
Ako je materijal nekog drugog tipa, onda se taj materijal ili kućište pribora ne 
smiju skidati pod naponom.{'\n'}{'\n'}
6.1.3. Uklanjanje kućišta, okvira i poklopaca
Prije pomicanja poklopca, okvira ili ograde s određenog uređaja da bi se 
došlo do aktivnih neizoliranih dijelova, operater mora biti siguran da nema 
vodljivih predmeta na uređaju, koji slučajnim padom mogu izazvati kratki 
spoj.{'\n'}{'\n'}
Pri pomicanju elementa operater mora izbjegavati nagle i nekontrolirane 
pokrete.{'\n'}</Text>

      <Text style={styles.blue}>Čak i mali dijelovi (čavli, igle, vijci i drugo) mogu izazvati kratki spoj i njihovo 
uklanjanje smatra se radom pod naponom.{'\n'}</Text>

      <Text style={styles.text}>Kod skidanja metalnog plašta, operater mora računati na opasnost kratkog 
spoja koji može nastati tijekom skidanja tog plašta.{'\n'}</Text>

      <Text style={styles.blue}>To je posebno slučaj kod poklopaca starih osigurača (pancer) kada su 
oštećeni izolacijski dijelovi ili ih uopće nema i kada je izolacija vodiča krhka 
ili lomljiva.{'\n'}</Text>

      <Text style={styles.text}>To je posebno slučaj kod poklopaca starih osigurača (pancer) kada su 
oštećeni izolacijski dijelovi ili ih uopće nema i kada je izolacija vodiča krhka 
ili lomljiva.{'\n'}</Text>

      <Text style={styles.blue}>Ako se vodič oslobodi od neke čvrste točke na koju je bio spojen i tijekom 
odspajanja dođe do oslobađanja nekog drugog vodiča ili dijelova opreme 
(primjerice, jednim vijkom su bila učvršćena dva vodiča), ako ih se ne drži 
pod kontrolom može doći do kratkog spoja.{'\n'}</Text>

      <Text style={styles.text}>Ako operater uoči mogućnost takve pojave, mora poduzeti potrebne mjere 
postavljanjem izolacijskih naprava.{'\n'}</Text>

      <Text style={styles.blue}>Takve mjere mogu biti, primjerice, prekrivanje neizoliranih aktivnih dijelova.
      {'\n'}</Text>

      <Text style={styles.text}>6.1.5. Učinci mehaničkog opterećenja na vodičima i stezaljkama
Prije oslobađanja naprave ili dijelova naprave u točki njihovog učvršćenja 
operater mora osigurati da postojeće mehaničko opterećenje na vodičima i 
stezaljkama vodiča tijekom skidanja neće prouzročiti kratki spoj.{'\n'}</Text>

      <Text style={styles.blue}>Taj rizik može se izbjeći odspajanjem vodiča prije skidanja, ako je potrebno.
      {'\n'}</Text>

      <Text style={styles.text}>Uvjeti definirani u prethodnom poglavlju moraju se poštovati kod postavljanja 
ili skidanja uređaja.{'\n'}</Text>

      <Text style={styles.blue}>Ako su dijelovi dovoljno pristupačni, oni trebaju biti spajani nakon učvršćivanja 
uređaja ili pojedinih drugih dijelova uređaja.{'\n'}</Text>

      <Text style={styles.text}>6.1.6. Izoliranje krajeva vodiča
Operater mora izolirati krajeve svih vodiča na fiksnom ili lutajućem potencijalu 
uvijek kada ih miče iz njihovih stezaljki.{'\n'}</Text>

      <Text style={styles.subtitle}>6.2. Zamjena uređaja ili dijelova uređaja
</Text>

      <Text style={styles.text}>6.2.1. Ako strujni krug treba održavati pod naponom operater mora premosnicom 
premostiti električki uređaj prije nego ga odspoji. Takvo premošćivanje mora 
ostati tijekom cijelog vremena trajanja radnog postupka zamjene uređaja.{'\n'}</Text>

      <Text style={styles.blue}>Ako uređaj nije opterećen, a treba ga zamijeniti, može ga se demontirati i 
postavljati bez premosnice (a može i bez napona).{'\n'}</Text>

      <Text style={styles.text}>Ako strujni krug nije nužno držati pod naponom, uređaj se može odspajati 
i spajati u skladu s vrijednostima najvećih strujnih vrijednosti u strujnom 
krugu, kako je to određeno u poglavlju 5, tablica u točki 5.4.3 UIR-NN.{'\n'}</Text>

      <Text style={styles.blue}>Operater je odgovoran za odluku hoće li ili neće prekidati strujni krug. 
      {'\n'}</Text>

      <Text style={styles.text}>6.2.2. Zamjena pojedinog dijela uređaja{'\n'}{'\n'}
Kod zamjene pojedinog dijela uređaja treba poštovati uvjete:{'\n'}
– Učvrstiti zamijenjeni dio koji je dostupan s prednje strane.{'\n'}
– Zamjenom dijela uređaja na kojem su izolacijske pregrade, učvršćene 
konstrukcijski, ne moraju se upotrijebiti dodatni izolacijski pokrivači; 
ako su uvjeti drukčiji (odspajanjem dijela uređaja ispada i izolacijska 
pregrada), treba dijelove pod naponom odvojiti izolacijskim pregradama 
ili pokrivačima i tako ih zaštititi prije početka rada.{'\n'}</Text>

      <Text style={styles.blue}>Elementi moraju biti čvrsto spojeni, pritegnuti vijcima, utaknuti itd.{'\n'}{'\n'}
Radni postupak može se sastojati od zamjene dijelova koji su različiti od 
prvotnih, primjerice, zamjena osigurača osiguračem drukčijih karakteristika.{'\n'}{'\n'}
Kod pojedinih uređaja pomicanje učvršćenih kontakata može izazvati pad 
tih izolacijskih pregrada.{'\n'}{'\n'}
Dijelovi učvršćeni sa stražnje strane ne mogu se zamjenjivati bez uklanjanja 
uređaja, osim ako nisu tako postavljeni da su pristupačni sa stražnjih strana.</Text>
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