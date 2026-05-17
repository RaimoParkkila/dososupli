import { Stack } from "expo-router";
import { useEffect } from "react";
import { initAppDB } from "../db";

export default function RootLayout() {
 useEffect(() => {
  try {
    initAppDB();
  } catch (e) {
    console.log("DB init failed:", e);
  }
}, []);
  return <Stack />;
}