import MyButton from '@components/button';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const TopBar = ({ title="nombre", onPress=router.back  }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <MyButton />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text> {/* Cambiado el texto para que muestre el título */}
      <View style={{ width: 50 }} /> {/* Espacio adicional, puedes ajustar el ancho según sea necesario */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#3498db',
  },
  title: {
    flex: 1,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TopBar;
