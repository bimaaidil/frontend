import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";

const Akun = ({ navigation }) => {
  const [npm, setNpm] = useState("123456789");
  const [nama, setNama] = useState("Nama Mahasiswa");
  const [prodi, setProdi] = useState("Teknik Informatika");
  const [fakultas, setFakultas] = useState("Fakultas Teknik");
  const [email, setEmail] = useState(`${npm}@kampus.ac.id`);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    setIsEditing(false);
    Alert.alert("Informasi Disimpan", "Data berhasil diperbarui.");
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Anda telah logout.");
    // Gunakan navigation.replace untuk langsung mengganti layar dengan Login
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Mahasiswa</Text>
      <View style={styles.profileCard}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>NPM:</Text>
          {isEditing ? (
            <TextInput style={styles.input} value={npm} onChangeText={setNpm} />
          ) : (
            <Text style={styles.value}>{npm}</Text>
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Nama Lengkap:</Text>
          {isEditing ? (
            <TextInput style={styles.input} value={nama} onChangeText={setNama} />
          ) : (
            <Text style={styles.value}>{nama}</Text>
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Program Studi:</Text>
          {isEditing ? (
            <TextInput style={styles.input} value={prodi} onChangeText={setProdi} />
          ) : (
            <Text style={styles.value}>{prodi}</Text>
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Fakultas:</Text>
          {isEditing ? (
            <TextInput style={styles.input} value={fakultas} onChangeText={setFakultas} />
          ) : (
            <Text style={styles.value}>{fakultas}</Text>
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email Kampus:</Text>
          {isEditing ? (
            <TextInput style={styles.input} value={email} onChangeText={setEmail} />
          ) : (
            <Text style={styles.value}>{email}</Text>
          )}
        </View>
      </View>

      {!isEditing && (
        <TouchableOpacity style={[styles.button, styles.buttonEdit]} onPress={handleEdit}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      )}
      {isEditing && (
        <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleSave}>
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={[styles.button, styles.buttonLogout]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#007BFF" },
  title: { fontSize: 28, fontWeight: "bold", color: "#fff", marginBottom: 20, textAlign: "center" },
  profileCard: { backgroundColor: "#fff", padding: 20, borderRadius: 10 },
  infoContainer: { marginBottom: 15 },
  label: { fontSize: 16, fontWeight: "bold" },
  value: { fontSize: 16, backgroundColor: "#F9F9F9", padding: 10 },
  input: { borderWidth: 1, padding: 10 },
  button: { padding: 12, borderRadius: 8, alignItems: "center" },
  buttonEdit: { backgroundColor: "#4CAF50" },
  buttonSave: { backgroundColor: "#28a745" },
  buttonLogout: { backgroundColor: "#8B4513" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});

export default Akun;
