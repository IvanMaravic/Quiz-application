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

function OUIR11() {
  const navigation = useNavigation();
  const scrollEnabled = this.state.screenHeight > height;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.title}>11. PREDSTAVNICI POSLODAVCA ZADUŽENI ZA RADNIKE KOJI 
IZVODE RPN NA NN {'\n'}</Text>
      <Text style={styles.text}>Svaki poslodavac svojim radnicima mora dati informacije o specifičnim uvjetima 
i kojim tehnikama rada smiju raditi pod naponom (napisano u Ovlaštenju). Takve 
informacije moraju biti povezane s propisima i provedbom RPN NN.{'\n'}{'\n'}
U organizacijskom smislu, u RPN je uključen tim odgovornih ljudi (imenovanih 
posebnim odlukama o odgovornostima, ovlastima i obvezama direktora sektora i 
distribucijskih područja u procesima uvođenja, provedbe, nadzora i unapređenja 
izvođenja radova pod naponom), a u izvršnom smislu uključeni su radnici.{'\n'}</Text>
      <Text style={styles.subtitle}>11.1. Ciljevi
</Text>
      <Text style={styles.text}>Tim odgovornih ljudi (voditelji, voditelji električnih postrojenja, koordinatori i 
stručnjaci zaštite na radu) treba se obrazovati tako da mogu:{'\n'}
– uspostaviti ulogu i odgovornosti u razmjeni informacija s operaterima za 
RPN NN {'\n'}
– razumijevati područje primjene Ovlaštenja za RPN{'\n'}
– ustanoviti prikladnost za izvođenje RPN NN{'\n'}
– unaprijediti pripremu rada{'\n'}
– unaprijediti izvođenje rada{'\n'}
– unaprijediti sposobnost otkrivanja i istraživanja opasnih (rizičnih) situacija{'\n'}
– predlagati plan obuke radnika na temelju postojećih iskustava.{'\n'}</Text>
      <Text style={styles.subtitle}>11.2. Tečaj rada pod naponom za voditelje
</Text>
      <Text style={styles.text}>Tečajem rada pod naponom za voditelje polaznici stječu potrebna znanja o:{'\n'}
– organizaciji RPN{'\n'}
– propisima koji se odnose na RPN{'\n'}
– internim aktima koji reguliraju RPN{'\n'}
– opremi i alatima.{'\n'}{'\n'}
Tečaj rada pod naponom za voditelje traje dva dana, a voditelji na kraju 
tečaja prenesena znanja potvrđuju polaganjem ispita za voditelje.{'\n'}</Text>
      <Text style={styles.subtitle}>11.3. HEP NOC i uvjerenja
</Text>
      <Text style={styles.text}>11.3.1. Uvjerenje o pohađanom tečaju rada pod naponom za voditelje (niski napon)
Sadržaj tečaja za voditelje, sve potrebne informacije i preporuke polaznicima 
tečaja (predstavnicima poslodavca) iznose instruktori i promotori za RPN iz 
ovlaštene ustanove (HEP NOC).{'\n'}{'\n'}
Uvjerenje koje se izdaje na kraju ovog tečaja, nakon uspješno položenog 
ispita, služi samo kao potvrda o pohađanju tečaja s razumijevanjem 
prava i obveza u organizaciji RPN-a i ne može se koristiti kao podloga za 
izdavanje Ovlaštenja za RPN samom voditelju. Bez posjedovanja uvjerenja o 
pohađanom tečaju rada pod naponom za voditelje, voditelj kao predstavnik 
poslodavca, ne može ispunjavati Ovlaštenja za RPN operaterima i ovjeravati 
ih potpisom direktora organizacijske jedinice. Polaznici koji završe tečaj 
rada pod naponom za voditelje mogu popunjavati i izdavati isprave za rad 
pod naponom.{'\n'}{'\n'}
11.3.2. Uvjerenje o teoretskom i praktičnom osposobljavanju za RPN
Na kraju prvog dijela obuke (teorija i RPN na poligonu) u HEP NOC izdaje se 
uvjerenje kojim se potvrđuje da je operater uspješno završio taj dio obuke.
Nakon toga operater može započeti s praktičnim dijelom obuke na svom 
radnom mjestu, uz trajni nadzor poslodavca i povremeni nadzor instruktora 
iz HEP NOC.{'\n'}{'\n'}
Trajni nadzor poslodavca provodi stručnjak zaštite na radu, drugi voditelj 
koji je pohađao tečaj rada pod naponom za voditelje ili radnik s važećim 
Ovlaštenjem za rad pod naponom u kojem je navedena razina stručnosti 2 
(ovlašteni rukovoditelji radova pod naponom).{'\n'}{'\n'}
Tijekom izvođenja stručne prakse za svakog operatera vodi se dnevnik 
radova pod naponom, prema uputama HEP NOC, a koji se prije polaganja 
završnog ispita dostavlja stručno-pedagoškom voditelju HEP NOC.{'\n'}{'\n'}
Nakon završetka praktičnog dijela obuke na radnom mjestu i polaganja 
završnog ispita, HEP NOC izdaje uvjerenje o usavršavanju za rad pod 
naponom na niskom naponu. Poslodavac koristi izdano uvjerenje kako bi 
operateru mogao izdati Ovlaštenje za rad pod naponom na niskom naponu 
i upisati mu u radnu knjižicu stručno usavršavanje za zvanje elektromonter {'\n'}
– specijalist za rad pod naponom.</Text>



      </View>
    </ScrollView>
  );
}

export default OUIR11;


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