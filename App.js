import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Start from './screens/Start';
import Landing from './screens/Landing';


const Stack = createNativeStackNavigator ()


export default function App() {
  return (
    <NavigationContainer NavigationContainer>
    <Stack.Navigator initialRouteName='start'
      screenOptions={{
        headerShown: false
      }}
    
    >
     <Stack.Screen  name='start' component={Start}></Stack.Screen>
 
<Stack.Screen  name='login' component={Login}></Stack.Screen>
<Stack.Screen name='signup' component={Signup}></Stack.Screen>
<Stack.Screen name='landing' component={Landing}></Stack.Screen>



    </Stack.Navigator>
    </NavigationContainer>

  );
}


