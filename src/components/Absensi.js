import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Button } from "react-native";

const Absensi = () => {
  const [data, setData] = useState([
    { id: "1", nama: "AGUNG DERMAWAN", status: "Hadir" },
    { id: "2", nama: "Aldi Kuncruk", status: "Hadir" },
    { id: "3", nama: "Arif Rahman", status: "Hadir" },
    { id: "4", nama: "Bima Aidil", status: "Hadir" },
    { id: "5", nama: "Dea Hertiani", status: "Hadir" },
    { id: "6", nama: "Fahira Adisty", status: "Hadir" },
    { id: "7", nama: "Hykal Wahyuddin", status: "Hadir" },
    { id: "8", nama: "Julian Olga", status: "Hadir" },
    { id: "9", nama: "JENI AGRYROSA", status: "Hadir" },
    { id: "10", nama: "Maulana Rizky", status: "Hadir" },
    { id: "11", nama: "Muthia Sayyidah Syifa", status: "Hadir" },
    { id: "12", nama: "Muhammad Haiqal Rahman", status: "Hadir" },
    { id: "13", nama: "Muhammad Haqqi Syahputra", status: "Hadir" },
    { id: "14", nama: "Nadia Khalisah Khansa", status: "Hadir" },
    { id: "15", nama: "Nadia Fadila", status: "Hadir" },
    { id: "16", nama: "Nanda Rezky", status: "Hadir" },
    { id: "17", nama: "Putri Sundari", status: "Hadir" },
    { id: "18", nama: "Pandu Sarma", status: "Hadir" },
    { id: "19", nama: "R Cintra Dwinanda Putri", status: "Hadir" },
    { id: "20", nama: "Rifky Rahmel Ho", status: "Hadir" },
    { id: "21", nama: "S Ibnu Romadhon", status: "Hadir" },
    { id: "22", nama: "Zacky Alvianza 04", status: "Hadir" },
    { id: "23", nama: "Zacky Argya Tarigan", status: "Hadir" },
    { id: "24", nama: "Zikra Al Hady", status: "Hadir" },
    { id: "25", nama: "Wagi Artono", status: "Hadir" },
    { id: "26", nama: "Danang Setyo", status: "Hadir" },
    { id: "27", nama: "Rifky Rahmel Ho", status: "Hadir" },
    { id: "28", nama: "Nadia Khalisah Khansa", status: "Hadir" },
    { id: "29", nama: "Namira Syalwa Alifa", status: "Hadir" },
  ]);

  const [newNama, setNewNama] = useState("");

  const changeStatus = (id, newStatus) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setData(updatedData);
  };

  const addStudent = () => {
    if (newNama.trim() === "") {
      alert("Nama mahasiswa tidak boleh kosong!");
      return;
    }
    const newStudent = {
      id: (data.length + 1).toString(),
      nama: newNama,
      status: "Hadir",
    };
    setData((prevData) => {
      const updatedData = [...prevData, newStudent];
      updatedData.sort((a, b) => a.nama.localeCompare(b.nama));
      return updatedData;
    });
    setNewNama(""); // Reset input field
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Absensi Praktikum</Text>

      {/* Form untuk menambahkan mahasiswa baru */}
      <View style={styles.addStudentContainer}>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Nama Mahasiswa"
          value={newNama}
          onChangeText={setNewNama}
        />
        <Button title="Tambah Mahasiswa" onPress={addStudent} color="#28a745" />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>Nama: {item.nama}</Text>
            <Text style={styles.statusText}>Status: {item.status}</Text>
            <View style={styles.buttonContainer}>
              {["Hadir", "Izin", "Alpha", "Sakit"].map((status) => (
                <TouchableOpacity
                  key={status}
                  style={[
                    styles.button,
                    item.status === status && styles.selectedButton,
                  ]}
                  onPress={() => changeStatus(item.id, status)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      item.status === status && styles.selectedButtonText,
                    ]}
                  >
                    {status}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
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
    backgroundColor: "#007BFF", // Latar belakang biru
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff", // Warna teks putih untuk judul
  },
  addStudentContainer: {
    marginBottom: 20,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
  statusText: {
    fontSize: 16,
    marginTop: 10,
    color: "#555",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    backgroundColor: "brown", // Warna solid biru untuk tombol
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  selectedButton: {
    backgroundColor: "#4CAF50", // Tombol hijau saat dipilih
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  selectedButtonText: {
    color: "#fff",
  },
});

export default Absensi;
