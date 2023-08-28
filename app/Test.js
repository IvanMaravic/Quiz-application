import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function Test() {
  const navigation = useNavigation();

  const originalQuestions = [
    {
      question: "Koja osoba donosi konačnu odluku da li će se obaviti rad pod naponom ili rad u beznaponskom stanju?",
      choices: ["Rukovoditelj radova (operater)", "Dispečer", "Organizator radova pod naponom"],
      correctAnswers: ["Rukovoditelj radova (operater)"]
    },
    {
      question: "Da li se u slučaju jakog vjetra može raditi pod naponom na zračnoj mreži?",
      choices: ["Rad pod naponom može početi", "Rad pod naponom može se završiti", "Rad pod naponom ne može početi", "Rad pod naponom u tijeku ne može se završiti"],
      correctAnswers: ["Rad pod naponom ne može početi", "Rad pod naponom u tijeku ne može se završiti"]
    },
    {
      question: "Da li se može obaviti RPN po mraku (u uvjetima smanjene vidljivosti)?",
      choices: ["Rad pod naponom se može obaviti bez posebnih mjera opreza", "Rad pod naponom se ne može obaviti bez posebnih mjera opreza", "Rad pod naponom se može obaviti uz uporabu pomoćne rasvjete"],
      correctAnswers: ["Rad pod naponom se može obaviti uz uporabu pomoćne rasvjete", "Rad pod naponom se ne može obaviti bez posebnih mjera opreza"]
    },
    {
      question: "Koliko iznosi minimalna udaljenost približavanja (MUP) za postrojenja niskog napona? ",
      choices: ["0.2 m", "0.3 m", "0.4 m", "0.5 m",],
      correctAnswers: ["0.3 m"]
    },
    {
      question: "Kako može nastati kratki spoj? ",
      choices: ["dodirivanjem dva vodljiva dijela na različitim fiksnim potencijalima",
 	"dodirivanjem dva vodljiva dijela na istim fiksnim potencijalima",
 	"dodirivanjem vodljivog dijela na nekom ˝lutajućem˝ potencijalu sa dva vodljiva dijela na različitim fiksnim potencijalima",
 	"dodirivanjem vodljivog dijela na nekom ˝lutajućem˝ potencijalu s vodljivim dijelom na fiksnom potencijalu",
	"dodirivanjem dva vodljiva dijela na nekom ˝lutajućem˝ potencijalu s vodljivim dijelom na fiksnom potencijalu",
 	"dodirivanjem izolacijskog dijela sa dva vodljiva dijela na različitim fiksnim potencijalima"],
       correctAnswers: ["dodirivanjem dva vodljiva dijela na različitim fiksnim potencijalima", "dodirivanjem vodljivog dijela na nekom ˝lutajućem˝ potencijalu sa dva vodljiva dijela na različitim fiksnim potencijalima"]
    },
{
      question: "Provjera alata i osobne zaštitne opreme? ",
      choices: ["Alati za RPN ne moraju se provjeriti prije rada",
"Izolacijske rukavice moraju se provjeriti prije rada",
"Izolirani alat može se koristiti iako na njemu više nema izolacije",
"Izolirani alat mora se provjeriti prije početka rada"],
      correctAnswers: ["Izolacijske rukavice moraju se provjeriti prije rada", "Izolirani alat mora se provjeriti prije početka rada"]
    },
{
      question: "Održavanje odobrenih alata?",
      choices: ["Korisnik može popravljati alate bez posebnih uvjeta",
 "Korisnik može popravljati alate u skladu s uvjetima za popravljanje definiranim u TOA NN ili uputama proizvođača"],
      correctAnswers: ["Korisnik može popravljati alate u skladu s uvjetima za popravljanje definiranim u TOA NN ili uputama proizvođača"]
    },
{
      question: "Da li se u slučaju grmljavine može raditi pod naponom na postrojenju NN? ",
      choices: ["Rad pod naponom može početi",
	"Rad pod naponom može se završiti",
	"Rad pod naponom ne može početi",
	"Rad pod naponom u tijeku ne može se završiti",],
      correctAnswers: ["Rad pod naponom ne može početi",
	"Rad pod naponom u tijeku ne može se završiti",]
    },
{
      question: "Uloga rukovoditelja radova?",
      choices: ["Rukovoditelj radova bi uvijek morao sam nadgledati kompletno mjesto rada,(vrlo veliko mjesto rada)",
	"Rukovoditelj radova bi uvijek morao sam nadgledati kompletno mjesto rada,(manje mjesto rada)",
	"Rukovoditelj radova je odgovoran za provjeru zajedničkih alata",
	"Rukovoditelj radova bi trebao provjeriti osobnu zaštitnu opremu (OZO) svakog operatera",],
      correctAnswers: ["Rukovoditelj radova bi uvijek morao sam nadgledati kompletno mjesto rada,(manje mjesto rada)", "Rukovoditelj radova je odgovoran za provjeru zajedničkih alata"]
    },
{
      question: "Kako operater mora smatrati samog sebe dok radi pod naponom koristeći izolacijske rukavice? ",
      choices: ["Kao da je vodljiv i na potencijalu zemlje ",
	"Kao da je vodič na potencijalu na kojem radi (kojeg dodiruje)",
	"Kao da je izolator"],
      correctAnswers: ["Kao da je vodljiv i na potencijalu zemlje "]
    },
{
      question: "Što operater mora provjeriti prije odspajanja (prekidanja) strujnog kruga? ",
      choices: ["Da li se mjesto otvaranja nalazi u prostoru gdje postoje rizici od eksplozije ",
	"Da li otvara neki teret ili ne",
	"Raspored faznog i neutralnog vodiča",
	"Mogu li se vodiči ponovno lako spojiti"],
      correctAnswers: ["Da li se mjesto otvaranja nalazi u prostoru gdje postoje rizici od eksplozije ",
	"Da li otvara neki teret ili ne",
	"Raspored faznog i neutralnog vodiča"]
    },
{
      question: "Ako se u strujnom krugu vodiči ne spajaju istovremeno koji vodič treba prvi spojiti? ",
      choices: [
	"Neutralni vodič",
	"Fazni vodič",
	"Bilo koji vodič, bitno je da je dobro spojeno"],
      correctAnswers: ["Neutralni vodič"]
    },
{
      question: "Krajeve (završetke) kojih vodiča treba ponovo izolirati nakon odspajanja?",
      choices: ["Neutralnog vodiča",
	"Fazne vodiče",
	"Vodiče na lutajućem potencijalu",
	"Samo vodiče na fiksnom potencijalu"],
      correctAnswers: ["Neutralnog vodiča",
	"Fazne vodiče",
	"Vodiče na lutajućem potencijalu"]
    },
{
      question: "Koja osoba je odgovorna / ispisuje (popunjava) Pripremu za rad pod naponom NN?",
      choices: ["Organizator radova",
	"Voditelj električnog postrojenja",
	"Rukovoditelj radova ili operater",
	"Koordinator radova"],
      correctAnswers: ["Rukovoditelj radova ili operater "]
    },
{
      question: "Koja osoba je odgovorna / ispisuje (popunjava) Dopusnicu za rad pod naponom NN?",
      choices: ["Organizator radova",
	"Voditelj električnog postrojenja",
	"Rukovoditelj radova ili operater",
	"Koordinator radova"],
      correctAnswers: ["Voditelj električnog postrojenja"]
    },
{
      question: "Koja osoba je odgovorna / ispisuje (popunjava) Nalog za rad? ",
      choices: ["Organizator radova",
	"Voditelj električnog postrojenja",
	"Rukovoditelj radova ili operater",
	"Koordinator radova"],
      correctAnswers: ["Organizator radova "]
    },
{
      question: "Uloga operatera? (Koji nije rukovoditelj radova)",
      choices: ["Operater je odgovoran za vlastitu sigurnost",
	"Operater je odgovoran za provjeru vlastite zaštitne opreme(OZO)",
	"Operater je odgovoran za provjeru zajedničkih alata"],
      correctAnswers: ["Operater je odgovoran za vlastitu sigurnost","Operater je odgovoran za provjeru vlastite zaštitne opreme(OZO)"]
    },
{
      question: "Što učiniti s alatom koji nije zadovoljio prilikom provjere?",
      choices: ["Ukloniti iz alata koji će se koristiti","Označiti 'nije za uporabu'","Normalno ga koristiti"],
      correctAnswers: ["Ukloniti iz alata koji će se koristiti","Označiti 'nije za uporabu'"]
    },
{
      question: "Kojom metodom rada je dozvoljeno raditi na niskonaponskoj mreži pod naponom?",
      choices: ["Metodom rada 'u dodiru'","Metodom rada 'u potencijalu'","Metodom rada 'na udaljenosti'"],
      correctAnswers: ["Metodom rada 'u dodiru'"]
    },
{
      question: "Koja se oprema ubraja u osobnu zaštitnu opremu (OZO) za RPN na niskom naponu?",
      choices: ["Zaštitna kaciga s vizirom",
	"Izolacijske gumene rukavice",
	"Izolirani alati",
	"Zaštitna obuća",
	"Izolacijski pokrivači",
	"Radno odijelo razred 1 otpornost na električni luk",
	"Zaštitne naočale"],
      correctAnswers: ["Zaštitna kaciga s vizirom", "Izolacijske gumene rukavice", "Zaštitna obuća"," Radno odijelo razred 1 otpornost na električni luk",
	"Zaštitne naočale"]

    },
{
      question: "Kada započinje faza RPN na izoliranom vodiču?",
      choices: ["Dolaskom na mjesto rada", 
	"Kada operater počne skidati izolaciju s vodiča",
	"Kada je izolacija s vodiča u potpunosti uklonjena",
	"Kada rukovoditelj radova (operater) dobije uvjerenje za RPN"],
      correctAnswers: ["Kada operater počne skidati izolaciju s vodiča"]
    }
  ];

  const [questions, setQuestions] = useState(shuffleArray(originalQuestions));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill([]));
  const [showFinalResult, setShowFinalResult] = useState(false);

  useEffect(() => {
    setQuestions(shuffleArray(originalQuestions.slice(0, 10))); // Select first 10 questions
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers(Array(10).fill([])); // Initialize userAnswers with 10 empty arrays
    setShowFinalResult(false);
  }, []);
  
  const handleChoicePress = (choice) => {
    const selectedAnswers = [...userAnswers[currentQuestionIndex]]; // Use spread operator
    const index = selectedAnswers.indexOf(choice);
  
    if (index !== -1) {
      selectedAnswers.splice(index, 1);
    } else {
      selectedAnswers.push(choice);
    }
  
    setUserAnswers((prevUserAnswers) => {
      const newUserAnswers = [...prevUserAnswers];
      newUserAnswers[currentQuestionIndex] = selectedAnswers;
      return newUserAnswers;
    });
  };

  const checkAnswer = () => {
    const selectedAnswers = userAnswers[currentQuestionIndex];
    const correctAnswers = questions[currentQuestionIndex].correctAnswers;

    const isCorrect =
      selectedAnswers.length === correctAnswers.length &&
      correctAnswers.every((answer) => selectedAnswers.includes(answer));

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowFinalResult(true);
    }
  };

  const showFinalScoreAndReview = () => {
    navigation.navigate('FinalScoreAndReview', {
      score,
      questions,
      userAnswers,
      correctAnswers: questions.map((question) => question.correctAnswers),
    });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./HEPLogo.png')} />
      {!showFinalResult ? (
        <>
          <Text style={styles.question}>
            {questions[currentQuestionIndex].question}
          </Text>
          {questions[currentQuestionIndex].choices.map((choice, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.choiceButton,
                userAnswers[currentQuestionIndex].includes(choice)
                  ? styles.selectedChoice
                  : null,
              ]}
              onPress={() => handleChoicePress(choice)}
            >
              <Text>{choice}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.answerButton}
            onPress={checkAnswer}
          >
            <Text>Sljedeće pitanje</Text>
          </TouchableOpacity>

          </>
      ) : (
        <>
          <Text style={styles.finalScore}>Ukupan broj bodova: {score}/{questions.length}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ReviewScreen', {
            questions: questions,
            userAnswers: userAnswers,
            correctAnswers: questions.map((question) => question.correctAnswers),
              })}>
            <Text style={styles.link}>Pregled ispita</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.link}>Početna</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    maxWidth: 250,
    width: '100%',
    resizeMode: 'contain',

  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  choiceButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  selectedChoice: {
    backgroundColor: 'lightblue',
  },
  answerButton: {
    backgroundColor: 'lightgreen',
    color: '#fff',
    padding: 10,
    marginVertical: 10,
    marginBottom: 150,
    borderRadius: 5,
  },
  finalScore: {
    fontSize: 22,
    marginBottom: 20,

  },
  link: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default Test;
