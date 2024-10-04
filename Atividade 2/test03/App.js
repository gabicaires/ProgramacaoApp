import React, { useState, useRef } from 'react';//import react, useState e useRef(para armazenar o intervalo do cronometro)
import { View, Text, Button, StyleSheet } from 'react-native';//import componentes do React

const StopwatchApp = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  /*Time - armazena o tempo e IntervalRef - usa o UseRef para armazenar o intervalo */

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
  };
  /*É iniciado o cronometro e a função "!intervalRef.current" define um intervalo de 10 milissegundos */

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  /*Pausa o cronômetro e limpa o imtervalo */

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  };
  /*Reinicia o cronômetro, limpando o intervalo e reiniciando o tempo para 0. */

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>
        {Math.floor(time / 60000)}:{Math.floor((time % 60000) / 1000)}:{(time % 1000) / 10}
      </Text>
      <Button title="Começar" onPress={startTimer} />
      <Button title="Pausar" onPress={pauseTimer} />
      <Button title="Reiniciarc" onPress={resetTimer} />
    </View>
  );
};
/*Mostra o tempo decorrido em minutos, segundos e milissegundos na tela. */

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  timeText: { fontSize: 48, marginBottom: 20 }
});
/*Estilização de codigo */

export default StopwatchApp;
