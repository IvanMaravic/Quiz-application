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

function OUIR4() {
  const navigation = useNavigation();
  const scrollEnabled = this.state.screenHeight > height;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.title}>4. MJERE SPRJEČAVANJA KRATKIH SPOJEVA
</Text>

      <Text style={styles.text}>Kratki spoj nastaje dodirivanjem dijelova električnih postrojenja na različitim fiksnim 
potencijalima (između vodiča različitih faza, faznog vodiča i neutralnog vodiča, 
faznog vodiča i zemlje uključujući i napone koji su niži od 50 V, kada se spoje stezaljke 
akumulatora ili ako polovi vodova istosmjerne struje dođu u dodir).{'\n'}{'\n'}
Tijekom rada pod naponom, operater može izazvati kratki spoj:{'\n'}
– rukujući alatom koji ima nezaštićeni metalni dio{'\n'}
– pomičući aktivne neizolirane vodljive dijelove{'\n'}
– premošćujući izolator metalnim dijelom alata{'\n'}
– micanjem ili postavljanjem vezne žice (na izolatoru nadzemnog voda){'\n'}
– slučajnim padom nekog metalnog predmeta između dijelova na različitim 
potencijalima{'\n'}
– nepravilnim čišćenjem aktivnih neizoliranih dijelova itd.{'\n'}</Text>

      <Text style={styles.subtitle}>4.1. Mogući dodir</Text>
      <Text style={styles.text}>Tijekom rada operater mora biti siguran da neće doći u dodir ni jedan 
neizolirani vodljivi dio:{'\n'}
– na fiksnom potencijalu, s nekim drugim dijelom na nekom drugom 
fiksnom potencijalu{'\n'}
– na lutajućem potencijalu, istodobno u dodir s dva neizolirana vodljiva 
dijela na različitim fiksnim potencijalima.{'\n'}</Text>

      <Text style={styles.blue}>Neizolirani vodljivi dio može, primjerice, biti neki neizolirani alat ili neki 
izolirani alat s nezaštićenim dijelom.{'\n'}{'\n'}
Uporabom izolacijskog alata otklanja se opasnost od kratkog spoja.
Načela izoliranja prekrivanjem prikazana su na kraju ovog poglavlja.{'\n'}</Text>

      <Text style={styles.text}>Primjerice, ako postoji bilo kakva opasnost od dodira, operater mora 
otkloniti mogućnost nastanka kratkog spoja pokrivanjem svih neizoliranih 
dijelova na različitim fiksnim potencijalima nekim od sredstava izoliranja, 
osim onog na kojem radi.{'\n'}{'\n'}
Navedeno se može odnositi i na izolaciju zemlje ili neizoliranih vodljivih 
dijelova kako bi se osiguralo da vodljivi dijelovi ne mogu doći u kratki spoj, 
uključujući i slučajeve koje operater može kontrolirati (primjerice podizanje 
stupa).{'\n'}
</Text>

      <Text style={styles.subtitle}>4.2. Procjena opasnosti
</Text>
      <Text style={styles.text}>Operater mora procijeniti opasnost od dodira na temelju:{'\n'}
– dimenzija neizoliranih vodljivih dijelova na kojima radi{'\n'}
– neizoliranih dijelova izoliranoga alata{'\n'}
– mogućnostima pomicanja dijelova u električnom okolišu{'\n'}
– vlastitih pokreta i aktivnosti.{'\n'}</Text>

      <Text style={styles.subtitle}>4.3. Zaštita od dodira
</Text>
      <Text style={styles.text}>Nakon procjene opasnosti od kratkog spoja operater mora poduzeti nužne 
mjere zaštite izoliranjem:{'\n'}
– čitavog uređaja, osim onog dijela na kojem želi raditi{'\n'}
ili{'\n'}
– dijelova na fiksnim potencijalima u neposrednoj blizini neizoliranih dijelova 
uređaja ili vodiča na kojima želi raditi.{'\n'}
      <Text style={styles.blue}>Izolacija se ostvaruje prekrivanjem odgovarajućim izolacijskim pokrivačima.</Text>
      {'\n'}</Text>

      <Text style={styles.subtitle}>4.4. Pomicanje učvršćenih vodljivih dijelova
</Text>
      <Text style={styles.text}>Prije pomicanja neizoliranih vodljivih dijelova mehanički učvršćenih sustava, 
operater mora osigurati učvršćenost dijelova na mjestu. Nakon pomicanja 
mehanički učvršćenog sustava operater mora:{'\n'}
– izolirati neizolirane vodljive dijelove{'\n'}
ili{'\n'}
– kontrolirati pomicanje radi otklanjanja mogućnosti kratkog spoja.{'\n'}
</Text>
      <Text style={styles.blue}>Zadovoljavanje ovih uvjeta može značiti, primjerice, izoliranje oba kraja, 
kada se presječe neki vodič.{'\n'}</Text>

      <Text style={styles.subtitle}>4.5. Rad na izoliranim kabelima
</Text>
      <Text style={styles.text}>Kada se radi na izoliranim kabelima, operateru smije biti dostupan samo 
jedan potencijal (onaj na kojemu radi), tako da se spriječi opasnost od 
kratkih spojeva između faznih vodiča ili između faznih i neutralnog vodiča 
jer takav posao najčešće zahtijeva uporabu alata s metalnim dijelovima koji 
mogu prouzročiti kratke spojeve.{'\n'}
</Text>
      <Text style={styles.blue}>Da bi se osigurala pristupačnost samo jednog potencijala, operater mora 
djelomično izolirati vodič prije skidanja izolacije nekog drugog vodiča, tako 
da ne nastane kratki spoj između faznih ili između faznih i neutralnog vodiča. {'\n'}
Ta mjera neće otkloniti opasnost od kratkog spoja između faznih vodiča 
i zemlje, ona se otklanja mjerama koje su ranije opisane, a to je zaštita 
pokrivanjem zemlje. Materijal za pokrivanje postavljen za sprječavanje 
opasnosti od električnog udara može poslužiti i za zaštitu od kratkog spoja.{'\n'}</Text>

      <Text style={styles.bold}>Rad pod naponom na nadzemnim vodovima s neizoliranim vodičima
</Text>
      <Image style={styles.image} source={require('./image4.png')}/>

      <Text style={styles.text}>Udaljenosti d1 i d2 između neizoliranih aktivnih dijelova i nezaštićenih dijelova 
operaterova tijela moraju biti jednake ili veće od 0,30 m.{'\n'}{'\n'}
Pokrivanje koje se koristi za sprječavanje slučajnih dodira oslobađa operatera 
potrebe da neprestano pazi na održavanje MUP-NN.{'\n'}</Text>
      <Text style={styles.bold}>Rad pod naponom na opremi u razvodnim kutijama i ormarima u 
vlažnim prostorima</Text>
      <Image style={styles.image} source={require('./image5.png')}/>

      <Text style={styles.bold}>Rad pod naponom na podzemnim kabelima
</Text>
      <Image style={styles.image} source={require('./image6.png')}/>

      <Text style={styles.bold}>Rad pod naponom na opremi – razvodne kutije i ormarići
</Text>
      <Image style={styles.image} source={require('./image7.png')}/>








      </View>
    </ScrollView>
  );
}

export default OUIR4;


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
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image:{
    width: 'deviceWidth',
    resizeMode: 'contain',
    marginBottom: -140,
    marginTop: -150, 
  }
});