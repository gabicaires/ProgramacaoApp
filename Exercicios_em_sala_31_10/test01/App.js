import { useEffect, useState } from 'react';
import {Text, View, TextInput, SafeAreaView, Button}from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log('useEffect Chamado')
  }, [contador])

  return (
    <SafeAreaView>
      <View style = {{alignItems: 'center'}}>
        <Button
          title='+'
          onPress = {() => setContador(contador+1)}
        />
        <Text style = {{ fontSize: 24}}>{contador}</Text>
        <Button
          title='-'
          onPress = {() => setContador(contador-1)}
        />

      </View>

      </SafeAreaView>
  )

}