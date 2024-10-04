import React, { useState } from 'react';
import { View, Text, SafeAreaView, Switch, Button, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

function App() {
  // Estado inicial das preferências
  const [temaSelecionado, setTemaSelecionado] = useState('Escuro');
  const [tamanhoFonte, setTamanhoFonte] = useState(21);
  const [modoNoturno, setModoNoturno] = useState(false);

  // Opções de temas para o Picker
  const temas = [
    { key: 'claro', nome: 'Claro' },
    { key: 'escuro', nome: 'Escuro' },
    { key: 'automatico', nome: 'Automático' }
  ];

  // Função para resetar as preferências
  const resetarPreferencias = () => {
    setTemaSelecionado('Escuro');
    setTamanhoFonte(21);
    setModoNoturno(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Configurações de Preferências</Text>

      {/* Picker para selecionar o tema */}
      <Text style={{ ...styles.label, fontSize: tamanhoFonte }}>Tema do Aplicativo</Text>
      <Picker
        selectedValue={temaSelecionado}
        onValueChange={(itemValue) => setTemaSelecionado(itemValue)}
        style={styles.picker}
      >
        {temas.map((tema) => (
          <Picker.Item
            key={tema.key}
            label={tema.nome}
            value={tema.nome}
          />
        ))}
      </Picker>

      {/* Slider para ajustar o tamanho da fonte */}
      <Text style={{ ...styles.label, fontSize: tamanhoFonte }}>Tamanho da Fonte</Text>
      <Slider
        style={styles.slider}
        minimumValue={12}
        maximumValue={30}
        value={tamanhoFonte}
        onValueChange={(value) => setTamanhoFonte(value)}
        step={1}
      />
      <Text style={{ fontSize: tamanhoFonte }}>Tamanho da Fonte: {tamanhoFonte}</Text>

      {/* Switch para ativar/desativar o modo noturno */}
      <Text style={{ ...styles.label, fontSize: tamanhoFonte }}>Modo Noturno</Text>
      <Switch
        value={modoNoturno}
        onValueChange={(value) => setModoNoturno(value)}
      />
      <Text style={{ fontSize: tamanhoFonte }}>
        {modoNoturno ? 'Ativado' : 'Desativado'}
      </Text>

      {/* Botão para resetar as preferências */}
      <Button title="Resetar Preferências" onPress={resetarPreferencias} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 20,
    marginTop: 50,
    textAlign: 'center',
  },
  label: {
    color: 'purple',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 5,
  },
  picker: {
    height: 50,
    marginBottom: 150,
  },
  slider: {
    width: '100%',
    height: 20,
  },
});

export default App;
