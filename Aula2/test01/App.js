import {View, Text, Image} from 'react-native'
import {useState} from 'react' 

function App() {

  return (
    <View style={{marginTop: 90, paddingHorizontal: 120}}>
      <Image 
        source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
        width={155}
        height={90}
      
      />
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Lorem Picsum</Text>
      
      
    </View>
  );
}

export default App



// function Imagem(props){
//   let img = 'https://picsum.photos/200/300/?blur'
//   return (
//     <Image
//       source={{uri: img}}
//       width= {props.largura}
//       height= {props.altura}
//     />
//   )
// }


// function Imagem(largura, altura) {
//   let img = 'https://picsum.photos/id/237/200/300'
//   return(
//     <Image
//       source={{uri: img}}
//       width= {largura}
//       height= {altura}
//     />
//   )
// }

