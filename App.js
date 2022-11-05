import React, {useState} from 'react';
import {View, Text, TextInput, Switch, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { Picker }from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App(){
  
  const [selectedSex, setSelectedSex] = useState(0);
  const [limite, setLimite] = useState(0);
  const [estudante, setEstudante] = useState(false);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);

  function cadastrar(){
    if (nome == '' || idade == 0 || limite == 0){
      alert('Preencha os campos obrigatorios');
      return;
    }
    alert(`Cadastro Completo!! \n\nNome: ${nome}\nIdade: ${idade}\nSexo: ${sexo[selectedSex].label}\nLimite: ${limite}\nEstudante: ${estudante ? 'sim' : 'nao' } `);
  }

  let sexo = [
    {key:0, label:'Feminino', value:0 },
    {key:1, label:'Masculino', value:1 },
    {key:2, label:'Outro', value:2 }
  ]

   let sexoitem = sexo.map( ( v, k ) => {
      return <Picker.Item label={v.label} value={v.value} key={k} />
   });
  
  return(
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headertexto}>Banco Sujeito</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input} 
          onChangeText={(value) => setNome(value)}
          placeholder='Insira seu nome' 
        />

       <TextInput
          style={styles.input} 
          onChangeText={(value) => setIdade(value)}
          placeholder='Insira sua idade' 
        />

        <View style={styles.sexarea}>
          <Picker
            style={styles.sexo}
            selectedValue={selectedSex}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedSex(itemValue)
            }>
            {sexoitem}
          </Picker>
        </View>
        
        <View style={styles.limitearea}>
          <Text style={styles.textolimite}>Escolha seu limite</Text>
          <Slider
            onValueChange={(value) => { setLimite(value)}}
            minimumValue={0}
            maximumValue={2000}
          />
          <Text style={styles.limite}>R$ {limite}</Text>
        </View>
        
        <View style={styles.estudantearea}>
          <Text>Estudante</Text>
          <Switch
            value={estudante}
            onValueChange={ (status) => setEstudante(status)}
          />

        </View>

        <View style={styles.arebotao}>
          <TouchableOpacity 
            style={styles.botao}
            onPress={ cadastrar }
          >
              <Text style={styles.textobotao}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>
  );0
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  header:{
    backgroundColor: 'blue',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headertexto:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25
  },
  form:{
    flex: 3,
    marginTop: 10
  },
  input:{
    margin: 4,
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 50
  },
  sexarea:{
    borderWidth: 1,
    padding: 10,
    margin: 4,
    height: 50,
    justifyContent: 'center',
    borderRadius: 50
  },
  limitearea:{
    marginTop: 20,

  },
  textolimite:{
    marginBottom: 10,
    textAlign: 'center'
  },
  limite:{
    textAlign: 'center',
    fontSize: 20
  },
  estudantearea:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  arebotao:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  botao:{
    borderWidth: 1,
    padding: 20,
    borderRadius: 40,
    width: 200,
    alignItems: 'center',
    backgroundColor: 'blue',
    borderColor: 'blue'
  },
  textobotao:{
    color: 'white'
  }

})