import { StyleSheet, View } from "react-native";
import React from "react";
import VideoCard from "./VideoCard";

export default function App() {
  const video = React.useRef(null);

  return (
    <View style={styles.container}>
      <VideoCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    flex: 1,
    alignSelf: "stretch",
  },
  buttons: {
    margin: 16,
  },
});
