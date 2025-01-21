import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Jadwal Praktikum")}
      >
        <Text style={styles.navText}>Jadwal Praktikum</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Absensi")}
      >
        <Text style={styles.navText}>Absensi</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Informasi")}
      >
        <Text style={styles.navText}>Informasi</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Akun")}
      >
        <Text style={styles.navText}>Akun</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#0077b6",
    paddingVertical: 10,
  },
  navItem: {
    padding: 10,
  },
  navText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Navbar;
