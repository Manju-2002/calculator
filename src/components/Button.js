import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ label, onPress, isEqual }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isEqual && styles.equalButton]}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  equalButton: {
    backgroundColor: '#4CAF50',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Button;
