import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input)); // Avoid eval in production, use a math library like math.js.
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['C', '0', '=', '+'],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result || '0'}</Text>
      <Text style={styles.input}>{input}</Text>
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((item) => (
            <Button
              key={item}
              label={item}
              onPress={() => handlePress(item)}
              isEqual={item === '='}
            />
          ))}
        </View>
      ))}
      <Text style={styles.footer}>Calc by [Your Name]</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  result: {
    fontSize: 40,
    textAlign: 'right',
    marginBottom: 10,
  },
  input: {
    fontSize: 30,
    textAlign: 'right',
    marginBottom: 20,
    color: '#666',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});

export default Calculator;
