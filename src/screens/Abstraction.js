import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import useCounter from '../hooks/useCounter';

const CounterComponent = () => {
  const counter = useCounter(0);

  return (
    <View>
      <Text>Count: {counter.count}</Text>
      <Button title="Increment" onPress={counter.increment} />
      <Button title="Decrement" onPress={counter.decrement} />
    </View>);
};

export default CounterComponent;


