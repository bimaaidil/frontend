import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PengaturanAkun = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan Akun</Text>
      <Text>Fitur untuk mengatur akun pengguna akan tersedia di sini.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default PengaturanAkun;
