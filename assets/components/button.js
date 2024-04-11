import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Atras from '@img/atras';

const MyButton = ({width=50,height=50}) => {
  return (
      <View style={styles.container}>
        {/* Utiliza SvgUri para renderizar tu archivo SVG */}
        <Atras width={width} height={height} fill="#fff" />
      </View>
  );
};
const styles = StyleSheet.create({
  container: (width, height,)=>({
    width:30,
    height: 40,
    padding:5
  }),
});
export default MyButton;
