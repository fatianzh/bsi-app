// components/DetailsScreen.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const TestScreen = ({route}) => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen {route?.params?.id}</Text>
      <Button
        title="Go to Test"
        onPress={() => {
          try {
            navigation.navigate('One')
          } catch (error) {
            console.log(error)
          }
        }}
      />
    </View>
  );
};

export default TestScreen;