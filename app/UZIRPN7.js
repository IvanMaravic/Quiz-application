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
      <Text style={styles.title}>7. SPECIJALNI RADNI POSTUPCI{'\n'}</Text>

      <Text style={styles.text}>Pravila iz poglavlja 7. primjenjuju se kod specijalnih vrsta radova pod naponom na NN:{'\n'}
– pomicanje neizoliranih nadzemnih vodiča{'\n'}
– rad na NN dijelu kombiniranog SN/NN stupa, gdje je SN vod pod naponom{'\n'}
– čišćenje{'\n'}
– rad s neizolacijskim ili neizoliranim savitljivim cijevima (kod preša){'\n'}
– spajanje i odspajanje izoliranih vodiča na priključnicama (na rednim 
stezaljkama, mjernim priključnicama - KTT){'\n'}
– dodatna pravila.{'\n'}</Text>

      <Text style={styles.subtitle}>7.1. Pomicanje neizoliranih nadzemnih vodiča</Text>

      <Text style={styles.text}>7.1.1. Opća pravila
Tijekom pomicanja neizoliranog nadzemnog vodiča koji je pod naponom 
i mehanički opterećen, pomicanje vodiča mora biti strogo kontrolirano u 
svakom trenutku.{'\n'}
</Text>

      <Text style={styles.blue}>Ako pomicanje nije kontrolirano, krše se uvjeti utvrđeni u Uvjetima, definirani 
u poglavlju 3. i 4. OUIR-NN.{'\n'}</Text>

      <Text style={styles.text}>7.1.2. Zatezni vodiči
Kao opće pravilo, što se tiče zateznih vodiča treba, posebno treba učiniti 
sljedeće:{'\n'}{'\n'}
7.1.2.1. Prije nego se vodič otpusti s mjesta svog učvršćenja, mora biti osigurano 
novo mjesto učvršćenja za privremeno učvršćivanje i moraju se poduzeti 
sva pravila koja se odnose na vodiče u poglavlju 4. OUIR-NN.{'\n'}{'\n'}
7.1.2.2. Početno mehaničko učvršćenje smije se micati jedino ako je cjelokupna sila 
naprezanja premještena na privremeni čvrsti sustav.{'\n'}</Text>

      <Text style={styles.blue}>Takvo pomicanje može izazvati:{'\n'}
– Povećanje mehaničkog naprezanja u vodiču koje je manjeg iznosa ako 
je privremena čvrsta točka sustava na vodiču što bliže početnoj čvrstoj 
točki vodiča.{'\n'}
– Promjenu smjera sile naprezanja na vodiču koja je manja ako je početna 
točka učvršćivanja privremenog sustava što bliža početnoj točki 
učvršćenja.{'\n'}</Text>

      <Text style={styles.text}>7.1.3. Premještanje vodiča
Prije početka premještanja vodiča iz jednog položaja u drugi treba:{'\n'}
– biti siguran da na putu nema nikakvih prepreka{'\n'}
– kod svakog koraka biti siguran da su zadovoljeni uvjeti iz poglavlja 4. 
OUIR-NN i točke koje slijede.{'\n'}</Text>

      <Text style={styles.blue}>Alati koji se upotrebljavaju za planirano premještanje moraju biti takvi da 
se čitav radni postupak može potpuno provesti (da je uže na koloturniku 
dovoljne duljine). Možda će biti potrebno podijeliti radni postupak pomicanja 
na nekoliko uzastopnih radnih postupaka premještanja. Duljina premosnice 
mora omogućiti provođenje radnog postupka u kontinuitetu.{'\n'}</Text>

      <Text style={styles.text}>7.1.3.1. Premještanje vodiča iz jednog položaja u drugi mora biti takvo da se vodič 
pomiče polako i oprezno.{'\n'}{'\n'}
7.1.3.2. Kod premještanja nekoliko vodiča s jednakim rasponom, prvi vodič koji se 
pomiče je onaj čijim se premještanjem ne može ugroziti najmanja dopuštena 
udaljenost između vodiča (da ne izazove kratki spoj), pa treba paziti da se 
taj prvi vodič drži dovoljno daleko od drugih.{'\n'}{'\n'}
7.1.3.3. Prije nego što se vodič trajno učvrsti, treba ga staviti u međupoložaj koji je 
vrlo blizu konačnom položaju.{'\n'}{'\n'}
7.1.4. Posebne predostrožnosti
Pri premještanju neizoliranih vodiča nadzemnih mreža i izrade veza na 
izolator, parkiranje vozila i kretanje ljudi ispod vodiča i uz podnožje stupa 
treba svesti na najmanju moguću mjeru.{'\n'}{'\n'}
7.1.5. Isključivanje napona
Isključivanje napona s vodiča ne znači i njegovo uzemljivanje.
Operater mora smatrati da je vodič i dalje pod naponom.{'\n'}</Text>

      <Text style={styles.blue}>Svrha ovog uvjeta odnosi se na stavljanje vodiča na lutajući potencijal 
jer u slučaju kada se neizolirani vodič pomiče dodir s dijelom na fiksnom 
potencijalu (vodiča ili zemlje) neće izazvati nikakve posljedice.{'\n'}</Text>

      <Text style={styles.text}>7.1.5.1. Ako je potrebno isključiti napon na neizoliranom nadzemnom vodiču i vodič 
mehanički rasteretiti, prvo se mora isključiti napon. Kod vraćanja, prvo treba 
mehanički učvrstiti vodič, a tek onda priključiti napon.{'\n'}{'\n'}
To znači da vodič mora biti mehanički učvršćen na točku najbližu točki 
njegovog električnog spajanja, prije nego što se ga stavi pod napon.{'\n'}{'\n'}
7.1.5.2. Ako se pomiče cijeli komplet vodiča, prvi od njih smije se pomicati nakon:{'\n'}
– što je napon isključen sa svih vodiča{'\n'}</Text>

      <Text style={styles.blue}>Ako se pomiče grupa vodiča, iskapčanje napona s vodiča znači da njih treba 
negdje privremeno učvrstiti (ako nema krajnjih izolatora i strujnih mostova) 
i ako operater smatra da je postupak previše složen i samim tim nastaje 
opasnost od kratkog spoja među vodičima. Vodiči se mogu pomicati jedan 
za drugim i privremeno se učvršćuju kako se isključuje napon na njima te se 
kontroliraju pri spuštanju.{'\n'}{'\n'}
U tom slučaju, radni postupci se obvezno moraju završavati redoslijedom 
kojim se vodiči odspajaju od dna prema vrhu pri čemu svaka mogućnost 
slučajnog kontakta između isključenog vodiča i dijelova pod naponom mora 
biti uklonjena.{'\n'}</Text>

      <Text style={styles.text}>– sprječavanja svih mogućnosti napajanja iz drugog izvora ili iz instalacije 
korisnika mreže.{'\n'}</Text>

      <Text style={styles.text}>Vađenjem glavnih osigurača na priključku ili odspajanjem faznih vodiča 
može se izvesti zaštita od povratnog napona.{'\n'}</Text>

      <Text style={styles.subtitle}>7.2. Rad na NN vodu u neposrednoj blizini nadzemnih SN vodova</Text>

      <Text style={styles.text}>UIR-NN mogu se smatrati kao trajne upute o sigurnosti. Operateri se moraju 
ponašati u skladu s pravilima rada u blizini SN voda.{'\n'}{'\n'}
Ovaj uvjet odnosi se na rad na NN nadzemnom vodu čija je trasa u 
neposrednoj blizini SN nadzemnog voda koji je pod naponom:{'\n'}
– u slučaju rada na vodu koji je u zoni utjecaja paralelnih nadzemnih vodova{'\n'}
– križanja trasa NN i SN voda{'\n'}
– kombinirani SN/NN stupovi.{'\n'}
</Text>

      <Text style={styles.blue}>Kombinirani stup na kojemu su zajedno SN i NN vodovi (paralelni vodovi), 
sastavljen je od SN izoliranih ili neizoliranih vodiča i moguće opreme 
(rastavljača, iskrišta, odvodnika prenapona, itd.) te izoliranih ili neizoliranih 
vodiča na NN i njihove moguće opreme (prekidači, odvodnici, itd.).{'\n'}</Text>

      <Text style={styles.text}>7.2.1. Radni postupak{'\n'}{'\n'}
Rad pod naponom na NN vodu dopušten je nakon provjere sljedećeg:{'\n'}
– SN vod ne smije imati ni jedan vidljivo neispravan izolator, biti pokriven 
stranim tijelom ili da je vodič za uzemljenje odvodnika prenapona 
odspojen.{'\n'}</Text>

      <Text style={styles.blue}>Izolator je u lošem stanju ako je vidljivo oštećen ili jako onečišćen.
Pojedini odvodnici prenapona imaju zaštitni sustav koji iskapča vezu sa 
zemljom u slučaju da se pojavi kakav unutrašnji kvar.{'\n'}</Text>

      <Text style={styles.text}>– Ako je jedan ili više SN izoliranih kabela na stupu, stanje ispravnosti 
kabela, spojnih elemenata, odvodnika prenapona ili iskrišta smještenih 
na njegovim krajevima, mora se prethodno provjeriti.{'\n'}</Text>

      <Text style={styles.blue}>Prilikom izrade Pripreme za rad pod naponom treba provjeriti moguće 
postojanje i položaj iskrišta ili odvodnika prenapona koji nisu vidljivi s mjesta 
rada.{'\n'}</Text>

      <Text style={styles.text}>7.2.2. Poštovanje minimalne udaljenosti približavanja SN vodičima</Text>

      <Text style={styles.blue}>Poluizolirani SN vodič treba smatrati neizoliranim vodičem.{'\n'}</Text>

      <Text style={styles.text}>Tijekom rada i kretanja operater mora držati minimalnu udaljenost koja je 
jednaka najmanje propisanoj minimalnoj udaljenosti približavanja (MUP) za 
SN (MUP-SN definiran je u Općim uvjetima izvođenja radova na srednjem 
naponu i metodama rada), između dijelova njegova tijela i bilo kojeg dijela na 
kojem se radi i neizoliranih SN dijelova ili neizoliranih vodiča i svih vodljivih 
dijelova koji su u dodiru s njim.{'\n'}</Text>

      <Text style={styles.blue}>Uvjet 7.2.2. treba poštovati i za:{'\n'}
– neizolirane dijelove krajeva SN kabela{'\n'}
– SN spojne mostove, uključujući i one koji su poluizolirani.{'\n'}{'\n'}
Tu udaljenost ne treba mjeriti. U tom slučaju, operater se mora držati pravila 
rada u zoni 2.{'\n'}</Text>

<Text style={styles.text}>Za izolirane SN kabele nema uvjeta udaljenosti.</Text>

<Image style={styles.image} source={require('./image9.png')}/>

<Text style={styles.subtitle}>7.3. Čišćenje</Text>
<Text style={styles.text}>7.3.1. Dokumenti{'\n'}{'\n'}
Operater mora poštovati OUIR-NN i UIR-NN, a posebno propisane odredbe 
poglavlja:{'\n'}
– Opis i opće područje primjene OUIR-NN{'\n'}
– Definicije i pojmovi{'\n'}
– Odnosi između radnika (operatera) i rukovoditelja radova{'\n'}
– Osobna zaštitna oprema operatera{'\n'}
– Vremenski uvjeti na mjestu rada{'\n'}
– Priprema rada i radnog mjesta{'\n'}
– Pregled alata prije rada{'\n'}
– Održavanje alata{'\n'}
– Organizacija radova i izvođenje{'\n'}
– Određivanje faza rada pod naponom{'\n'}
– Mjere sprječavanja električnog udara{'\n'}
– Mjere sprječavanja kratkih spojeva.{'\n'}</Text>

<Text style={styles.bold}>HRN EN 50110-1 određuje uvjete čišćenja pod naponom.{'\n'}</Text>

<Text style={styles.text}>7.3.2. Metode čišćenja{'\n'}
Čišćenje pod naponom izvodi se:{'\n'}
– vakuumskim čišćenjem (usisavanjem){'\n'}
– ispuhivanjem (uključujući i ispuhivanje „suhim ledom“ – granulama 
smrznutog CO2){'\n'}
– četkanjem{'\n'}
– čišćenjem odgovarajućim sredstvima za čišćenje.{'\n'}</Text>

<Text style={styles.bold}>Voda se nikada ne smije upotrebljavati na niskom naponu!{'\n'}</Text>

<Text style={styles.text}>7.3.3. Učvršćivanje dijelova koji se čiste
Čišćenje se nikada ne smije obavljati tako da se pomiču dijelovi opreme koja 
se čisti.{'\n'}{'\n'}
7.3.4. Oprema, alati i sredstva za čišćenje
Treba imati odgovarajuću opremu, alate i sredstva, što mora biti opisano u 
TOA-NN.{'\n'}</Text>

<Text style={styles.blue}>To obuhvaća:{'\n'}
– cijevi usisavača{'\n'}
– izolacijske motke{'\n'}
– odgovarajuće cipele i čizme (ili se mogu upotrijebiti izolacijske prostirke){'\n'}
– izolacijske rukavice.{'\n'}</Text>

<Text style={styles.text}>7.3.5. Mjere opreza u odnosu na SN ili VN sustave i instalacije
Operater mora paziti na udaljenost koja najmanje mora biti MUP za SN ili 
MUP za VN između svih dijelova njegova tijela i neizoliranih vodljivih dijelova 
koje bi mogao dodirivati, SN ili VN vodova, neizoliranih dijelova ili svih 
neizoliranih dijelova koji su u dodiru s njim.{'\n'}</Text>

<Text style={styles.blue}>Udaljenost nije nužno mjeriti.{'\n'}{'\n'}
Ako se operater približi dijelovima pod naponom, mora poštovati pravila za 
rad u blizini napona, zona 2.{'\n'}</Text>

<Text style={styles.subtitle}>7.4. Rad s neizoliranim ili neizolacijskim savitljivim cijevima</Text>

<Text style={styles.blue}>Napomena: {'\n'}
Kod rada s izoliranim kabelima, operaterima smije biti dostupan samo jedan 
potencijal i time je uklonjena opasnost od kratkih spojeva između faznih 
vodiča ili između faznog vodiča i neutralnog vodiča jer se rad najčešće 
obavlja upotrebom alata s metalnim dijelovima koji bi mogli dovesti do 
kratkog spoja.{'\n'}</Text>

<Text style={styles.text}>7.4.1. Zaštita od električnog udara
Operater mora voditi računa da za savitljive neizolirane ili nedovoljno izolirane 
cijevi, koje upotrebljava za pokretanje alata (alati mogu biti neizolirani ili 
nedovoljno izolirani), a koji su u dodiru s neizoliranim aktivnim dijelovima, 
treba poduzeti zaštitne mjere kao i kod svih drugih neizoliranih dijelova pod 
naponom.{'\n'}</Text>

<Text style={styles.blue}>Primjerice, kada se upotrebljava hidraulička preša ili preša s nožnim 
pogonom s neizoliranim ili nedovoljno izoliranim cijevima između pumpe i 
alata, operater koji se koristi pumpom mora:{'\n'}
– nositi odgovarajuće izolacijske rukavice {'\n'}
ili{'\n'}
– raditi s izolacijskim gumenim pokrivačima i nositi specijalne čizme.{'\n'}{'\n'}
Te mjere ne odnose se na operatere koji upotrebljavaju odgovarajuće 
izolacijske pokrivače za sprječavanje kratkih spojeva između cijevi i zemlje 
iskopa ili poda.{'\n'}</Text>

<Text style={styles.text}>7.4.2. Zaštita od kratkih spojeva
Operateri moraju pokriti zemlju ili tlo preko čitavog prostora neizoliranih ili 
nedovoljno izoliranih cijevi.{'\n'}</Text>

<Text style={styles.blue}>Primjerice, čitav iskop se u potpunosti pokriva po duljini cijevi, ako je ona 
neizolirana ili nedovoljno izolirana.{'\n'}</Text>

<Image style={styles.image} source={require('./image10.png')}/>


<Text style={styles.subtitle}>7.5. Spajanje i odspajanje izoliranih vodiča na priključnicama</Text>

<Text style={styles.text}>7.5.1. Uvod{'\n'}{'\n'}
UIR-NN dopuštaju spajanje i odspajanje vodiča s izoliranim žicama koje 
imaju ograničeni presjek u instalacijama sa zaštitom od velikih struja, bez 
uporabe izolacijskih rukavica.{'\n'}{'\n'}
Takve radne postupke može izvoditi samo osoblje koje radi na instalaciji ili 
opremi namijenjenoj kontroli, prijenosu informacija i telekomunikacijama te 
koje je potpuno upoznato s tom opremom.{'\n'}{'\n'}
Treba zapamtiti da se UIR-NN ne primjenjuju na:{'\n'}
– (ELV)(Mali Napon) opremu kod koje napon na aktivnim dijelovima ne raste 
do visokih vrijednosti (posebne SELV i PELV instalacije).{'\n'}
– Telekomunikacijsku, kontrolnu i upravljačku opremu u javnoj distribuciji 
kada napon nije veći od 100 V (oprema koja se koristi za tzv. “telefonsku 
mrežu”).{'\n'}{'\n'}
7.5.2. Opći uvjeti{'\n'}
Spajanje i odspajanje izoliranih vodiča bez izolacijskih rukavica zahtijeva 
ograničenje električnih krugova tako da se:{'\n'}
– napajaju na naponima koji ne prelaze NN područje do 500 V{'\n'}
– štite od prevelike struje (najveća vrijednost 20 A){'\n'}
– opreme priključnicama koje su izrađene tako da štite od izravnog dodira 
i kratkih spojeva.{'\n'}{'\n'}
7.5.3. Karakteristike kabela s izoliranim žilama{'\n'}{'\n'}
Spajanje i odspajanje izoliranih kabela može se obaviti ako su zadovoljene 
sljedeće karakteristike:{'\n'}
– Njihovi presjeci moraju biti manji ili jednaki 2,5 mm2.{'\n'}
– Izolacija žile kabela mora biti u dobrom stanju.{'\n'}
– Za spajanje sektorskih vodiča na njihove krajeve treba postaviti krute 
završne čahure.{'\n'}{'\n'}
7.5.4. Tijek radnog postupka
Operater može istodobno raditi samo na jednom vodiču.
Krajevi odspojenih vodiča moraju biti zaštićeni izolacijskim kapicama koje 
se mogu stavljati na mjesto bez izolacijskih rukavica.{'\n'}</Text>

<Text style={styles.blue}>Operater mora držati MUP od svih izoliranih pristupačnih dijelova, čiji je 
napon različit od onoga na kraju vodiča na kojem se radi.
Radi otklanjanja kratkog spoja, operater mora držati ogoljeli kraj vodiča 
što dalje od ostalih dijelova na fiksnom potencijalu, tamo gdje je potencijal 
različit od onoga na koji je spojen.{'\n'}</Text>

<Text style={styles.text}>7.5.4.1. Postupci kod NN krugova do 500 V
Operater može raditi spajanje i odspajanje aktivnih izoliranih vodiča bez 
izolacijskih rukavica tako da drži i kontrolira vodič jedino s pomoću izoliranog 
ili izolacijskog alata.{'\n'}{'\n'}
7.5.4.2. Postupak kod istosmjernih strujnih krugova s nominalnim naponom manjim 
ili jednakim 120 V{'\n'}{'\n'}
Operater smije skidati izolaciju žila bez izolacijskih rukavica prekrivanjem 
izolacijskim zaštitnim plaštem (pokrivačem), pri čemu se prije toga treba 
vizualno uvjeriti da je pokrivač u dobrom stanju.</Text>

<Image style={styles.image} source={require('./image11.png')}/>

<Text style={styles.subtitle}>7.6. Dodatna pravila</Text>
<Text style={styles.text}>Ova pravila moraju biti pridružena OUIR NN-NN, vodeći računa o vrsti 
opreme na kojoj se mora provoditi rad pod naponom (Z, U, P ili KTT).
Dodatna pravila utvrđuje Povjerenstvo za rad pod naponom.</Text>

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
    marginBottom: -80,
    marginTop: -80, 
  }
});