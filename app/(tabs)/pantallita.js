import React from "react";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";
import { router, Stack } from 'expo-router';
import TopBar from "@components/topbar";
import Arimo from "@fonts/predict/Arimo";
import ButtSelect from "@components/buttSelt";

export default function Pantalla() {
  const letras=Arimo();
  return (
    <View style={{flex:1}}>
      <TopBar title="Etapa 1:Sistemas de Ecuaciones Lineales (SEL) y Matrices"/>
      <ScrollView contentContainerStyle={styles.container}>
        <View style = {styles.espacio}>
        <ButtSelect 
            containerWidth={100} containerHeight={100} containerBorderRadius={1000} 
            primaryColor="#A2D9FF" secodColor="#57758A"
            text={"1"}
            fontFamily="Arimo-Bold"
            fontSize={24}
            textAlign="center"
        />
        </View>
        <View style = {styles.espacio}>
        <ButtSelect 
            containerWidth={100} containerHeight={100} containerBorderRadius={1000} 
            primaryColor="#A2D9FF" secodColor="#57758A"
            text={"2"}
            fontFamily="Arimo-Bold"
            fontSize={24}
            textAlign="center"
        />
        </View>
        <View style = {styles.espacio}>
        <ButtSelect 
            containerWidth={100} containerHeight={100} containerBorderRadius={1000} 
            primaryColor="#A2D9FF" secodColor="#57758A"
            text={"3"}
            fontFamily="Arimo-Bold"
            fontSize={24}
            textAlign="center"
        />
        </View>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFDD0",
  },
  espacio:{
    marginBottom:"10px",
  }
});
