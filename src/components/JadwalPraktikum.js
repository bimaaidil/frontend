import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const JadwalPraktikum = () => {
  const jadwal = [
    { id: "1", mataKuliah: "P.Dasar Pemrograman Mobile", waktu: "09:00 - 10:40", lab: "Mobile Lab" },
    { id: "2", mataKuliah: "P.Keamanan Komputer Jaringan", waktu: "10:45 - 12:25", lab: "Network Lab" },
    { id: "3", mataKuliah: "P.Pengenalan Kecerdasan Buatan", waktu: "14:45 - 16:25", lab: "Lab C" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jadwal Praktikum</Text>
      <FlatList
        data={jadwal}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.mataKuliah}>{item.mataKuliah}</Text>
            <Text style={styles.waktu}>{item.waktu}</Text>
            <Text style={styles.lab}>{item.lab}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#007BFF", // Warna latar belakang terang dan lembut
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333", // Warna teks judul yang lebih gelap
  },
  item: {
    backgroundColor: "#ffffff", // Latar belakang putih untuk item jadwal
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd", // Warna border yang lembut
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Bayangan untuk efek kedalaman
  },
  mataKuliah: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007BFF", // Warna biru untuk mata kuliah (mirip tombol)
  },
  waktu: {
    fontSize: 16,
    color: "#7f8c8d", // Warna abu-abu untuk waktu
    marginTop: 5,
  },
  lab: {
    fontSize: 16,
    color: "#4CAF50", // Warna hijau untuk lab
    marginTop: 5,
  },
});

export default JadwalPraktikum;
