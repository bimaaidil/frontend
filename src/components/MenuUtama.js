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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007BFF", // Warna latar belakang yang lembut
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 32,
  },
  menuContainer: {
    width: "100%", // Menu akan memenuhi lebar layar
  },
  menuItem: {
    backgroundColor: "#28a745", // Mengubah warna latar belakang menjadi hijau
    padding: 16,
    marginVertical: 8, // Jarak vertikal antar tombol
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    // Gantilah shadow* dengan boxShadow
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)", // Efek bayangan menggunakan boxShadow
    elevation: 5, // Untuk memberikan efek bayangan di Android
  },
  menuText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default MenuUtama;
