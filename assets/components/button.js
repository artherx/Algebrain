import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Atras from '@img/atras';
import { router } from 'expo-router';

const MyButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={router.back}>
      <View style={styles.container}>
        {/* Utiliza SvgUri para renderizar tu archivo SVG */}
        <Atras width={50} height={50} fill="#fff" />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width:30,
    height: 40,
    padding:5
  },
});
export default MyButton;
