import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// Import komponen-komponen layar Anda
import Dashboard from "../components/Dashboard";
import Akun from "../components/Akun";
import JadwalPraktikum from "../components/JadwalPraktikum";
import Informasi from "../components/Informasi";
import Absensi from "../components/Absensi";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard">
        {/* Setiap layar harus dibungkus dengan Drawer.Screen */}
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Akun" component={Akun} />
        <Drawer.Screen name="Jadwal Praktikum" component={JadwalPraktikum} />
        <Drawer.Screen name="Informasi" component={Informasi} />
        <Drawer.Screen name="Absensi" component={Absensi} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
