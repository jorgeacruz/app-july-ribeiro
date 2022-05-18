import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { useFonts,Comfortaa_400Regular} from '@expo-google-fonts/comfortaa';
import AppLoading from 'expo-app-loading';


const { height, width } = Dimensions.get('screen');

export default function App() {

  const [fontsLoaded] = useFonts({ Comfortaa_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <Image source={require('./src/images/july-ribeiro1.png')} style={styles.imgBG}/>

      <View style={styles.Titulo}>
        <Text style={styles.textTitulo}>Login</Text>
      </View>

      <View style={styles.areaFormulario}>
        <TextInput style={styles.textoImput} placeholder="Type your name" placeholderTextColor="#fff" />
        <TextInput style={styles.textoImput} placeholder="Type your email" placeholderTextColor="#fff" />
        
       <View style={{alignSelf:'flex-end',marginBottom:20}}>
        <TouchableOpacity style={styles.btCreateAccount}>
          <Text style={styles.textBtCreateaccount}>Create Account</Text>
        </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btLostpassword}>
          <Text style={styles.textLostpassword}>I lost my password</Text>
        </TouchableOpacity>


      </View>
    
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBG: {
    height:height,
    width:width
  },
  Titulo: {
    position:'absolute',
    top:30,
    width:300
  },
  textTitulo:{
    color:'#fff',
    fontFamily: 'Comfortaa_400Regular',
    fontSize:20

  },
  areaFormulario: {
    position:'absolute',
    bottom:20,
    alignItems:'center',
  },
  
  btCreateAccount: {
    backgroundColor:'#fff',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    padding:6,
    width:140,
    marginBottom:90
    
  },
  btLostpassword: {
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    padding:6,
    width:140,
  },
  textLostpassword:{
    fontWeight:'500',
    fontFamily: 'Comfortaa_400Regular',
    fontSize:14,
    color:'#fff',
    fontWeight:'bold'
    
  },
  textoImput: {
    borderBottomWidth:1,
    borderBottomColor:'#fff',
    width:300, 
    fontFamily:'Comfortaa_400Regular', 
    marginBottom:40
  }
});
