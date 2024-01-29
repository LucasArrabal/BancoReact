import React , {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }




  render(){
    return (
      <View style={styles.container}>
        <View style={styles.areaTitulo}>
        <Text  style={styles.Titulo}>Cadastro da Conta</Text>
        </View>

        <TextInput
        style={styles.nomeInput}
        placeholder='Digite seu nome completo'
        underlineColorAndroid="transparent"
        />

        
      </View>
    );
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  areaTitulo: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Titulo: {
    fontSize: 30
  },
  nomeInput: {
    height: 45,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'black',
    margin: 10,
    fontSize: 20,
    padding: 10
  }

});
