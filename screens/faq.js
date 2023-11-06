import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, LayoutAnimation } from 'react-native';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'Question 1',
      answer: 'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor',
      isExpanded: false,
    },
    {
      question: 'Question 2',
      answer: 'so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor',
      isExpanded: false,
    },
    {
      question: 'Question 3',
      answer: 'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor',
      isExpanded: false,
    },
    {
      question: 'Question 4',
      answer: 'Answer to Question 4',
      isExpanded: false,
    },
    {
      question: 'Question 5',
      answer: 'Answer to Question 5',
      isExpanded: false,
    },
    {
      question: 'Question 1',
      answer: 'Answer to Question 1',
      isExpanded: false,
    },
    {
      question: 'Question 2',
      answer: 'Answer to Question 2',
      isExpanded: false,
    },
    {
      question: 'Question 3',
      answer: 'Answer to Question 3',
      isExpanded: false,
    },
    {
      question: 'Question 4',
      answer: 'Answer to Question 4',
      isExpanded: false,
    },
    {
      question: 'Question 5',
      answer: 'Answer to Question 5',
      isExpanded: false,
    },
    // Add more FAQs here as needed
  ]);

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [faqs]);

  const toggleFAQ = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].isExpanded = !updatedFaqs[index].isExpanded;
    setFaqs(updatedFaqs);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Frequently Asked Questions</Text>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqSection}>
            <TouchableOpacity onPress={() => toggleFAQ(index)} style={styles.faqContainer}>
              <Text style={styles.faqText}>{faq.question}</Text>
              <Text style={styles.plusLogo}>{faq.isExpanded ? ' ᐯ ' : ' ᐳ '}</Text>
            </TouchableOpacity>
            {faq.isExpanded && (
              <Text style={styles.answer}>{faq.answer}</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#dcf0b1',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    
  },
  content: {
    marginTop: 10,
  },
  faqSection: {
    marginTop: 20,
  },
  answer: {
    padding: 20,
    marginRight: 10,
    marginLeft: 10,
    
  },
  faqContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    marginLeft: 10,
    padding: 20,
    backgroundColor: '#94CD16',
    backgroundColoropacity: 5,
    borderRadius: 10,
  },
  faqText: {
    fontSize: 18,
  },
  plusLogo: {
    fontSize: 24,
  },
});

export default FAQ;
