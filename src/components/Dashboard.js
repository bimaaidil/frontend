import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Selamat datang di SIMp (Sistem Informasi Masuk Praktikum)
      </Text>

      {/* Tombol Navigasi ke Profil */}
      <TouchableOpacity
        style={[styles.button, styles.buttonProfile]}
        onPress={() => navigation.navigate("Akun")}
      >
        <Text style={styles.buttonText}>Lihat Profil</Text>
      </TouchableOpacity>

      {/* Tombol Navigasi ke Daftar Praktikum */}
      <TouchableOpacity
        style={[styles.button, styles.buttonPraktikum]}
        onPress={() => navigation.navigate("Jadwal Praktikum")}
      >
        <Text style={styles.buttonText}>Jadwal Praktikum</Text>
      </TouchableOpacity>

      {/* Tombol Logout */}
      <TouchableOpacity
        style={[styles.button, styles.buttonLogout]}
        onPress={() => navigation.replace("Login")}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007BFF", // Warna latar belakang biru
    padding: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff", // Warna teks putih agar kontras dengan latar belakang biru
    paddingHorizontal: 20,
    marginBottom: 30, // Memberikan jarak antara teks dan tombol
  },
  button: {
    backgroundColor: "#4CAF50", // Warna hijau untuk tombol
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: "center",
    marginBottom: 15,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonProfile: {
    backgroundColor: "#FF9800", // Warna oranye untuk tombol Profil
  },
  buttonPraktikum: {
    backgroundColor: "#2196F3", // Warna biru untuk tombol Praktikum
  },
  buttonLogout: {
    backgroundColor: "#8B4513", // Warna cokelat untuk tombol Logout
  },
});

export default Dashboard;
