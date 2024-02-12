import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";

export default function BankScreen({ name, balance, navigation }) {
  name = "fat's";
  balance = 0;
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View>
          <Text style={{ fontSize: 16 }}>Hi {name}, this is your balance:</Text>
          <Text style={{ justifyContent: "absolute",fontSize: 30, fontWeight: "lighter" }}>Rp. {balance}</Text>
          <Text style = {balance === 0 ? {display: "flex", color:"#E53D30"} : {display: "none"}}>Immediately top up your balance</Text>
          <TouchableOpacity style={{ 
            backgroundColor: "indianred", 
            position: "absolute", 
            right:5, 
            bottom: 10,
            borderRadius:5, 
            padding:10}} 
            onPress={() => {try {
              navigation.navigate("TopUp")
            } catch (error) {
              console.log(error)
          }}}>
            <Text style={{ textAlign: "center", color: "white" }}>
              Top Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.textAlign}>
        Transaction
      </Text>
        <ScrollView style={styles.Transaction}>
          <View style={{ marginBottom: 5 }}>
            <Text style={{fontWeight: "bold"}}>{"Top Up"}</Text>
            <Text>{"Top Up via Gopay"}</Text>
            <Text style={{ marginTop: 5, backgroundColor: "skyblue", justifyContent: "absolute", textAlign: "right", color: "black", fontSize: 16 }}>Rp 200.000</Text>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{fontWeight: "bold"}}>{"Biaya Admin"}</Text>
            <Text>{"Top Up via Gopay"}</Text>
            <Text style={{ marginTop: 5, backgroundColor: "skyblue", justifyContent: "absolute", textAlign: "right", color: "black", fontSize: 16 }}>Rp 1.000</Text>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{fontWeight: "bold"}}>{"Transfer antar Bank"}</Text>
            <Text>{"Transfer ke Bank XYZ"}</Text>
            <Text style={{ marginTop: 5, backgroundColor: "skyblue", justifyContent: "absolute", textAlign: "right", color: "black", fontSize: 16 }}>Rp 150.000</Text>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{fontWeight: "bold"}}>{"Biaya Admin"}</Text>
            <Text>{"Transfer BI-Fast"}</Text>
            <Text style={{ marginTop: 5, backgroundColor: "skyblue", justifyContent: "absolute", textAlign: "right", color: "black", fontSize: 16 }}>Rp 2.500</Text>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{fontWeight: "bold"}}>{"QRIS Payment"}</Text>
            <Text>{"Roti 'A XY Junction"}</Text>
            <Text style={{ marginTop: 5, backgroundColor: "skyblue", justifyContent: "absolute", textAlign: "right", color: "black", fontSize: 16 }}>Rp 75.000</Text>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{fontWeight: "bold"}}>{"Top Up"}</Text>
            <Text>{"Top Up E-Money"}</Text>
            <Text style={{ marginTop: 5, backgroundColor: "skyblue", justifyContent: "absolute", textAlign: "right", color: "black", fontSize: 16 }}>Rp 350.000</Text>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{fontWeight: "bold"}}>{"Pembayaran/Pembelian"}</Text>
            <Text>{"Shopee"}</Text>
            <Text style={{ marginTop: 5, backgroundColor: "skyblue", justifyContent: "absolute", textAlign: "right", color: "black", fontSize: 16 }}>Rp 36.000</Text>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{fontWeight: "bold"}}>{"Pembayaran/Pembelian"}</Text>
            <Text>{"Shopee"}</Text>
            <Text style={{ marginTop: 5, backgroundColor: "skyblue", justifyContent: "absolute", textAlign: "right", color: "black", fontSize: 16 }}>Rp 64.000</Text>
          </View>
        </ScrollView>
      </View>
)};

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#F0E68C',
    rowGap: 10,
    flex: 1,
  },
  cardContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius:10, 
  },
  Transaction: {
    backgroundColor: 'white',
    height: 320,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom:20,
    borderRadius:10, 
  },
  textAlign: {
    textAlign: "left", 
    color: "black", 
    fontSize: 18, 
    fontWeight: "800",
    marginTop: 10, 
    marginBottom: 3, 
    marginHorizontal: 20, 
  },
});