import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Landing from './Landing';

const Start = ({navigation})=>{
const [isfirst, setIsFirst] = useState(false)
  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const hasLoggedIn = await AsyncStorage.getItem('isfirst');
      if (hasLoggedIn === 'true') {
        setIsFirst(true);
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  const handleButtonClick = () => {
    navigation.navigate('landing');
  };



  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/image.png')} 
        style={styles.image}
        resizeMode="cover"
      >
       

        <View style={styles.overlay}>
          <Text style={styles.title}>Coffee so good,</Text>
          <Text style={styles.title}  >your tast buds</Text>
          <Text style={styles.title}>will love it.</Text>
          <Text style={styles.para}>The best grin the finest roast,the {"\n"} powerful flavor.</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleButtonClick}>Get Started</Text>
        
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width:400,
    height:510
  },
  overlay: {
    flex: 1,
    backgroundColor: ' rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  //  rgba(0,0,0,0.5)
    
  },
  title: {
    
      color: 'white',
      fontSize: 30,
      textAlign: 'center',
    marginTop:1,
    
      
  
    // fontSize: 24,
    // fontWeight: 'bold',
    // color: '#ffffff',
    // marginBottom: 50,
    
  },
  para:{
color:'#FFFFFF',
justifyContent:'center',
textAlign:'center',
marginBottom:-370
  },
  button: {
    backgroundColor: '#e68a00',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    borderRadius: 15,
    paddingVertical: 22,
    paddingHorizontal: 120,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
});

export default Start;
