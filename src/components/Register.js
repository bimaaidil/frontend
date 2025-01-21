import React from "react";
import { View, Text, TextInput, TouchableOpacity, Text as RNText, StyleSheet } from "react-native";

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />

      {/* Tombol Register */}
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate("Login")}>
        <RNText style={styles.registerButtonText}>Register</RNText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#007BFF",  // Menambahkan warna latar belakang biru
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",  // Menambahkan warna putih untuk teks judul
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#fff",  // Memberikan warna latar belakang putih pada input
  },
  registerButton: {
    backgroundColor: "#28a745", // Menambahkan warna hijau untuk tombol Register
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center", 
    marginTop: 20,
  },
  registerButtonText: {
    color: "#fff", // Warna teks putih pada tombol
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Register;
