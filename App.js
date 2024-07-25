import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import HomeScreen from './src/screens/HomeScreen';
import KeepScreen from './src/screens/KeepScreen';
import { Provider } from './src/context/BlogContext';

const Stack = createNativeStackNavigator();

//#7d55cc #f79235

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerTitle: " To Do List 📝",
            headerStyle :{backgroundColor :'#7d55cc'},
            headerTintColor : '#fff'}}>
            <Stack.Screen name = 'Home' component = {HomeScreen} options={{headerShown : false}}/>
            <Stack.Screen name='Index' component={IndexScreen}/>
            <Stack.Screen name = 'Create' component = {CreateScreen}/>
            <Stack.Screen
              name = 'Show'
              component = {ShowScreen}
              options={({navigation, route})=>({
                headerRight: () => (
                  <TouchableOpacity onPress={ () => navigation.navigate('Edit',{id: route.params.id})}>
                    <FontAwesome name="pencil-square-o" size={26} color="#fff" />
                  </TouchableOpacity>
                )
              })}
            />
            <Stack.Screen name = 'Edit' component = {EditScreen}/>
            <Stack.Screen name = 'Done' component = {KeepScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}