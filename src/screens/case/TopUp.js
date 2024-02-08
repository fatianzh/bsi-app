import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from "react-native";
import { useState } from "react";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

// export default function TopUpScreen() {
//   const [nominal, setNominal] = useState("0");
//   return (
//     <View style={styles.container}>
//       <TextInput
//         value={nominal}
//         onChangeText={setNominal}
//         style={{
//           height: 40,
//           borderRadius: 4,
//           borderWidth: 1,
//           minWidth: 400,
//           marginBottom: 5,
//         }}
//       />
//       <Button title="Top Up" onPress={() => {console.log(nominal)}} />
//     </View>
//   );
// }

export default function TopUpScreen() {
  return (
    <View>
      <View style={styles.container}>
        <Text>Input nominal</Text>
        <TextInput style={{ fontSize: 20, fontWeight: "bold"}}></TextInput>
      </View>
      <TouchableOpacity style={{ backgroundColor: "#E9967A", justifyContent: "absolute", width: 100, borderRadius: 10, marginTop: 5, left: 150, padding: 10}} onPress={() => navigation.navigate("TopUpScreen")}>
        <Text style={{ textAlign: "center", color: "white"}}>
          Top Up
        </Text>
      </TouchableOpacity>
    </View>
  )
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