import axios from "axios";
import React, { useState } from "react";
import { ActivityIndicator, TouchableOpacity, Text, TextInput, View } from "react-native";

const TopUpScreen = ({ navigation }) => {
  const [nominal, setNominal] = useState("");
  const [errorNominal, setErrorNominal] = useState("");

  const [loadingAxios, setLoadingAxios] = useState("");
  const [resultAxios, setResultAxios] = useState("");

  const submitWithAxios = () => {
      if (!nominal) {
        setErrorNominal("Nominal is required");
      return;
      }
    const payload = {
      nominal: nominal,
    };
    setLoadingAxios(true);
    axios({
      baseURL: "https://reqres.in",
      url: "/api/users",
      method: "POST",
      data: payload,
    })
      .then((response) => {
        setLoadingAxios(false);
        setResultAxios("Balance Successfully Top Upped");
        return response;
      })
      .catch((error) => {
        setLoadingAxios(false);
        console.error(error);
      });
  };
  return (
    <View style={{ padding: 20, backgroundColor: '#F0E68C', flex: 1 }}>
      <Text style={{ fontWeight: "bold" }}>Top Up Balance</Text>
      <TextInput
        placeholder="Input Nominal"
        placeholderTextColor={"#b8b8b8"}
        value={nominal}
        onChangeText={(text) => {
          setNominal(text);
          setErrorNominal("");
        }}
        style={{
          borderRadius: 4,
          height: 40,
          paddingHorizontal: 10,
          backgroundColor: "white",
          marginTop: 10,
        }}
      />
      {errorNominal && <Text style={{ color: "red" }}>{errorNominal}</Text>}
      <View style={{ height: 20 }} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {loadingAxios ? (
          <ActivityIndicator />
        ) : (
          <TouchableOpacity onPress={submitWithAxios}
          style={{ backgroundColor: "indianred",  
          borderRadius:5, 
          padding:10
          }}>
            <Text style={{textAlign: "center", color: "white"}}>
              Top Up
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {resultAxios && (
          <Text style={{ textAlign: "right", top: 5, fontWeight: "bold" }}>{resultAxios}</Text>
        )}
      </View>
    </View>
  );
};

export default TopUpScreen;