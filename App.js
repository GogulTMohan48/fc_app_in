import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Start from './screens/Start';


const Stack = createNativeStackNavigator ()


export default function App() {
  return (
    <NavigationContainer NavigationContainer>
    <Stack.Navigator initialRouteName='start'
    
    
    >
     <Stack.Screen  name='start' component={Start}></Stack.Screen>
 
<Stack.Screen  name='login' component={Login}></Stack.Screen>
<Stack.Screen name='signup' component={Signup}></Stack.Screen>


    </Stack.Navigator>
    </NavigationContainer>

  );
}


