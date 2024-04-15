import React from "react";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";
import { router, Stack } from 'expo-router';
import TopBar from "@components/topbar";
import Arimo from "@fonts/predict/Arimo";

export default function Pantalla() {
  const letras=Arimo();
  return (
    <View style={{flex:1}}>
      <TopBar title="Etapa 1:Sistemas de Ecuaciones Lineales (SEL) y Matrices"/>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
        <Text style={{fontFamily:'Arimo-Bold'}}>parte1</Text>
        </View>
        <View>
        <Text style={{fontFamily:'Arimo-Bold'}}>parte2</Text>
        </View>
        <View>
        <Text style={{fontFamily:'Arimo-Bold'}}>parte3</Text>
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
  },
});
