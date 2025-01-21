import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Proses autentikasi (sederhana)
    if (username === "bimaaidil208@gmail.com" && password === "12345") {
      // Arahkan ke Menu Utama setelah login berhasil
      navigation.replace("MainApp"); // Ganti layar dengan DrawerNavigator
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <View style={styles.container}>
      {/* Menambahkan gambar di atas form */}
      <Image
        source={{ uri: "https://pmb.stmiksznw.ac.id/assets/img/hero-img.png" }} // Ganti dengan URL gambar Anda
        style={styles.logo}
      />
      <Text style={styles.title}>Login</Text>
      
      {/* Form Login */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        {/* Tombol Login */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Tombol Register */}
        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerButtonText}>Belum punya akun? Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#007BFF", // Mengubah warna latar belakang menjadi biru
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff", // Mengubah warna teks judul menjadi putih agar kontras dengan background biru
    marginBottom: 40,
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  loginButton: {
    backgroundColor: "#4CAF50", // Warna hijau untuk tombol login
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
    registerButton: {
      marginTop: 15,
    },
    registerButtonText: {
      color: "#fff", // Warna putih untuk tombol Register
      fontSize: 16,
      fontWeight: "bold",
      textDecorationLine: "underline", // Menambahkan garis bawah untuk tombol register
    },
  });

export default Login;
