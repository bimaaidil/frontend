import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Silakan masuk untuk melanjutkan.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace("Akun")} // Arahkan ke layar Akun setelah login
      >
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007BFF",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
  },
  button: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#4CAF50",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Login;
