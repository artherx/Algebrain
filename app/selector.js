import React from "react";
import ButtSelect from "@components/buttSelt";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { router } from 'expo-router';
import Arimo from "@fonts/predict/Arimo";


export default function Select() {
  
  const letras=Arimo();
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>router.navigate('/')}>
        <ButtSelect 
            containerWidth={300} containerHeight={150} containerBorderRadius={10} 
            primaryColor="#FBAAAA" secodColor="#AA5B5B"
            text={"Etapa 1:Sistemas de Ecuaciones Lineales (SEL) y Matrices"}
            fontFamily="Arimo-Bold"
            fontSize={24}
            textAlign="center"
        />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
