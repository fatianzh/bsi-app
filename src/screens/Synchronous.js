import React from "react";
import { View, Text, Button } from "react-native";

const SynchronousScreen = () => {
  const handleClick = () => {
    console.log("1. Start synchronous operation");

    for (let i = 0; i < 3; i++) {
      console.log(`2. Synchronous operation ${i + 1}`);
    }

    console.log("3. End synchronous operation");
  };

  return (
    <View>
      <Text>Synchronous Component</Text>
      <Button title="Run Synchronous Operation" onPress={handleClick} />
      <Text>result will show on console</Text>
    </View>
  );
};

export default SynchronousScreen;
