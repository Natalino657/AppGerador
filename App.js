import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { useState } from 'react';


export default function App() {
  const [size, setSize] = useState(10)
  const [password, setPassWord] = useState('')
  const [modalViseble, setModalViseble] = useState(false);

  const charset = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    special: "!@#$%^&*()_+[]{}|;:,.<>?/`~"
  };

  const allCharacters = charset.uppercase + charset.lowercase + charset.numbers + charset.special;

  
  function generatePassword(size){
    let password = '';
    for(let i = 0; i < size; i++ ){
      const randomIndex = Math.floor(Math.random()*allCharacters.length);
      password += allCharacters[randomIndex];
    }
    
    console.log('Generated Password:'+ password);
    setPassWord(password);
    setModalViseble(true);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo}
      source={require("./src/assets/logo.png")}
      />
 

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
        style={{height:50}}
        minimumValue={6}
        maximumValue={20}
        maximumTrackTintColor='#ff0000'
        minimumTrackTintColor='#000'
        thumbTintColor='#392de9'
        value={size}
        onValueChange={(value)=>setSize(Math.round(value))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={()=>generatePassword(size)}>
        <Text style={styles.buttonText}>Gerar password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:30,
    fontWeight:'600',

  },
  logo:{
    marginBottom:60,
  },
  area:{
    marginTop:14, 
    marginBottom:14,
    width:'80%',
    backgroundColor:'#fff',
    borderRadius:8,
    padding:10,
  },
  button:{
    backgroundColor:'#392de9',
    width:'80%',
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
  },
  buttonText:{
    color:'#fff'
  }
});
