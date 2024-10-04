import { useState } from 'react' 
import { View, Text, StyleSheet } from 'react-native'
import  User from  './src/User'

function App() {
  const [users, setUsers] = useState([
    { id: 1, nome: 'João Silva', idade: 25, email: 'joao.silva@gmail.com'},
    { id: 2, nome: 'Maria Oliveira', idade: 30, email: 'maria.oliveira@gmail.com'},
    { id: 3, nome: 'Carlos Souza', idade: 28, email: 'carlos.souza@gmail.com'},
    { id: 4, nome: 'Ana Pereira', idade: 26, email: 'ana.pereira@gmail.com'},
    { id: 5, nome: 'Pedro Costa', idade: 18, email: 'pedro.costa@gmail.com'},
    { id: 6, nome: 'Beatriz Santos', idade: 32, email: 'beatriz.santos@gmail.com'},
    { id: 7, nome: 'Lucas Almeida', idade: 29, email: 'lucas.almeida@gmail.com'},
    { id: 8, nome: 'Fernanda Lima', idade: 24, email: 'fernanda.lima@gmail.com'},
    { id: 9, nome: 'Gabriel Rocha', idade: 27, email: 'gabriel.rocha@gmail.com'},
    { id: 10, nome: 'Juliana Fernandes', idade: 30, email: 'juliana.fernandes@gmail.com'},
  ])
 
  return (
      <View style={{ flex:1, marginTop: 50, padding: 10}}>
          <FlatList
              data={users}
             renderItem={({ item }) => <User user={item} />}
          />
      </View>
  )
}