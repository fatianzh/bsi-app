import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function Card({ title, description, image }) {
  const [hide, setHide] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // IF ELSE => 
  // IF (condition){
  //    return(jsx)
  // }
  // return (jsx)
  //
  // TERNARY ? :
  // TERNARY &&

  if (hide) {
    return (
      <TouchableOpacity onPress={() => setHide(!hide)}>
        <View style={{ backgroundColor: "blue" }}>
          <Text style={{ textAlign: "center", color: "white" }}>
            Sembunyikan Card
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.cardImage}
      />
      <View style={{ marginBottom: 10 }}>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
      <TouchableOpacity onPress={() => setHide(!hide)}>
        <View style={{ backgroundColor: "blue" }}>
          <Text style={{ textAlign: "center", color: "white" }}>
            Munculin Card
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIsLoggedIn(!isLoggedIn)}
      >
        <View style={{ backgroundColor: isLoggedIn ? "green" : "red" }}>
          <Text style={{ textAlign: "center", color: "white" }}>
            {isLoggedIn ? "Sudah Login" : "Belum Login"}
          </Text>
        </View>
      </TouchableOpacity>
      {isLoggedIn && <Text>Sudah masuk</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7D7D7",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: { backgroundColor: "white", borderRadius: 10, padding: 10 },
  cardImage: { width: 200, height: 200, borderRadius: 10 },
});