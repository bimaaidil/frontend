import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// Import screens
import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../components/Dashboard";
import MenuUtama from "../components/MenuUtama";
import JadwalPraktikum from "../components/JadwalPraktikum";
import Absensi from "../components/Absensi";
import Informasi from "../components/Informasi";
import Akun from "../components/Akun";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Dashboard">
    <Drawer.Screen name="Dashboard" component={Dashboard} />
    <Drawer.Screen name="Menu Utama" component={MenuUtama} />
    <Drawer.Screen name="Jadwal Praktikum" component={JadwalPraktikum} />
    <Drawer.Screen name="Absensi" component={Absensi} />
    <Drawer.Screen name="Informasi" component={Informasi} />
    <Drawer.Screen name="Akun" component={Akun} />
  </Drawer.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="MainApp" component={DrawerNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
