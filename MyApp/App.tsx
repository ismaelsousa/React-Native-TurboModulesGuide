/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {useState} from 'react';
import {SafeAreaView, StatusBar, Text, Button} from 'react-native';

import RTNCalculator from 'rtn-calculator/js/NativeCalculator';

const App = () => {
  const [result, setResult] = useState<number | null>(null);
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Text style={{marginLeft: 20, marginTop: 20}}>3+7={result ?? '??'}</Text>
      <Button
        title="Compute"
        onPress={() => {
          const value = RTNCalculator?.add(3, 7);
          if (value) {
            setResult(value);
          }
        }}
      />
    </SafeAreaView>
  );
};

export default App;
