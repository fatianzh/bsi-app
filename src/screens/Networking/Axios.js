import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView, Image } from "react-native";

const AxiosScreen = ({ navigation }) => {
  // tipe data
  // string => all characters in keyboard with quote => "" '' `` => contoh : "Saya Budi"
  // number => 1-9 => contoh : 90909
  // boolean => true | false
  // object => kumpulan data yg menjelaskan satu entitas => person : { name:"Budi", gender: "Male" }
  // array => kumpulan data jamak => people : [{ name:"Budi", gender: "Male" }, { name:"Siska", gender: "Female" }]

  const [result, setResult] = useState(null);

  useEffect(() => {
    axios({
      url: "https://reqres.in/api/users?page=2",
      method: "GET",
    })
      .then((response) => setResult(response.data?.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
      {result &&
        result.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 5,
              marginBottom: 10,
            }}
          >
            <Image
              source={{ uri: item.avatar }}
              style={{ height: 50, width: 50, borderRadius: 25 }}
            />
            <View>
              <Text>
                {item.first_name} {item.last_name}
              </Text>
              <Text>{item.email}</Text>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

export default AxiosScreen;