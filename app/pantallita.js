import TopBar from "@components/topbar";
import { View, StyleSheet, Text } from "react-native";

export default function pantalla() {
    return (
        <View style={styles.container}>
            <TopBar/>
            <Text>dasd</Text>
            asd
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:"center",
      justifyContent: 'space-between',
    },
  });