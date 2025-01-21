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
  container: { flex: 1, padding: 20, backgroundColor: "#007BFF" },
  title: { fontSize: 26, color: "#fff", textAlign: "center", marginBottom: 20 },
  item: { backgroundColor: "#fff", padding: 15, borderRadius: 8 },
  mataKuliah: { fontSize: 18, fontWeight: "bold" },
  waktu: { fontSize: 16, color: "#555" },
  lab: { fontSize: 16, color: "#4CAF50" },
});

export default JadwalPraktikum;
