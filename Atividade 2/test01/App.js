import React, { useState } from 'react'; //import react e useState
import { View, Text, Button, Image, StyleSheet } from 'react-native';//import componentes do React

const FortuneCookieApp = () => {// definindo componentes
  const [isBroken, setIsBroken] = useState(false);
  const [fortune, setFortune] = useState('');
  /*Boleano indicando se o biscoito esta quebrado. 
    sETiSBROKEN atulaiza o estado do biscoito 
    Fortune - onde esta a frase da sorte
    SetFortune - define a frase
  */
  const fortunes = [
    "Hoje é seu dia de sorte!",
    "Coisas boas estão vindo em sua direção!",
    "Você alcançará seus objetivos em breve."
  ];
  //array de frases que serão exibidas aleatoriamente ao quebrar o biscoito
  
  const breakCookie = () => {
    setFortune(fortunes[Math.floor(Math.random() * fortunes.length)]);
    setIsBroken(true);
  };
  /*BreakCookie - quando clica no botão é a função chamada
  SetFortune -  Atualiza a frase aleatoriamente do array
  Setisbroken - Muda o biscoito para quebrado*/

  return (
    <View style={styles.container}>
      <Image
        source={isBroken ? require('./assets/cookie_open.png') : require('./assets/cookie_closed.jpeg')}
        style={styles.cookieImage}
      />
      {isBroken && <Text style={styles.fortuneText}>{fortune}</Text>}
      <Button title="Quebre o biscoito" onPress={breakCookie} />
    </View>
  );
};
/*Image- Nesta parte ele irá exibir a imagem do biscoito. Se a função isBroken for true, 
aparece na tela o biscoito quebrado, se não aparecerá fechado */
/*isBroken &&... - Nesta parte a frase é sorteada*/

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  cookieImage: { width: 200, height: 200 },
  fortuneText: { marginTop: 20, fontSize: 18 }
});
/*Estilização do codigo */

export default FortuneCookieApp;
