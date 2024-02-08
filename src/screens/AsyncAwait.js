import React, { useState } from "react";
import { View, Text, Button } from "react-native";

// Fungsi yang mengembalikan Promise
const simulateAsyncOperation = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // Menentukan apakah operasi berhasil atau gagal
      if (success) {
        resolve("Async operation complete");
      } else {
        reject("Async operation failed");
      }
    }, 2000);
  });
};

const AsyncAwaitPromiseExample = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAsyncClick = async () => {
    try {
      setLoading(true);

      const asyncResult = await simulateAsyncOperation();
      console.log(asyncResult);
      setResult(asyncResult);
    } catch (error) {
      console.error("Error during async operation:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View>
      <Text>Async/Await with Promise Example</Text>
      <Button
        title="Run Async Operation with Promise"
        onPress={handleAsyncClick}
        disabled={loading}
      />

      {loading && <Text>Loading...</Text>}

      {result && <Text>{result}</Text>}
    </View>
  );
};

export default AsyncAwaitPromiseExample;
