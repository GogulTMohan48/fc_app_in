import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, {useState} from 'react'
import axios from 'axios';



const API_BASE_URL = 'https://api.dev.returnredirect.com';



const Signup = ({navigation})=> {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
   }

   try {
    const response = await axios.post(`${API_BASE_URL}/api/1.0/auth/signup`, {

      headers: {
        'Content-Type': 'application/json',
        'device-id': 'd12121',
        'app-type': 'web'
     },  body:JSON.stringify({
      name: name,
      email: email,
       password: password,
       confirmPassword:confirmPassword
     })
     
     });

     const data = await response.json()
         if(response){
          navigation.navigate("login")
          console.log("signup succesful");
  } else {
    console.log("signup faild");
  } }catch(err){
        console.log(err);
    }

  };


  return (
    <View style={styles.container}>
              <Text style={styles.title}>SignUp</Text>

    <TextInput
      style={styles.input}
      value={name}
      onChangeText={setName}
      placeholder="Enter your name"
    />

    <TextInput
      style={styles.input}
      value={email}
      onChangeText={setEmail}
      placeholder="Enter your email"
    />

    <TextInput
      style={styles.input}
      value={password}
      onChangeText={setPassword}
      placeholder="Enter your password"
      secureTextEntry
    />

    <TextInput
      style={styles.input}
      value={confirmPassword}
      onChangeText={setConfirmPassword}
      placeholder="Confirm your password"
      secureTextEntry
    />

    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
      <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
    <View style={styles.footer}>
      <Text onPress={()=>navigation.navigate("login")} style={styles.text}>Don't have a account? Login</Text>
   
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
  color: '#ffffff',
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
export default Signup;