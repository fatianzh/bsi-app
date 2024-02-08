import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {id: ''})}
      />
      <Button
        title="Go to One"
        onPress={() => navigation.navigate('One')}
      />
      <Button
        title="Go to Sync"
        onPress={() => navigation.navigate('Synchronous')}
      />
      <Button
        title="Go to Async"
        onPress={() => navigation.navigate('Asynchronous')}
      />
      <Text>Promise</Text>
      <Button
        title="Go to AsyncAwait"
        onPress={() => navigation.navigate('AsyncAwait')}
      />
      <Button
        title="Go to Callback"
        onPress={() => navigation.navigate('Callback')}
      />
      <Button
        title="Go to OOP"
        onPress={() => navigation.navigate('OOP')}
      />
      <Text>Networking</Text>
      <Button
        title="Go to Fetch"
        onPress={() => navigation.navigate('Fetch')}
      />
      <Button
        title="Go to Axios"
        onPress={() => navigation.navigate('Axios')}
      />
      <Button
        title="Go to Post"
        onPress={() => navigation.navigate('Post')}
      />
      <Text>Case Study</Text>
      <Button
        title="Go to Mobile Bank"
        onPress={() => navigation.navigate('Bank')}
      />
      <Button
        title="Go to Test"
        onPress={() => navigation.navigate('Test', {id: ''})}
      />
    </View>
  );
};

export default HomeScreen;



