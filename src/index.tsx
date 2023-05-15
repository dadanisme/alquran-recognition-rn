import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Bismillah Skripsi</Text>
      <StatusBar style="auto" />
    </View>
  );
}
