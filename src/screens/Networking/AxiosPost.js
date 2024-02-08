import axios from "axios";
import React, { useState } from "react";
import { ActivityIndicator, Button, Text, TextInput, View } from "react-native";

const AxiosPostScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorJob, setErrorJob] = useState("");

  const [loadingAxios, setLoadingAxios] = useState("");
  const [resultAxios, setResultAxios] = useState("");

  const submitWithAxios = async () => {
    if (!name || !job) {
      if (!name) {
        setErrorName("Name is required");
      }
      if (!job) {
        setErrorJob("Job is required");
      }
      return;
    }
    try {
      const payload = {
        name: name,
        job: job,
      };
      setLoadingAxios(true);
      const response = await axios({
        baseURL: "https://reqres.in",
        url: "/api/users",
        method: "POST",
        data: payload,
      });
      setLoadingAxios(false);
      setResultAxios("Data Susccessfully created");
      return response;
    } catch (error) {
      setLoadingAxios(false);
      console.error(error);
    }
  };
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
      <Text>Name</Text>
      <TextInput
        placeholder="Input Name"
        placeholderTextColor={"#b8b8b8"}
        value={name}
        onChangeText={(text) => {
          setName(text);
          setErrorName("");
        }}
        style={{
          borderWidth: 1,
          borderRadius: 4,
          height: 40,
          paddingHorizontal: 10,
        }}
      />
      {errorName && <Text style={{ color: "red" }}>{errorName}</Text>}
      <View style={{ height: 20 }} />
      <Text>Job</Text>
      <TextInput
        placeholder="Input Job"
        placeholderTextColor={"#b8b8b8"}
        value={job}
        onChangeText={(text) => {
          setJob(text);
          setErrorJob("");
        }}
        style={{
          borderWidth: 1,
          borderRadius: 4,
          height: 40,
          paddingHorizontal: 10,
        }}
      />
      {errorJob && <Text style={{ color: "red" }}>{errorJob}</Text>}
      <View style={{ height: 20 }} />
      {loadingAxios ? (
        <ActivityIndicator />
      ) : (
        <Button title="Submit With Axios" onPress={submitWithAxios} />
      )}
      {resultAxios && <Text style={{ textAlign: "right" }}>{resultAxios}</Text>}
    </View>
  );
};

export default AxiosPostScreen;