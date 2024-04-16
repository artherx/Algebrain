import React from "react";
import ButtSelect from "@components/buttSelt";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { router, Stack } from 'expo-router';
import Arimo from "@fonts/predict/Arimo";


export default function Select() {
  const letras=Arimo();
  return (
    <View style={styles.container}>
      
    <Stack.Screen options={{ header: () => null }} />
        <TouchableOpacity onPress={()=>router.navigate('/pantallita')}>
        <ButtSelect 
            containerWidth={300} containerHeight={150} containerBorderRadius={10} 
            primaryColor="#A2D9FF" secodColor="#57758A"
            text={"Etapa 1:Sistemas de Ecuaciones Lineales (SEL) y Matrices"}
            fontFamily="Arimo-Bold"
            fontSize={24}
            textAlign="center"
        />
        </TouchableOpacity>
        <ButtSelect 
            containerWidth={300} containerHeight={150} containerBorderRadius={10} 
            primaryColor="#C5FFB0" secodColor="#61974E"
            text={"Etapa 2: Proximamente"}
            fontFamily="Arimo-Bold"
            fontSize={24}
            textAlign="center"
        />
        <ButtSelect 
            containerWidth={300} containerHeight={150} containerBorderRadius={10} 
            primaryColor="#FBAAAA" secodColor="#AA5B5B"
            text={"Etapa 3: Proximamente"}
            fontFamily="Arimo-Bold"
            fontSize={24}
            textAlign="center"
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: "#F5F5DC",
    },
  });
