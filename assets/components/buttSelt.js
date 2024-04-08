import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ButtSelect=({ containerWidth = 300, containerHeight = 150, containerBorderRadius = 10, 
  primaryColor='red', secodColor = 'transparent', 
  text ="", fontFamily= 'System font',colorText= '#000000',fontSize= 14, fontWeight= 'normal',fontStyle='normal',
  textDecorationLine='none', textAlign="auto"})=> {
  return (
    <View style ={styles.sombra(containerWidth*1.01,containerHeight*1.05,secodColor, containerBorderRadius)}>
        <View style={styles.container(containerWidth, containerHeight, containerBorderRadius, primaryColor,)}>
        <Text style= {{
          fontFamily:fontFamily,
          color: colorText,
          fontSize: fontSize,
          fontWeight: fontWeight,
          fontStyle:fontStyle,
          textDecorationLine:textDecorationLine,
          textAlign: textAlign,
        }}>
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
