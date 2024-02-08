import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

class CounterLogic {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  getCount() {
    return this.count;
  }
}

const FunctionalComponentWithOOP = () => {
  const [counterLogic] = useState(new CounterLogic());

  const handleIncrement = () => {
    counterLogic.increment();
    forceUpdate();
  };

  const handleDecrement = () => {
    counterLogic.decrement();
    forceUpdate();
  };

  const forceUpdate = () => {
    setForceUpdate((prev) => !prev);
  };

  const [, setForceUpdate] = useState(false);

  return (
    <View>
      <Text>Count: {counterLogic.getCount()}</Text>
      <Button title="Increment" onPress={handleIncrement} />
      <Button title="Decrement" onPress={handleDecrement} />
    </View>
  );
};

export default FunctionalComponentWithOOP;


