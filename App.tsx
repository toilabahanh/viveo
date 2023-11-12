import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigators from './src/navigation/AppNavigators';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <AppNavigators />
    </SafeAreaProvider>
  );
}

export default App;
