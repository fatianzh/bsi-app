import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const simulateAsyncOperationWithCallback = (callback, error) => {
  setTimeout(() => {
    const success = Math.random() > 0.5; 
    if (success) {
      callback(null, 'Async operation complete', '3213u21y3u21j3i21j3h');
    } else {
      callback('Async operation failed', null, '34i12430923483902');
    }
  }, 2000);
};

const CallbackPromiseExample = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCallbackClick = () => {
    setLoading(true);

    functionCallback = (error, asyncResult, id) => {
        if (error) {
          console.error('Error during async operation:', error);
        } else {
          setResult(asyncResult);
        }
        setLoading(false);
      }
    simulateAsyncOperationWithCallback(functionCallback);
  };

  return (
    <View>
      <Text>Callback Example with Promise</Text>
      <Button
        title="Run Async Operation with Callback"
        onPress={handleCallbackClick}
        disabled={loading}
      />

      {loading && <Text>Loading...</Text>}

      {result && <Text>{result}</Text>}
    </View>
  );
};

export default CallbackPromiseExample;
