
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import { useFonts,Comfortaa_400Regular} from '@expo-google-fonts/comfortaa';
import { useNavigation } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';


const { height, width } = Dimensions.get('screen');

export default function Home() {

  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({ Comfortaa_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <Image source={require('../images/july-ribeiro.png')} style={styles.imgBG}/>

      <View style={styles.Titulo}>
        <Text style={styles.textTitulo}>July Ribeiro</Text>
      </View>

      <View style={styles.areaLogin}>
        <TouchableOpacity style={styles.btLogin} onPress={ () => navigation.navigate('Login')}>
          <Text style={{color:'#fff',fontFamily: 'Comfortaa_400Regular'}}>@ Sign with E-mail</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btCreateAccount} onPress={ () => navigation.navigate('CreateAccont')}>
          <Text style={styles.textBtCreateaccount}>Create Account Now</Text>
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
    width:width,
    opacity:0.7
  },
  Titulo: {
    position:'absolute',
    top:30,
  },
  textTitulo:{
    color:'#fff',
    fontFamily: 'Comfortaa_400Regular',
    fontSize:50

  },
  areaLogin: {
    position:'absolute',
    bottom:20,
    alignItems:'center'
  },
  btLogin: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#000',
    width:260,
    padding:11,
    marginBottom:15,
    borderRadius:50
  },
  btCreateAccount: {
    justifyContent:'center',
    alignItems:'center',
    width:300,
  },
  textBtCreateaccount:{
    color:'#fff',
    fontWeight:'500',
    fontFamily: 'Comfortaa_400Regular',
    fontSize:18
    
  }
});
