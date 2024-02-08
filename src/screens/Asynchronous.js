// AsynchronousComponent.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const AsynchronousScreen = () => {
  const handleAsyncClick = () => {
    console.log('1. Start asynchronous operation');

    // Operasi asynchronous (contoh: setTimeout)
    setTimeout(() => {
      console.log('3. Asynchronous operation complete');
    }, 2000);

    console.log('2. Continue synchronous operation');
  };

  return (
    <View>
      <Text>Asynchronous Component</Text>
      <Button title="Run Asynchronous Operation" onPress={handleAsyncClick} />
      <Text>result will show on console</Text>
    </View>
  );
};

export default AsynchronousScreen;


