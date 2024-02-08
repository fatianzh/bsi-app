import React from 'react';
import { View, Text, Button } from 'react-native';

const ParentComponent = ({ children, parentText }) => {
  return (
    <View>
      <Text>{parentText}</Text>
      {children}
    </View>
  );
};

const ChildComponent = ({ childText }) => {
  return <Text>{childText}</Text>;
};

const InheritanceExample = () => {
  return (
    <ParentComponent parentText="Parent Text">
      <ChildComponent childText="Child Text" />
      <Button title="Click me" onPress={() => console.log('Button clicked')} />
    </ParentComponent>
  );
};

export default InheritanceExample;


