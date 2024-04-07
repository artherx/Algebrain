import { StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import { useRouteInfo } from 'expo-router/build/hooks';
import { router } from 'expo-router';
import Icon from '@img/boton';
import Prueba from '@img/prueba';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View>
        <TouchableOpacity onPress={()=>router.navigate('/selector')} style={styles.boton}>
          <Text>hola</Text>  
        </TouchableOpacity>
      </View>
      <Prueba/>
      <Icon width={200} height={100} primaryColor="#AA5B5B" secondaryColor="#FBAAAA"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton:{
    backgroundColor:'red',
    color:'#fff',
    padding: 10,
    borderRadius: 8
  }
});
