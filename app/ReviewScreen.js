import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function ReviewScreen({ route }) {
  const { questions, userAnswers, correctAnswers } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.reviewHeader}>Pregled ispita</Text>
      {questions.map((question, index) => (
        <View key={index} style={styles.reviewQuestion}>
          <Text style={styles.questionText}>{question.question}</Text>
          <Text>Vaš odgovor: {userAnswers[index].join(', ')}</Text>
          <Text>Točan odgovor: {correctAnswers[index].join(', ')}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  reviewHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reviewQuestion: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ReviewScreen;
