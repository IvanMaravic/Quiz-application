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

function OUIR2() {
  const navigation = useNavigation();
  const scrollEnabled = this.state.screenHeight > height;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.title}>2. DEFINICIJE I POJMOVI</Text>
      <Text style={styles.blue}>Terminologija koja se koristi u OUIR-NN utvrđena je u HRN EN 50110-1 i Pravilima i 
mjerama sigurnosti pri radu na električnim postrojenjima.{'\n'}{'\n'}
Da bi se lakše razumio tekst i komentar OUIR-NN, ova terminologija pridodana je 
drugim definicijama koje su specifične za radove pod naponom i koje se spominju u 
OUIR-NN.{'\n'}</Text>
      <Text style={styles.subtitle}>KOMENTARI DEFINICIJA IZ HRN EN 50110{'\n'}
</Text>
      <Text style={styles.bold}>Voditelj postrojenja</Text>
      <Text style={styles.text}>Voditelj postrojenja (voditelj električnog postrojenja) – stručna osoba za vođenje 
postupaka upravljanja i rukovanja ili odobravanja sklapanja na električnim 
postrojenjima u svojoj ovlasti, a u svrhu usmjeravanja tokova električne energije ili 
izvođenja radova. On je istodobno izravno odgovoran za vođenje i nadzor električnog 
postrojenja. Dio tih dužnosti prema potrebi može prenijeti na druge osobe pisanim 
putem ili službenom govornom komunikacijom uz ponavljanje sadržaja.{'\n'}</Text>

      <Text style={styles.bold}>Organizator radova
</Text>
      <Text style={styles.text}>Organizator rada – stručna osoba koja priprema i organizira, vodi ili nadzire rad 
ili samostalno radi. U tu svrhu mora mu biti dostupna sva raspoloživa tehnička i 
pogonska dokumentacija te sva potrebna sredstva i oprema. Organizator rada 
je, u pravilu, poslovođa organizacijske jedinice. On je dužan rukovoditelju radova 
ili nadzornoj osobi pravodobno objasniti radni zadatak i dati mu potrebne upute i 
potrebnu dokumentaciju za provedbu radnog zadatka na siguran način{'\n'}</Text>

      <Text style={styles.bold}>Rukovoditelj radova</Text>
      <Text style={styles.text}>Rukovoditelj radova – stručna osoba koja je određena Nalogom za rad. Rukovoditelju 
radova je povjereno da sa svojom radnom skupinom ili samostalno obavi određeni 
radni zadatak i koji ima izravnu rukovoditeljsku odgovornost za izvedbu naloženih 
radova te za primjenu mjera sigurnosti i zdravlja na radu. Rukovoditelja radova 
određuje organizator rada ili voditelj organizacijske jedinice, a potvrđuje voditelj 
električnog postrojenja. On u potpunosti osigurava mjesto rada, daje usmeni nalog 
za početak radova, neposredno nadzire njegovo izvođenje (sve do samog završetka), 
objavljuje završetak radova i podnosi odgovarajuću obavijest i izvještaj.{'\n'}</Text>

      <Text style={styles.bold}>Stručna osoba (operater)</Text>
      <Text style={styles.text}>Stručna osoba (elektrotehnički stručnjak) – stručno osposobljeni radnik elektrostruke 
s odgovarajućom izobrazbom, vještinom i iskustvom koje mu omogućuje izbjegavanje 
električnih opasnosti te je osposobljen za rad na siguran način prema Pravilima o 
osposobljavanju radnika za rad na siguran način Društva{'\n'}</Text>

      <Text style={styles.bold}>Pomoćnik stručne osobe
</Text>
      <Text style={styles.text}>Pomoćnik stručne osobe (operatera) je podučena osoba koju je podučila stručna 
osoba, što joj omogućuje izbjegavanje električnih opasnosti.{'\n'}</Text>

      <Text style={styles.bold}>Minimalna udaljenost približavanja
</Text>
      <Text style={styles.text}>Minimalna udaljenost približavanja (u daljnjem tekstu MUP) je udaljenost do koje se 
operater smije približiti neizoliranim aktivnim dijelovima ako nema propisane zaštitne 
opreme predviđene u OUIR-NN. Ona je 0,30 m za NN i mali napon (PELV instalacije).{'\n'}</Text>

      <Text style={styles.bold}>Čišćenje pod naponom</Text>
      <Text style={styles.text}>Čišćenje pod naponom izvodi se:{'\n'}
– vakuumskim čišćenjem (usisavanjem)
– puhanjem (uključujući i metodu upotrebom „suhog leda“)
– četkanjem
– pranjem odobrenim sredstvima za čišćenje (agensima).{'\n'}</Text>

      <Text style={styles.bold}>Vodljivi dio na fiksnom potencijalu.</Text>
      <Text style={styles.text}>Vodljivi dio na fiksnom potencijalu je vodljivi dio koji je električki spojen na:{'\n'}
– potencijal zemlje{'\n'}
ili{'\n'}
– potencijal nekog aktivnog vodiča.{'\n'}{'\n'}
Za primjenu OUIR-NN:{'\n'}
– Za stupove nadzemnih vodova svih vrsta (uključivo i drvene) treba 
pretpostaviti da su na potencijalu zemlje.{'\n'}
– Kod unutrašnje opreme, metalne cijevi (voda, plin, centralno grijanje), 
metalne ploče i metalni dijelovi fiksirani na zidove smatraju se na 
potencijalu zemlje{'\n'}</Text>

      <Text style={styles.bold}>Vodljivi dio na lutajućem potencijalu</Text>
      <Text style={styles.text}>Vodljivi dio na lutajućem (promjenljivom) potencijalu je vodljivi dio koji nema čvrstu 
galvansku vezu s dijelom koji je na fiksnom potencijalu{'\n'}</Text>

      <Text style={styles.bold}>Neizolirani dio – izolirani dio</Text>
      <Text style={styles.text}>Neizolirani dio je vodljivi dio koji nije pokriven izolacijom ili gdje je izolacija vidljivo 
oštećena, sumnjiva ili je nedovoljna.{'\n'}</Text>
<Image style={styles.image} source={require('./image1.png')}/>

      <Text style={styles.blue}>Izolacija može biti sumnjiva ako, primjerice, ima pukotine zbog hladnoće ili je oštećena 
ogrebotinama.{'\n'}</Text>

      <Text style={styles.text}>Ako se neizolirani dio pokrije sredstvom zadovoljavajuće izolacijske razine, može 
se smatrati izoliranim tijekom trajanja rada. Nepristupačni neizolirani dio smatra se 
izoliranim dijelom.{'\n'}</Text>
      <Text style={styles.blue}>U području NN, neizolirani dio se smatra nepristupačnim ako je njegov stupanj 
zaštite jednak ili veći od IP2X definiranom prema klasifikaciji stupnjeva zaštite koja 
se postiže oklopljivanjem.{'\n'}</Text>

      <Text style={styles.bold}>Električna pogonska prostorija
</Text>
      <Text style={styles.text}>je prostorija u zgradi ili ograđeni otvoreni prostor određen prvenstveno za smještaj 
i pogon električnog postrojenja u kojem smiju boraviti samo radnici elektrostruke 
(elektrotehnički stručnjaci) i podučene osobe. Ostalim osobama pristup u takve 
prostorije dopušten je pod stručnim nadzorom ili prema posebno propisanom 
postupku. Ovakve prostorije, odnosno prostori, moraju biti zaključani.{'\n'}</Text>

      <Text style={styles.bold}>Električna opasnost
</Text>
      <Text style={styles.text}>predstavlja rizik ozljede od električne energije.{'\n'}
</Text>

      <Text style={styles.bold}>Rizik</Text>
      <Text style={styles.text}>je umnožak vjerojatnosti nastanka opasnog ili štetnog događaja i razine njegove 
posljedice, a određuje se pri procjeni rizika.{'\n'}</Text>

      <Text style={styles.bold}>NN alati</Text>
      <Text style={styles.text}>NN alati su alati, opremljeni i specijalnim sustavima, projektirani posebno za izvođenje 
radova pod naponom. Oni su definirani u TOA{'\n'}</Text>

      <Text style={styles.bold}>Izolirani alati i izolacijski ručni alat</Text>
      <Text style={styles.text}>NN alati uključuju (izolirani i izolacijski) ručni alat, koji je izrađen u skladu sa zahtjevima 
norme HRN EN 60900 (ručni alat za RPN ispod 1000 V AC i 1500 V DC).
Izolacijski alati su u cijelosti izrađeni od izolacijskih materijala, uz mogućnost 
nadogradnje metalnih umetaka.{'\n'}
Izolirani alati su dijelom ili potpuno pokriveni izolacijskim materijalima.{'\n'}</Text>

      <Text style={styles.bold}>Pribor</Text>
      <Text style={styles.text}>Pribor čine naprave za spajanje izoliranih kabela poput spojnih kutija, razvodnih 
kutija ili stezaljki (redne stezaljke, mjerne priključnice).{'\n'}</Text>

      <Text style={styles.bold}>Premosnice</Text>
      <Text style={styles.text}>Sustav koji se spaja na obje strane aparata, osigurača, stezaljki ili dijelova sustava 
sa svrhom da se zamijeni ili ukloni oštećeni aparat, osigurač ili neizolirane ili izolirane 
dijelove sustava, a da se ne prekida tok struje.{'\n'}</Text>

      <Text style={styles.bold}>Paralelni rad</Text>
      <Text style={styles.text}>Postupak kojim se dva strujna kruga napajaju na istom naponu iz istog transformatora 
(uz provjeru sinkronizma).{'\n'}</Text>

      <Text style={styles.bold}>Veza</Text>
      <Text style={styles.text}>Postupak kod kojeg se dva strujna kruga nakon provjere sinkronizma napajaju iz 
dva različita transformatora i međusobno galvanski spajaju, poštujući pravila o 
električnom uključenju.{'\n'}</Text>

      <Text style={styles.bold}>Ovlaštenje za rad pod naponom</Text>
      <Text style={styles.text}>Ovlaštenje daje poslodavac operateru za kojeg ima potvrdu (ovlaštene ustanove) da 
ima znanje i iskustvo potrebno za rad pod naponom.{'\n'}</Text>

      <Text style={styles.bold}>Namjerni dodir</Text>
      <Text style={styles.text}>Pod pojmom namjernog dodira podrazumijeva se normalan rad pod naponom, ciljano 
dodirivanje neizoliranih dijelova pod naponom, uz obveznu uporabu osobne zaštitne 
opreme (u daljnjem tekstu OZO) i odobrenih alata i opreme za rad pod naponom.{'\n'}</Text>

      <Text style={styles.bold}>Slučajni dodir</Text>
      <Text style={styles.text}>Pod pojmom slučajnog dodira podrazumijeva se svako nenamjerno (slučajno, 
neplanirano) dodirivanje neizoliranih dijelova pod naponom dijelovima tijela ili drugim 
vodljivim neizoliranim materijalima.{'\n'}</Text>

      <Text style={styles.bold}>Specijalni radni zahtjevi (u daljnjem tekstu SRZ)</Text>
      <Text style={styles.text}>SRZ se odnose na RPN na vodovima srednjeg napona, a rad na njima može neizravno 
utjecati na RPN na NN.
SRZ čine:{'\n'}
– automatsko isključivanje prekidača koji štiti mjesto rada (područje){'\n'}
– onemogućavanje bilo kakvog automatskog resetiranja zaštitne opreme 
(zaštitna oprema – releji){'\n'}
– isključenje svih vremenskih zatezanja na zaštitnoj opremi.{'\n'}{'\n'}
Ako zaštitna oprema reagira (pokazuje) uzastopne greške, prekidač koji štiti mjesto 
rada (područje) će trenutno isključiti.{'\n'}{'\n'}
Distribucijska mreža 10 kV i 20 kV najčešće je izvedena u otvorenoj petlji, radijalno, s 
mogućnošću zatvaranja petlje napojnih vodova, prema potrebi.{'\n'}{'\n'}
U pravilu ne postoji zaštita (linijski osigurači i linijske sklopke) koji bi onemogućavali 
stvaranje SRZ.{'\n'}{'\n'}
Postoji samo jedna vrsta SRZ. U transformatorskoj stanici VN/SN ili SN/SN može 
se postaviti jedan ili više vodova u SRZ. Sve ovisi o mjestu rada pojedinog tima 
operatera.{'\n'}{'\n'}
Ako jedan ili više timova rade na istom vodu (primjerice vod A), tada samo vod A 
treba biti u SRZ. Ako jedan tim radi na vodu A, a drugi tim na vodu B, tada i vod A i 
vod B moraju biti u SRZ.{'\n'}{'\n'}
Specijalni radni zahtjevi na SN mreži bit će detaljnije obrađeni u Općim uvjetima za 
izvođenje radova pod naponom na srednjem naponu.</Text>

      </View>
    </ScrollView>
  );
}

export default OUIR2;


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
/*     color: '#1D5D9B',
 */  },
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
    marginBottom: 10,
  }
});