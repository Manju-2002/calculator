import React from 'react';
import { SafeAreaView } from 'react-native';
import Calculator from './src/components/Calculator';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Calculator />
    </SafeAreaView>
  );
};

export default App;
