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
 */

function OUIR3() {
  const navigation = useNavigation();
  const scrollEnabled = this.state.screenHeight > height;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.title}>3. MJERE SPRJEČAVANJA ELEKTRIČNOG UDARA
</Text>
      <Text style={styles.text}>Električni udar nastaje kada se operater nađe spojen na dva različita potencijala.
      {'\n'}{'\n'}Tijekom rada električni udar se sprječava tako da operater održi dovoljnu razinu 
izolacije između svih dijelova svog tijela, vodeći računa o vodljivim neizoliranim 
dijelovima koje mora uhvatiti i o aktivnim neizoliranim dijelovima s kojima može 
doći u dodir. Takva izolacija može se ostvariti zračnim razmakom ili odgovarajućom 
izolacijskom zaštitom{'\n'}</Text>
      <Text style={styles.blue}>Rad na aktivnim dijelovima
</Text>
      <Text style={styles.subtitle}>
3.1. Načela rada operatera</Text>
      <Text style={styles.text}>3.1.1. Operater mora biti svjestan da sebe smatra vodljivim i na potencijalu zemlje. 
Uporaba dodatnih zaštitnih sredstava i opreme protiv električnog udara 
opisanih u poglavlju 7. Uvjeta za izvođenje radova pod naponom na niskom 
naponu (u daljnjem tekstu UIR-NN) “Specijalni radni postupci” ne mora 
uvijek zaštititi operatere koji koriste metodu rada na dodiru.{'\n'}</Text>
      <Text style={styles.blue}>Uporaba koloturnika od izolacijskog materijala, dizalica s izoliranom košarom, 
izolacijskih tepiha, specijalnih čizama ili cipela, u pojedinim slučajevima nije 
dovoljna zaštita operatera.{'\n'}</Text>
      <Text style={styles.text}>3.1.2. Ako nema zaštitne opreme, operater je dužan održavati udaljenost (razmak) 
koja je jednaka ili veća MUP-NN od 0,30 m između nezaštićenih dijelova 
svog tijela od:{'\n'}
– aktivnih dijelova{'\n'}
– vodljivih dijelova koji također moraju biti na MUP-NN, a s kojima bi mogao 
doći u dodir{'\n'}{'\n'}
i to mora održavati tijekom cijelog trajanja rada i kod svih pokreta.{'\n'}{'\n'}</Text>
      <Text style={styles.bold}>Zaštitna oprema uključuje uporabu odgovarajućih izolacijskih rukavica.</Text>
      <Text style={styles.text}>{'\n'}{'\n'}3.1.3. Operater mora voditi računa da vodljive neizolirane dijelove na kojima ne 
radi izravno, a koji su na mjestu rada, zaštiti određenim zaštitnim sredstvima 
tako da zadovolji uvjete kako slijedi.
Ako se ne može zadovoljiti MUP-NN od 0,30 m, tada operater mora sve 
aktivne neizolirane dijelove staviti izvan dohvata:{'\n'}
– izolirajući ih odgovarajućim izolacijskim sustavima{'\n'}
ili{'\n'}
– uvođenjem izolacijskih barijera onemogućiti dodir s njima{'\n'}
ili{'\n'}
– izolirajući nezaštićene dijelove svog tijela tako da mogu doći i na 
udaljenost manju od 0,30 m od aktivnih dijelova, odnosno od vodljivi 
dijelova s kojima može doći u dodir.{'\n'}</Text>
      <Text style={styles.blue}>Nošenje izolacijskih rukavica predviđeno u poglavlju 3. OUIR-NN predviđa 
zaštitu koja zadovoljava zahtjeve iz ovog uvjeta.{'\n'}</Text>
      <Text style={styles.subtitle}>3.2. Načela za vodljive dijelove{'\n'}</Text>
      <Text style={styles.text}>3.2.1. Dohvatljivi vodljivi dijelovi
Ako su pojedini vodljivi neizolirani dijelovi dohvatljivi ili bi mogli biti na 
udaljenosti manjoj od 0,30 m od aktivnih neizoliranih dijelova, tada operater 
treba provesti mjere zaštite tako da se zaštiti od tih dijelova.3.2.2. Neutralni vodič
Za potrebe zaštite od električnog udara neutralni vodič se u svim okolnostima 
mora smatrati aktivnim vodičem.{'\n'}
</Text>
<Text style={styles.text}>3.2.2. Neutralni vodič
Za potrebe zaštite od električnog udara neutralni vodič se u svim okolnostima 
mora smatrati aktivnim vodičem.{'\n'}
</Text>
      <Text style={styles.subtitle}>3.3. Metode rada pod naponom na niskom {'\n'}</Text>
      <Text style={styles.text}>3.3.1. Metoda rada na udaljenosti
Metoda rada na udaljenosti uporabom izolacijskih cijevi predviđa:{'\n'}
– zadržavanje izvan MUP-NN od 0,30 m od aktivnih neizoliranih dijelova{'\n'}
i{'\n'}
– uporabu odgovarajućih (odobrenih) izolacijskih alata.{'\n'}{'\n'}
3.3.2. Metode rada u dodiru
Korištenje metode rada u dodiru uključuje nošenje izolacijskih rukavica da 
bi se moglo doći u dodir s neizoliranim aktivnim dijelovima na kojima se radi 
izravno ili uporabom alata.{'\n'}</Text>
      <Text style={styles.blue}>Kod metode rada s izolacijskim rukavicama, savitljivi izolacijski pokrivač 
skida se samo za vrijeme i na mjestu samog zahvata. Nakon završetka 
rada na izoliranom vodiču, izolaciju treba obnoviti, a sve pokrivače skinuti 
obrnutim redoslijedom.{'\n'}
</Text>
      <Text style={styles.subtitle}>3.4. Čišćenje tekućinama</Text>
      <Text style={styles.text}>Operater mora uvijek biti dalje od 0,30 m od aktivnih neizoliranih dijelova, 
bez obzira na to je li ili nije zaštićen OZO-om.{'\n'}</Text>
      <Text style={styles.subtitle}>3.5. Zona približavanja</Text>
      <Text style={styles.text}>Prije početka rada operater mora utvrditi mjesto rada i voditi računa o svim 
aktivnim neizoliranim NN dijelovima, bez obzira na to jesu li u tom prostoru, 
primjenjujući postupke propisane u OUIR-NN.{'\n'}{'\n'}
Za ostale aktivne neizolirane dijelove SN ili VN operater mora:{'\n'}
– biti ovlašten za rad u blizini tih dijelova{'\n'}
– identificirati elemente koji određuju zonu približavanja{'\n'}
– primijeniti propise koji se odnose na rad u blizini SN ili VN opreme za 
svaki dio.{'\n'}</Text>
      <Text style={styles.blue}>Ti propisi su utvrđeni u Pravilima i mjerama sigurnosti pri radu na električnim 
postrojenima.{'\n'}</Text>
      <Text style={styles.subtitle}>3.6. Dodatna zaštita kod metode rada u dodiru
</Text>
      <Text style={styles.text}>Kada okolina, položaj rada ili uvjeti na mjestu rada predviđaju stalni dodir 
između nezaštićenog dijela tijela operatera i zemlje ili poda, pri čemu se to 
ne može izbjeći, operater mora voditi računa o provođenju dodatnih mjera 
zaštite.{'\n'}{'\n'}
Dodatna zaštita nikada ne oslobađa operatera od potrebe uporabe zaštitnih 
izolacijskih rukavica.{'\n'}</Text>
      <Text style={styles.subtitle}>3.7. Rad u rovovima, tunelima i uskim prostorima
</Text>
      <Text style={styles.blue}>Napomena:{'\n'}
Mjere sprječavanja električnog udara moraju biti proširene i zaštitom od 
kratkog spoja, u skladu s poglavlje 4. ˝Mjere sprječavanja kratkih spojeva˝ 
OUIR- NN.{'\n'}</Text>
      <Text style={styles.text}>Savitljivi izolacijski pokrivači upotrebljavaju se kod izoliranja zemlje i 
susjednih aktivnih neizoliranih dijelova (u tijesnim, uskim prostorima) i kod 
rada u rovovima i tunelima.{'\n'}{'\n'}
Zidovi iskopa (kanala, rova) su na potencijalu zemlje i moraju se zaštititi 
izolacijskim materijalom.{'\n'}
</Text>
      <Text style={styles.subtitle}>3.8. Rad u zatvorenim prostorima
</Text>
      <Text style={styles.text}>Operater koji ne nosi specijalne cipele ili čizme mora stajati na izolacijskom 
tepihu ili postolju.{'\n'}</Text>
      <Text style={styles.blue}>U svim slučajevima operater sebe smatra vodljivim i na potencijalu zemlje.
      {'\n'}</Text>
      <Image style={styles.image} source={require('./image2.png')}/>
      <Image style={styles.image} source={require('./image3.png')}/>
      <Text style={styles.blue}>Operater nosi izolacijske rukavice i silikonizirane kožne nadrukavice ili kompozitne 
izolacijske rukavice.
</Text>





      </View>
    </ScrollView>
  );
}

export default OUIR3;


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