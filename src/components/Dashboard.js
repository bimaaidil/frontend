import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Selamat datang di SIMp (Sistem Informasi Masuk Praktikum)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007BFF", // Warna latar belakang biru
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff", // Warna teks putih
    paddingHorizontal: 20,
  },
});

export default Dashboard;
