import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";

const Akun = ({ navigation }) => {
  // Data mahasiswa sebagai state
  const [npm, setNpm] = useState("123456789");
  const [nama, setNama] = useState("Nama Mahasiswa");
  const [prodi, setProdi] = useState("Teknik Informatika");
  const [fakultas, setFakultas] = useState("Fakultas Teknik");
  const [email, setEmail] = useState(`${npm}@kampus.ac.id`);
  
  // State untuk kontrol mode Edit
  const [isEditing, setIsEditing] = useState(false);

  // Fungsi untuk menangani tombol Edit
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Fungsi untuk menyimpan data
  const handleSave = () => {
    setIsEditing(false);
    Alert.alert("Informasi Disimpan", "Data berhasil diperbarui.");
  };

  // Fungsi untuk logout
  const handleLogout = () => {
    Alert.alert("Logout", "Anda telah logout.");
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Mahasiswa</Text>
      <View style={styles.profileCard}>
        {/* Menampilkan data NPM */}
        <View style={styles.infoContainer}>
          <Text style={styles.label}>NPM:</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={npm}
              onChangeText={(text) => setNpm(text)}
            />
          ) : (
            <Text style={styles.value}>{npm}</Text>
          )}
        </View>
        {/* Menampilkan data Nama Lengkap */}
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Nama Lengkap:</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={nama}
              onChangeText={(text) => setNama(text)}
            />
          ) : (
            <Text style={styles.value}>{nama}</Text>
          )}
        </View>
        {/* Menampilkan data Program Studi */}
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Program Studi:</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={prodi}
              onChangeText={(text) => setProdi(text)}
            />
          ) : (
            <Text style={styles.value}>{prodi}</Text>
          )}
        </View>
        {/* Menampilkan data Fakultas */}
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Fakultas:</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={fakultas}
              onChangeText={(text) => setFakultas(text)}
            />
          ) : (
            <Text style={styles.value}>{fakultas}</Text>
          )}
        </View>
        {/* Menampilkan Email Kampus */}
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email Kampus:</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          ) : (
            <Text style={styles.value}>{email}</Text>
          )}
        </View>
      </View>
      
      {/* Tombol Edit */}
      {!isEditing && (
        <TouchableOpacity style={[styles.button, styles.buttonEdit]} onPress={handleEdit}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      )}

      {/* Tombol Simpan (Hanya terlihat saat mode Edit) */}
      {isEditing && (
        <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleSave}>
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
      )}

      {/* Tombol Logout */}
      <TouchableOpacity style={[styles.button, styles.buttonLogout]} onPress={handleLogout}>
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
    padding: 20,
    backgroundColor: "#007BFF",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  profileCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: "#333",
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#4CAF50", // Warna hijau pada border, mirip dengan warna tombol login
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#F9F9F9",
  },
  button: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: "center",
    marginBottom: 10,
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
  buttonEdit: {
    backgroundColor: "#4CAF50", // Warna hijau untuk tombol Edit
  },
  buttonSave: {
    backgroundColor: "#28a745", // Warna hijau lebih terang untuk tombol Simpan
  },
  buttonLogout: {
    backgroundColor: "#8B4513", // Warna cokelat untuk tombol Logout
  },
});

export default Akun;
