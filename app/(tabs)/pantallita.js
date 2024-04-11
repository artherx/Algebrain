import React from "react";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";
import { router, Stack } from 'expo-router';
import TopBar from "@components/topbar";
import Arimo from "@fonts/predict/Arimo";

export default function Pantalla() {
  const letras=Arimo();
  return (
    <View style={{flex:1}}>
      <TopBar/>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={{fontFamily:'Arimo-Bold'}}>Pantalla</Text>
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
