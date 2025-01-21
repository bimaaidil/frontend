import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CRUD = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Utama</Text>
      <Text style={styles.text}>Halaman untuk fitur CRUD (Create, Read, Update, Delete).</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#666",
  },
});

export default CRUD;
