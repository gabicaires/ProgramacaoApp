import React, { useState } from 'react';//import react e useState
import { View, Text, Button, StyleSheet } from 'react-native';//import componentes do React

const RestaurantCounterApp = () => {//Componente responsável por renderizar a interface do usuário.
  const [people, setPeople] = useState(0);
  /* people - Numero de pessoas inicialmente em 0
  SetPeople - atualiza o estado de "people"  */

  const increment = () => setPeople(people + 1);//Função que aumenta o número de pessoas em 1. Toda vez chamada atualiza o "people" em 1.
  const decrement = () => setPeople(people > 0 ? people - 1 : 0);/*Função que diminui o número de pessoas em 1. 
  Porem, ela verifica se o número de pessoas é maior que 0 antes de diminuir. Caso seja ==0, permanece o mesmo valor.*/

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>People in Restaurant: {people}</Text>
      <Button title="Add" onPress={increment} />
      <Button title="Remove" onPress={decrement} />
    </View>
  );
};
/*Nesta parte mostra no app quantas pessoas estão no restaurante usando o componente Text, com o número atualizado em tempo real pelo estado people. 
Tem dois botões simples: "Add", que adiciona uma pessoa, e "Remove", que tira uma, mas sem deixar o número ficar negativo. */

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  countText: { fontSize: 24, marginBottom: 20 }
});
/*Estilização de codigo */

export default RestaurantCounterApp;
