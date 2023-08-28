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
      <Text style={styles.title}>2. PRIPREMA RADA I RADNOG MJESTA{'\n'}

</Text>
      <Text style={styles.subtitle}>2.1. Priprema rada i identifikacija razvodne opreme
</Text>
      <Text style={styles.text}>2.1.1. Prije početka rada{'\n'}
Prije početka svakog rada operater mora dobiti informacije potrebne za 
izvođenje rada i one o mogućim opasnostima.{'\n'}
</Text>
      <Text style={styles.blue}>Informacije se odnose na:{'\n'}
– identifikaciju opreme ili dijela električnog postrojenja{'\n'}
– narav posla koji treba obaviti i specijalnu opremu kojom se treba koristiti{'\n'}
– okolinu i mogućnost pristupa i parkiranja, na mjestu rada{'\n'}
– stanje električnog postrojenja (smjer napajanja, opterećenje) {'\n'}
– koordinaciju rada kada je to potrebno za složene poslove{'\n'}
– procjenu rizika s gledišta sigurnog izvođenja rada{'\n'}{'\n'}
a prikupila ih je osoba koja je obavila pripremu rada.{'\n'}</Text>

      <Text style={styles.text}>2.1.2. Obveze rukovoditelja radova nakon dolaska na mjesto rada
Nakon dolaska na mjesto rada rukovoditelj radova mora:{'\n'}
– identificirati mjesto rada, električno postrojenje ili opremu na kojoj treba 
raditi{'\n'}</Text>

      <Text style={styles.blue}>Način te identifikacije ovisi o naravi i vrsti opreme.
      {'\n'}</Text>

      <Text style={styles.text}>– analizirati potrebni rad i njemu pridružene opasnosti u smislu:{'\n'}
 • potrebnih radnih postupaka{'\n'}
 • naravi opreme ili instalacije{'\n'}
 • okoline (blizina cesta, pruge i slično){'\n'}
 • raspoloživosti specijalne opreme (platforme, dizalice i slično).{'\n'}</Text>
      
      <Text style={styles.blue}>Rukovoditelj radova mora ispitati mjesto i opremu po redu kako bi utvrdio 
potrebne mjere za:{'\n'}
– olakšanje pokreta na terenu (rovovi, rupe, ograde itd.){'\n'}
– ograničenje prometa i parkiranja ispod vodiča{'\n'}
– pozicioniranja radne opreme.{'\n'}
</Text>

      <Text style={styles.subtitle}>2.2. Upućivanje operatera
</Text>

      <Text style={styles.text}>Prije početka novog i nastavljanja započetog posla, rukovoditelj radova 
mora svim operaterima, okupljenima zajedno, dati informacije i upute o 
sljedećem:{'\n'}
– mjestu rada{'\n'}
– dodjele uloga operaterima{'\n'}
– redoslijedu radnih postupaka{'\n'}
– uvjetima pod kojima će se koristiti alatom i opremom.{'\n'}{'\n'}
Rukovoditelj radova mora dobiti potvrdu operatera o razumijevanju i 
prihvaćanju radnog zadatka.{'\n'}</Text>

      <Text style={styles.subtitle}>2.3. Priprema na mjestu rada
</Text>

      <Text style={styles.text}>Kod pripreme radnog mjesta, rukovoditelj radova treba: {'\n'}
– Biti siguran da svi operateri imaju čvrsti oslonac (opasnost od poskliznuća) 
tako da je njihov radni položaj stabilan.{'\n'}
– Odrediti prostor za odlaganje alata i opreme.{'\n'}</Text>

      <Text style={styles.blue}>Primjerice, rukovoditelj radova treba odrediti:{'\n'}
– položaj ljestava ili položaj platforme{'\n'}
– položaj servisnog užeta i užadi za manevriranje, ovisno o položaju 
koloturnika i platforme za dizanje{'\n'}
– položaj ostalih vozila.{'\n'}{'\n'}
Položaj užeta bira se posebno kako bi se spriječilo da radnik koji radi na 
zemlji u blizini stupa ili je ispod vodiča ne bude u opasnosti od eventualnog 
pada predmeta.{'\n'}</Text>

      <Text style={styles.text}>Postaviti ceradu na tlo da bi na nju složio alat i opremu.
      {'\n'}</Text>

      <Text style={styles.blue}>Time se osigurava da su alati čisti i da njihove izolirane površine ne mogu 
biti oštećene.{'\n'}</Text>

      <Text style={styles.text}>– Poduzimati mjere sprječavanja pristupa mjestu rada svim osobama 
koje nisu navedene u ispravama za rad postavljajući propisane znakove 
(upozorenja, opasnosti …).{'\n'}</Text>

      <Text style={styles.blue}>To se primjenjuje posebno pri radu u vanjskom prostoru.
Signalizaciju mogu postaviti i sami radnici radi sprječavanja neovlaštenog 
pristupa mjestu rada.{'\n'}
</Text>

      <Text style={styles.text}>– Poduzimati mjere za sprječavanje moguće opasnosti dodira s aktivnim 
neizoliranim dijelovima i svim naponskim razinama, na kojima se u blizini 
ne radi.{'\n'}</Text>

      <Text style={styles.blue}>Mjere uključuju sljedeće:{'\n'}
– stavljanje aktivnih neizoliranih dijelova izvan dodira{'\n'}
– postavljanje zapreke{'\n'}
ili{'\n'}
– njihovo izoliranje.{'\n'}</Text>

      <Text style={styles.text}>– Omogućiti vidljivost postavljanjem pomoćne rasvjete ako je rasvjeta 
mjesta rada nedovoljna ili postoji opasnost da bude zaklonjena.{'\n'}</Text>
      <Text style={styles.blue}>Takva rasvjeta može biti, primjerice, svjetiljka montirana na zaštitnu kacigu.
      {'\n'}</Text>

      <Text style={styles.text}>– Uvjeriti se da svaki operater u timu zna svoju zadaću.
      {'\n'}</Text>

      <Text style={styles.subtitle}>2.4. Mjere za novi početak rada nakon prekida rada
</Text>

      <Text style={styles.text}>Prije ponovnog započinjanja radova nakon prekida, rukovoditelj radova 
mora analizirati mjesto rada tako da se nastavak rada smatra kao da je riječ 
o novom mjestu rada i mora se uvjeriti da su sve mjere, koje su na početku 
rada provedene, još na snazi i da se rad može nastaviti, odnosno mora te 
mjere obnoviti ako je potrebno.{'\n'}{'\n'}
Nakon ispravljanja početnih mjera rukovoditelj radova mora svim operaterima 
ponovno prenijeti sve informacije i upute nužne za nastavak rada.</Text>

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