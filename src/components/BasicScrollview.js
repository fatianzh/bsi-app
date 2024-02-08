import { ScrollView, Text } from "react-native";

const DATA = [
  "Halo BSI a",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
];

const BasicScrollView = () => {
  const withData = true;

  if (withData) {
    return (
      <ScrollView>
        {DATA.map((item) => (
          <Text>{item}</Text>
        ))}
      </ScrollView>
    );
  }
  return (
    <ScrollView>
      <Text>Halo BSI</Text>
      <Text>Halo BSI</Text>
      <Text>Halo BSI</Text>
    </ScrollView>
  );
};

export default BasicScrollView;
