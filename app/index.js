import { StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import { router,  } from 'expo-router';

export default function App() {
  return (
        <TouchableOpacity onPress={()=>router.navigate('/selector')} style={styles.boton}>
          <Text>Oprimir para continuar</Text>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "100%",
    color:'#fff',
    backgroundColor: "#F5F5DC",
  },
});
