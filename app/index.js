import { StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import { router,  } from 'expo-router';

export default function App() {
  return (
      <View style={styles.container}>
  
      <Text>Open up App.js to start working on your app!</Text>
      <View>
        <TouchableOpacity onPress={()=>router.navigate('/selector')} style={styles.boton}>
          <Text>hola</Text>  
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton:{
    backgroundColor:'red',
    color:'#fff',
    padding: 10,
    borderRadius: 8
  },
});
