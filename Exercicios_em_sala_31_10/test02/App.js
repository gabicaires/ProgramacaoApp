import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform, Button, SafeAreaView, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [input, setInput] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {loadData()}, [])

  async function loadData() {
    await AsyncStorage.getItem('@name').then((value) => {
      setName(value)
    })
  }

  async function addName() {
    await AsyncStorage.setItem('@name', input);
    setName(input);
    setInput('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.txtForm}>
        <TextInput
          style={styles.inpuTxt}
          placeholder='Type your name'
          onChangeText={(value) => setInput(value)}
        />
        <Button
          title='+' 
          onPress={() => addName()}
          />
      </View>
      <Text>{name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  txtForm: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inpuTxt: {
    borderWidth: 1,
    padding: 10,
    width: 350,
    borderRadius: 50,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: 350,
    borderRadius: 50,
  },
  textName: {
    fontSize: 30,
    marginTop: 20,
  },
});