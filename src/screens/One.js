import { StyleSheet, TextInput, View, Button } from "react-native";
import Card from "../components/Card";
import { useState } from "react";

export default function OneScreen() {
  const [titleTemp, setTitleTemp] = useState("Ini judul");
  const [title, setTitle] = useState(titleTemp)
  return (
    <View style={styles.container}>
      <TextInput
        value={titleTemp}
        onChangeText={(text) => setTitleTemp(text)}
        style={{
          height: 40,
          borderRadius: 4,
          borderWidth: 1,
          minWidth: 400,
          marginBottom: 5,
        }}
      />
      <Button title="ganti" onPress={() => setTitle(titleTemp)} />
      <Card title={title} description={"Kucing 1 desc"} image={"https://i.pinimg.com/originals/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7D7D7",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 10,
  },
});
