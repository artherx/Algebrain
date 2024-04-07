import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ButtSelect=({ containerWidth = 300, containerHeight = 150, containerBorderRadius = 10, primaryColor='red', secodColor = 'transparent', text =""})=> {
  return (
    <View style ={styles.sombra(containerWidth+(containerWidth*.01),containerHeight+(containerHeight*.05),secodColor, containerBorderRadius)}>
        <View style={styles.container(containerWidth, containerHeight, containerBorderRadius, primaryColor,)}>
        <Text>
            {text}
        </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (width, height, borderRadius, primary) => ({
    width: width,
    height: height,
    backgroundColor: primary,
    borderRadius: borderRadius,
    padding: (width*0.05),
    alignItems: 'center',
    justifyContent: 'center',
  }),
  sombra: (width,height,second, borderRadius) => ({
    width: width, // Ancho predeterminado
    height: height,
    backgroundColor: second,
    borderRadius: borderRadius, // Radio predeterminado
  })
});

export default ButtSelect
