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
      <Text style={styles.title}>5. SPAJANJE I ODSPAJANJE STRUJNIH KRUGOVA</Text>
      <Text style={styles.text}>Treba znati sljedeće:{'\n'}
– Postavljanje i skidanje osigurača, ako se izvodi određenim alatima koji su 
specijalno izrađeni u tu svrhu, ne smatra se radom pod naponom.{'\n'}
– Osigurači se smiju zamijeniti samo osiguračima jednakih ili boljih 
karakteristika.{'\n'}
– Otvaranje strujnih krugova napajanih iz sekundara strujnih transformatora, 
kod kojih je primarni namot pod naponom ili može biti pod naponom 
(zbog inducirane struje itd.) strogo je zabranjeno; ako je takvo otvaranje 
nužno, stezaljke sekundara transformatora treba prvo kratko spojiti 
(odgovarajuća premosnica, a treba osigurati i da se premosnica slučajno 
ne odspoji).{'\n'}</Text>

      <Text style={styles.subtitle}>5.1. Pojmovi koji se koriste kod spajanja i odspajanja strujnih krugova{'\n'}</Text>

      <Text style={styles.text}>5.1.1. Prije odspajanja ili spajanja strujnih krugova operater mora biti siguran da se 
ne nalazi u prostoru u kojemu postoji opasnost od eksplozije.{'\n'}</Text>

      <Text style={styles.blue}>Rad u prostorima gdje postoji opasnost od eksplozije obrađen je u dodatku 
HRN EN 50110-1.{'\n'}</Text>

      <Text style={styles.text}>5.1.2. Odspajanje i spajanje strujnih krugova pod opterećenjem mora se izvoditi:{'\n'}
– na strujnim krugovima zaštićenim od kratkih spojeva na način određen 
u poglavlju 5.4. ovih Uvjeta (Tablica u točki 5.4.3. – najveće vrijednosti 
struja spajanja i odspajanja){'\n'}</Text>

      <Text style={styles.blue}>Operater se mora osigurati od kratkih spojeva korištenjem uređaja, kao što 
su osigurač ili prekidač.{'\n'}</Text>

      <Text style={styles.text}>– nakon premoštenja prekidačem, tako da struja na mjestu kontakta kod 
odspajanja ili spajanja bude niža od vrijednosti označenih u poglavlju 5.4. 
UIR-NN.{'\n'}{'\n'}
5.1.3. Spajanja i odspajanja strujnih krugova bez opterećenja ne zahtijevaju 
posebnu zaštitu od kratkih spojeva sredstvima, kao što su osigurači ili 
prekidači.{'\n'}</Text>

      <Text style={styles.blue}>Zadovoljavanje tih uvjeta može se posebno ostvariti izoliranjem ili zemlje 
ili neizoliranih aktivnih dijelova kako bi se otklonila nekontrolirana pojava 
električnog luka u okolini.{'\n'}</Text>

      <Text style={styles.text}>5.1.4. Zamjena pregorjelog osigurača
Pri zamjeni pregorjelog osigurača preporučuje se upotreba visokoučinskog 
osigurača da bi se smanjila opasnost od njegovog rasprskavanja (ako još 
postoji kvar u mreži).{'\n'}{'\n'}
Pri zamjeni pregorjelog osigurača osiguračem drugog tipa treba biti siguran 
da u mreži nema kvara.
Premosnica, kojom se premošćuje osigurač, mora u sebi sadržavati osigurač 
jednakih karakteristika{'\n'}</Text>

      <Text style={styles.subtitle}>5.2. Mjere koje se odnose na prekidanje strujnih krugova</Text>

      <Text style={styles.blue}>Strujni krugovi su prekinuti kada su otvoreni:{'\n'}
– rezanjem{'\n'}
– pomicanjem krajeva presječenog vodiča{'\n'}
– vađenjem osigurača{'\n'}
– uklanjanjem premosnica.{'\n'}</Text>

      <Text style={styles.text}>5.2.1. Točke prekidanja
Kada mjesto prekida (odspajanja) nije određeno konstrukcijom opreme, 
preporučuje se odabiranje tog mjesta tako da postoji dovoljna udaljenost 
od drugih dijelova koji su na drugom fiksnom potencijalu kako bi se lakše:{'\n'}{'\n'}</Text>

      <Text style={styles.blue}>Ovo se posebno odnosi na dijelove koji su dijelom spojeni na zemlju i koje 
je teško izolirati.{'\n'}</Text>

      <Text style={styles.text}>– kontroliralo pomicanje dijelova koji su mehanički oslobođeni{'\n'}</Text>

      <Text style={styles.blue}>Kontrola pomicanja općenito je lakša ako je točka, na koju je mehanički dio 
spojen ili stegnut, što bliže točki odspajanja{'\n'}</Text>

      <Text style={styles.text}>– obnovilo izolaciju na krajevima koji su odspojeni, ako je potrebno.{'\n'}</Text>

      <Text style={styles.blue}>Ta izolacija može se napraviti izolacijskim kapicama navučenim na krajeve 
vodiča.{'\n'}</Text>

      <Text style={styles.text}>5.2.2. Odspajanje (prekidanje) neutralnog vodiča</Text>

      <Text style={styles.blue}>Pravila za odspajanje neutralnog vodiča utvrđena su u:
– normi HRN HD 60364
– uputama za izvođenje (može izdati i voditelj električnog postrojenja).</Text>

      <Text style={styles.text}>5.2.2.1. Zaštitni neutralni vodiči (PEN vodiči) nikada se ne smiju prekidati.</Text>

      <Text style={styles.blue}>PEN vodič je vodič koji je istodobno neutralni i zaštitni (kombinirani).</Text>

      <Text style={styles.text}>5.2.2.2. Ako se struja ne prekida istodobno u svim vodičima strujnog kruga, neutralni 
vodič smije se otvarati ili prekidati samo nakon faznih vodiča.
5.2.3. Postupak odspajanja{'\n'}</Text>

      <Text style={styles.blue}>Opasnost od električnog luka na NN postrojenjima pri odspajanju povezana 
je s potrošačima (veličina opterećenja) koji se napajaju tim vodom ili uz 
dio električnog kruga u kojem je akumulirana elektromagnetska energija 
(zavojnice) ili akumulirana elektrostatska energija (kondenzator).{'\n'}</Text>

      <Text style={styles.text}>Odspajanje se provodi:{'\n'}
– brzim odvajanjem jednog od dvaju krajeva koje treba odspojiti{'\n'}
– kontroliranjem kretanja vodiča{'\n'}
– provedbom mjera koje su nužne za osiguranje da neizolirani vodljivi dijelovi 
budu smješteni tako da se ugasi luk koji bi mogao nastati pri prekidanju.{'\n'}</Text>

      <Text style={styles.blue}>Ako nekoliko vodiča treba prekidati jedan za drugim, krajeve vodiča koji 
ostaju (za ponovno spajanje) treba izolirati odgovarajućim sredstvima, 
primjerice, izoliranjem krajeva kapicama ili prekrivanjem.{'\n'}{'\n'}
Jednako tako, operater mora stajati što dalje od mjesta nastanka luka.{'\n'}{'\n'}
U slučaju nadzemnih vodova s neizoliranim vodičima, rukovoditelj rada mora 
dati prednost metodi rada motkama na udaljenosti.{'\n'}</Text>

      <Text style={styles.subtitle}>5.3. Mjere koje se odnose na spajanje strujnih krugova</Text>

      <Text style={styles.blue}>Spajanje strujnih krugova izvodi se zatvaranjem ili spajanjem vodiča 
spojnicama ili postavljanjem stezaljki ili osigurača.</Text>

      <Text style={styles.text}>5.3.1. Pripremni radni postupci
Za sve spojeve rukovoditelj rada mora biti siguran da nema mogućnosti 
nastanka kratkog spoja kada zatvara strujne krugove.{'\n'}</Text>

      <Text style={styles.blue}>To se može postići:{'\n'}
– vizualno{'\n'}
ili{'\n'}
– pregledom shema spajanja i posebnim oznakama (boja i sl. oznake){'\n'}
ili{'\n'}
mjerenjem.{'\n'}
</Text>

      <Text style={styles.text}>5.3.2. Spajanje neutralnog vodiča{'\n'}
Ako se svi vodiči određenog strujnog kruga ne spajaju istodobno, neutralni 
vodič mora se spajati prije bilo kojeg faznog vodiča u strujnom krugu.{'\n'}{'\n'}
5.3.3. Postupak spajanja{'\n'}
Radi spajanja strujnog kruga operater mora:{'\n'}
– brzo približiti jedan drugom dva dijela koja spaja sve dok ih ne spoji, a 
vodiči moraju biti u čvrstom dodiru i treba sigurno držati taj privremeni 
kontakt sve dok se ne izvede konačni spoj.{'\n'}</Text>

      <Text style={styles.blue}>Kada se radi na nadzemnim vodovima s izoliranim vodičima, treba upotrijebiti 
stezaljke ili drugu spojnu opremu projektiranu za takve spojeve, u skladu s 
uputama njihovih proizvođača.{'\n'}{'\n'}
Kod nadzemnih vodova s neizoliranim vodičima, rukovoditelj rada mora dati 
prednost metodi rada motkama na udaljenosti.{'\n'}</Text>

      <Text style={styles.text}>ili {'\n'}
– staviti prekidač na mjesto rada.{'\n'}</Text>

      <Text style={styles.subtitle}>5.4. Najveće dopuštene vrijednosti struje koje se smiju odspajati ili spajati bez prekidača</Text>

      <Text style={styles.text}>5.4.1. Odspajanje i spajanje krugova pod opterećenjem
Prije odspajanja ili spajanja strujnog kruga rukovoditelj radova mora odrediti 
vrijednosti struje u spojevima koje treba otvoriti ili zatvoriti.{'\n'}</Text>

      <Text style={styles.blue}>Vrijednost struje u spojevima koje treba otvoriti ili zatvoriti može se odrediti:{'\n'}
– mjerenjem vrijednosti struje na mjestu kojeg treba otvoriti{'\n'}
ili{'\n'}
– procjenom svih opterećenja koja su iza točke odspajanja opreme.{'\n'}</Text>

      <Text style={styles.text}>5.4.2. Ograničenja
Na strujnim krugovima pod opterećenjem u podzemnim kabelima ne smije 
se provoditi odspajanje ili spajanje, osim isključivo specijalnim sredstvima ili 
opremom, koja postoji za tu svrhu.
5.4.3. Najveće vrijednosti
Dopuštene granice za strujna spajanja i odspajanja utvrđene su na temelju 
opreme ili instalacija i iskazane su u idućoj tablici.{'\n'}
</Text>

      <Text style={styles.blue}>U sustavu izmjeničnog napona, vrijednosti napisane u priloženoj Tablici 1. vrijede za 
sljedeće sustave i spojeve:{'\n'}
– 400 V s uzemljenim neutralnim vodičem{'\n'}
– 230 V dvofazno{'\n'}
– 230 V trofazno u trokut spoju.{'\n'}</Text>

      <Text style={styles.subtitle}>5.5. Ostali uvjeti
</Text>

      <Text style={styles.text}>Osim ograničenja utvrđenih vrijednostima struja u tablici u točki 5.4.3. 
trebaju se zadovoljiti i sljedeći uvjeti.{'\n'}</Text>

      <Text style={styles.blue}>Kabeli i oprema upotrijebljena za spajanje prekidača na strujni krug kojeg 
treba spojiti ili odspojiti moraju biti tako dimenzionirani da osigurava stalni 
tok struje tijekom čitavog vremena trajanja radnog postupka. Duljina kabela 
bira se tako da nimalo ne ometa izvođenje rada.{'\n'}
</Text>

      <Text style={styles.text}>5.5.1. Uvjeti koji se odnose na NN mrežu
Uvjeti koje treba zadovoljiti kod uspostavljanja veze između dva NN sustava 
koji se napajaju iz dva različita SN/NN transformatora su sljedeći:{'\n'}
– Dva SN/NN transformatora moraju biti spojena na isti SN napojni vod i 
moraju biti napajani iz transformatora jednakog faznog pomaka.{'\n'}
– Oprema sustava (spojne veze ili pribor prekidača) mora biti konstrukcijski 
predviđena za manevriranje pod opterećenjem.{'\n'}
– NN sustav mora biti sposoban za prihvat svih strujnih opterećenja.{'\n'}
– Razlika NN napona ne smije biti veća od 37 V mjereno L1,- L1, L2, - L2, L3,- L3.{'\n'}
– Vrijeme održavanja veze ne smije biti dulje od 5 min, a da se ne provjere 
iznosi struje u vezi.{'\n'}
– Ako opterećenje (struja) zahtijeva ili je veće od kapaciteta konkretnog 
sustava, veza mora biti prekinuta (zbog opasnosti od pregrijavanja).{'\n'}
– Ako je struja manja od dopuštenog kapaciteta konkretnog sustava, 
vrijeme uspostavljanja veze mora biti što je kraće moguće.{'\n'}
– Voditelj električnog postrojenja NN – voditelj električnog postrojenja SN 
mora biti obaviješten tako da se izbjegnu bilo kakvi manevri na SN, sve 
dok se provode radni postupci, radi sprječavanja potencijalno opasnih 
situacija za vrijeme radnog postupka.{'\n'}{'\n'}
Prije skidanja određene veze ili paralele, voditelj električnog postrojenja 
mora obavijestiti rukovoditelja radova kako bi osigurao da će operater 
skinuti tu vezu ili paralelu (u slučaju da nije riječ o istom operateru koji je tu 
vezu ili paralelu postavio).{'\n'}{'\n'}
5.5.2. Uvjeti koji se odnose na opremu{'\n'}
– U smislu sprječavanja slučajnog otvaranja strujnih krugova s punim 
opterećenjem tijekom radnog postupka, moraju se upotrijebiti isključivo 
premosnice s prekidačem, a nikako osigurači ili zaštitne sklopke.{'\n'}
– Kabeli, koji se upotrebljavaju za privremeno spajanje (premosnice), 
moraju biti i sami odobreni i opisani u Tehničkom opisu alata (TOA-NN) ili 
definirani zajedno s priključcima (stezaljkama) u TOA–NN.{'\n'}
– Priključnice ulaza i izlaza privremenog prekidača moraju odgovarati za 
spajanje privremenih spojnih uređaja (premosnica).{'\n'}
– Privremeni prekidači moraju imati priključnice ili izvode predviđene da se 
na njima ispita napon i sukladnost faza ispred i iza njih.{'\n'}
– Privremeni prekidači moraju imati mogućnost blokiranja u uključenom 
i isključenom položaju da se izbjegne bilo kakav slučajni ili namjerni 
(neželjeni) postupak dok se vodiči odspajaju ili spajaju i bilo koji postupak 
koji nije odobrio voditelj električnog postrojenja ako je uređaj predviđen 
za rad u sustavu (dulje vrijeme).{'\n'}
</Text>

      <Text style={styles.subtitle}>5.6. Postavljanje i skidanje premosnica</Text>

      <Text style={styles.text}>5.6.1. Ako operater mora premostiti neki zaštitni element kao što je osigurač ili 
zaštitna sklopka, tada se mora postaviti premosnica s odgovarajućom 
zaštitom.{'\n'}{'\n'}
5.6.2. Prije zatvaranja premosničkog sustava operater mora biti siguran da su svi 
dijelovi u sustavu na jednakom potencijalu i na istoj fazi ili da imaju jednaki 
polaritet ako je istosmjerna struja.{'\n'}</Text>

      <Text style={styles.blue}>Operater mora biti siguran da je:{'\n'}
– premosnica u cjelini vidljiva{'\n'}
– može označiti{'\n'}
– može provjeriti mjerenjem{'\n'}</Text>

      <Text style={styles.text}>5.6.3. Prije otvaranja premosničkog sustava operater mora biti siguran da je 
premošteni krug vodljiv.{'\n'}</Text>

      <Text style={styles.blue}>
Operater mora biti siguran u to da je:{'\n'}
– premosnica u cjelini vidljiva{'\n'}
– može označiti{'\n'}
– može provjeriti mjerenjem struje koja teče kroz premošteni krug i 
premosnički sustav.{'\n'}</Text>

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