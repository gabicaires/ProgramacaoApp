import React, { useState } from 'react';//import react e useState
import { View, Text, Image, Button, StyleSheet } from 'react-native';//import componentes do React


const quotes = [
  {
    quote: "A imaginação é mais importante que o conhecimento.",
    author: "Albert Einstein",
    image: require('./assets/einstein.jpeg')
  },
  {
    quote: "Não tenha medo da perfeição, você nunca a vai alcançar",
    author: "Salvador Dali",
    image: require('./assets/dali.jpeg')
  },
  {
    quote: "Continue com fome, continue tolo.",
    author: "Steve Jobs",
    image: require('./assets/jobs.jpeg')
  },
  {
    quote: "A simplicidade é o ultimo grau de sofisticação",
    author: "Leonardo da Vinci",
    image: require('./assets/da_vinci.jpeg')
  }
];
/*Definindo o array de objetos chamando de "quotes", 
onde cada objeto contem: um citação, o nome do autor e a imagem correspondente. */

const QuotesApp = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  /*Nesta parte temos o armazenamento da citação atual e da imagem do autor. 
  E em seguida é usada a função "setCurrentQuote" para mudar a citação atual*/

  const newQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);
  };
  /* A função "NewQuote" seleciona aleatoriamente uma citação no array 
  e atualiza o estado da citação.*/

  return (
    <View style={styles.container}>
      <Image source={currentQuote.image} style={styles.authorImage} />
      <Text style={styles.quoteText}>{currentQuote.quote}</Text>
      <Text style={styles.authorText}>- {currentQuote.author}</Text>
      <Button title="Nova citação" onPress={newQuote} />
    </View>
  );
};
/* É exibido na tela a imagem, a citação e o nome do autor. */

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  authorImage: { width: 100, height: 100, marginBottom: 20 },
  quoteText: { fontSize: 18, marginBottom: 10, textAlign: 'center' },
  authorText: { fontSize: 16, fontStyle: 'italic' }
});
/*Estilização do codigo */

export default QuotesApp;
