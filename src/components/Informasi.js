import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Informasi = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Menampilkan Judul Kontrak Perkuliahan dengan teks putih */}
        <Text style={styles.title}>📘 Kontrak Perkuliahan Praktikum</Text>
        <ScrollView style={styles.scroll}>
          {/* Section: Tujuan Praktikum */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Icon name="check-circle" size={28} color="#ffffff" />
              <Text style={styles.subTitle}>Tujuan Praktikum</Text>
            </View>
            <Text style={styles.text}>
              • Memahami konsep-konsep dasar yang telah diajarkan dalam teori.{"\n"}
              • Mengaplikasikan teori ke dalam praktik nyata.
            </Text>
          </View>
          <View style={styles.divider} />

          {/* Section: Aturan Praktikum */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Icon name="rule" size={28} color="#ffffff" />
              <Text style={styles.subTitle}>Aturan Praktikum</Text>
            </View>
            <Text style={styles.text}>
              • Mahasiswa wajib hadir tepat waktu.{"\n"}
              • Kehadiran minimal 80% untuk dapat mengikuti ujian akhir praktikum.{"\n"}
              • Dilarang menggunakan perangkat elektronik kecuali yang diizinkan oleh asisten praktikum.
            </Text>
          </View>
          <View style={styles.divider} />

          {/* Section: Penilaian */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Icon name="grading" size={28} color="#ffffff" />
              <Text style={styles.subTitle}>Penilaian</Text>
            </View>
            <Text style={styles.text}>
              • Kehadiran: 20%{"\n"}• Laporan Praktikum: 40%{"\n"}• Ujian Praktikum: 40%
            </Text>
          </View>
          <View style={styles.divider} />

          {/* Section: Jadwal Praktikum */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Icon name="calendar-today" size={28} color="#ffffff" />
              <Text style={styles.subTitle}>Jadwal Praktikum</Text>
            </View>
            <Text style={styles.text}>
              • Sesi 1: Pengenalan alat dan bahan (Minggu ke-1){"\n"}
              • Sesi 2: Praktikum 1: [Topik Praktikum]{"\n"}
              • Sesi 3: Praktikum 2: [Topik Praktikum]{"\n"}
              • ... dan seterusnya.
            </Text>
          </View>
          <View style={styles.divider} />

          {/* Section: Tugas Mahasiswa */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Icon name="assignment" size={28} color="#ffffff" />
              <Text style={styles.subTitle}>Tugas Mahasiswa</Text>
            </View>
            <Text style={styles.text}>
              • Membaca modul praktikum sebelum sesi dimulai.{"\n"}
              • Mengumpulkan laporan tepat waktu.{"\n"}
              • Bertanggung jawab atas alat yang digunakan.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007BFF", // Latar belakang biru tetap dipertahankan
    paddingTop: 20,
  },
  card: {
    backgroundColor: "#ffffff", // Ganti latar belakang card menjadi putih
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 10,
    width: "90%", // Lebar lebih ramping untuk tampilan yang lebih elegan
    height: "90%", // Menyediakan ruang lebih untuk konten
  },
  scroll: {
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007BFF", // Judul tetap biru
    textAlign: "center",
    marginBottom: 16,
    fontFamily: "Roboto", // Pilihan font yang lebih modern
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#007BFF", // Subjudul tetap biru
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
    color: "#333", // Teks kontras hitam dengan latar putih untuk kejelasan
    lineHeight: 24,
    textAlign: "justify",
    marginTop: 8,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 15,
  },
});

export default Informasi;
