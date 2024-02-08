import axios from "axios";
import React, { useState } from "react";
import { ActivityIndicator, Button, Text, TextInput, View } from "react-native";

const FetchPostScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorJob, setErrorJob] = useState("");

  const [loadingFetch, setLoadingFetch] = useState("");
  const [resultFetch, setResultFetch] = useState("");

  const submitWithFetch = () => {
    if (!name || !job) {
      if (!name) {
        setErrorName("Name is required");
      }
      if (!job) {
        setErrorJob("Job is required");
      }
      return;
    }
    const payload = {
      name: name,
      job: job,
    };
    setLoadingFetch(true);
    fetch("https://reqres.in/api/users", {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          setLoadingFetch(false);
          setResultFetch("Data Susccessfully created");
          return response;
        }
        throw response;
      })
      .catch((error) => {
        setLoadingFetch(false);
        console.error(error);
      });
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
      {loadingFetch ? (
        <ActivityIndicator />
      ) : (
        <Button title="Submit" onPress={submitWithFetch} />
      )}
      {resultFetch && <Text>{resultFetch}</Text>}
    </View>
  );
};

export default FetchPostScreen;