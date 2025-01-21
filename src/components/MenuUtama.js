import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MenuUtama = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di Menu Utama</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Jadwal Praktikum")}
        >
          <Text style={styles.menuText}>Jadwal Praktikum</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Absensi")}
        >
          <Text style={styles.menuText}>Absensi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Informasi")}
        >
          <Text style={styles.menuText}>Informasi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Pengaturan Akun")}
        >
          <Text style={styles.menuText}>Pengaturan Akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007BFF", // Warna latar belakang biru, sama dengan halaman login
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff", // Teks putih agar kontras dengan latar belakang biru
    marginBottom: 32,
  },
  menuContainer: {
    width: "100%", // Menu akan memenuhi lebar layar
  },
  menuItem: {
    backgroundColor: "#28a745", // Warna hijau untuk tombol
    padding: 16,
    marginVertical: 8, // Jarak vertikal antar tombol
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000", // Efek bayangan untuk iOS
    shadowOffset: { width: 0, height: 2 }, // Posisi bayangan
    shadowOpacity: 0.8, // Opasitas bayangan
    shadowRadius: 2, // Radius bayangan
    elevation: 5, // Untuk memberikan efek bayangan di Android
  },
  menuText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default MenuUtama;
