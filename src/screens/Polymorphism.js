import React from 'react';
import { View, Text, Button } from 'react-native';

// Komponen "ButtonComponent" dengan polimorfisme
const ButtonComponent = ({ onPress, buttonText }) => {
  return (
    <View>
      <Button title={buttonText} onPress={onPress} />
    </View>
  );
};

// Fungsi polimorfik yang dapat digunakan oleh berbagai komponen
const handleButtonClick = (buttonType) => {
  console.log(`Button of type "${buttonType}" is clicked.`);
  // Lakukan tindakan spesifik berdasarkan tipe tombol
  if (buttonType === 'A') {
    
  }
  switch (buttonType) {
    case 'A':
      // DO FETCH DATA FROM BANK BRANCH
    case 'B':
      // DO FETCH DATA FROM BANK DEFAULT
    case 'C':
      // DO FETCH DATA FROM BANK INTERNATIONAL
      break;
  
    default:
      break;
  }
};

const PolymorphicExample = () => {
  return (
    <View>
      <Text>Polymorphic Example</Text>
      
      {/* Menggunakan ButtonComponent dengan prop berbeda */}
      <ButtonComponent onPress={() => handleButtonClick('A')} buttonText="Button A" />
      <ButtonComponent onPress={() => handleButtonClick('B')} buttonText="Button B" />
      <ButtonComponent onPress={() => handleButtonClick('C')} buttonText="Button C" />
    </View>
  );
};

export default PolymorphicExample;


