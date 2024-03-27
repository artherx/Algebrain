import { StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import { useRouteInfo } from 'expo-router/build/hooks';
import { router } from 'expo-router';

export default function App() {
  const tuki = useRouteInfo();
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View>
        <TouchableOpacity onPress={()=>router.navigate('/pantallita')} style={styles.boton}>
          aasd  
        </TouchableOpacity>
      </View>
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
    padding: "2px",
    borderRadius:'5px'
  }
});
