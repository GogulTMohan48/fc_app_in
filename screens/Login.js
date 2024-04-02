import {  View, Text, TextInput, TouchableOpacity, StyleSheet, Alert  } from 'react-native'
import React, {  useState } from 'react'
import axios from 'axios';


 const API_BASE_URL = 'https://api.dev.returnredirect.com';

const Login = ({navigation}) => {
  




    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
  
  
    const handleLogin = async () => {

      if (!email || !password) {
        Alert.alert('Error', 'Username and password are required');
     return;
      }

      try {
        const response = await axios.post(`${API_BASE_URL}/api/1.0/auth/login`, {
          email: email,
           password: password,
         }, {
          headers: {
            'Content-Type': 'application/json',
            'device-id': 'd12121',
            'app-type': 'web'
      //       // You can add other headers if required
         },
      //     // You can add other options such as timeout, etc.
         });
    
      //   // Handle successful response
       console.log('Login successful:', response.data);
        return response.data;
      }  catch (error) {
         // Handle error
       console.error('Login failed:', error);
         if (error.response) {
           console.error('Response data:', error.response.data);
        }
        throw error;
       }


      

    }
   
    
    
   


  return (
    
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
    <TextInput
      style={styles.input}
      value={email}
      onChangeText={setEmail}
      placeholder="Enter your username"
    />

    <TextInput
      style={styles.input}
      value={password}
      onChangeText={setPassword}
      placeholder="Enter your password"
      secureTextEntry={true}
    />

    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>

 <View style={styles.footer}>
      <Text onPress={()=>navigation.navigate("signup")} style={styles.text}>Don't have any account? Sign Up</Text>
   
 </View>

  </View>
);
  };

 
const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  paddingHorizontal: 20,
},
title: {
    fontSize: 24,
    marginBottom: 20,
},
display:{
  fontSize: 24,
    marginBottom: 20,

},

input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  paddingVertical: 8,
  paddingHorizontal: 12,
  marginBottom: 20,
  width: '100%',
},
button: {
  backgroundColor: 'black',
  borderRadius: 5,
  paddingVertical: 12,
  paddingHorizontal: 20,
  width: '100%',
},
buttonText: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
 
},
 footer: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
  export default Login;