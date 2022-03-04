import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
} from "react-native";
import { GameEngine } from "react-native-game-engine";
import entities from "./entities";
import React, { useEffect, useState } from "react";
import Physics from "./Physics";
import Images from "./Images";
import Constants from "./Constants";

export default function App() {
  const [gameEngine, setGameEngine] = useState(null);
  return (
    <View style={styles.container}>
      <Image
        source={Images.wall}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />

      <GameEngine
        ref={(ref) => {
          setGameEngine(ref);
        }}
        systems={[Physics]}
        entities={entities()}
        style={styles.gameContainer}
      >
        <StatusBar style="auto" hidden={true} />
      </GameEngine>

      <Text style={styles.mrk}>Mr. K Here</Text>
      <Text style={styles.msb}>Ms. B Here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  gameContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: Constants.SCREEN_WIDTH,
    height: Constants.SCREEN_HEIGHT,
  },

  mrk: {
    fontSize: 20,
    left: 30,
    bottom: 25,
    position: "absolute",
    color: "lightgreen",
  },
  msb: {
    fontSize: 20,
    right: 30,
    bottom: 25,
    position: "absolute",
    color: "lightblue",
  },
});
