import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Arthur Leite</Text>
    //   <Text style={[styles.title, styles.textRed]}>Mobile</Text>
    // </View>
    <View style={styles.container}>
      <View style={styles.redBox}></View>
      <View style={styles.greenBox}></View>
      <View style={styles.blueBox}></View>
    </View>
  );
};
export default App

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  redBox: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  greenBox: {
    width: 100,
    height: 100,
    backgroundColor: 'green'
  },
  blueBox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  },
});
