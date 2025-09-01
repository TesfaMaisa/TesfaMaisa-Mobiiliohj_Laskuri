import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

export default function App() {

  function summa(x,y){ 
   let result = 'Vastaus: ' + (Number(x) + Number(y))
   return setAnswer(result)
  }
  function miinus(x,y){ 
   let result = 'Vastaus: ' + (Number(x) - Number(y))
   return setAnswer(result)
  }



  const [number1,setNumber1] = useState(0)
  const [number2,setNumber2] = useState(0)


  


  return (
      <View style={styles.container}>
      <View style={{flex:1}}>
      <Text style={{fontSize:50,marginTop:100, fontFamily:'impact', borderBottomWidth:20}}>Laskin</Text>
      </View>
      <Text style={{fontSize:20, fontWeight:'bold'}}> {answer} </Text> 
      <View style={{flex:1.5}}>
      <TextInput style={{backgroundColor:'white', padding:'5', width:100,borderBottomWidth:2}} keyboardType='numeric' keyboardAppearance='dark' returnKeyType='done' onChangeText={number1 => setNumber1(number1)} value={number1}></TextInput>      
      <TextInput style={{backgroundColor:'white', padding:'5', width:100}}  keyboardType='numeric' keyboardAppearance='dark' returnKeyType='done' onChangeText={number2 => setNumber2(number2)} value={number2}></TextInput>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
      <Button color='gold' title='+' onPress= {()=>{summa(number1,number2)}} />
      <Button color='gold' title='-' onPress= {()=>{miinus(number1,number2)}} />
      </View>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0404ff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent:'space-around'
  },
});
