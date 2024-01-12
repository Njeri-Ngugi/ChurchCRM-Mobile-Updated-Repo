import * as React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },
  TextStyle: {

    fontSize: 18,
    fontWeight: '700',
  },
  headingText: {
    fontSize: 18,
    fontWeight: '900',
    marginTop: 30,
    color: '#0A7E8B',
    marginBottom: 10,
  },
  sermonOpacity: {
    position: "relative",
  },
  sermonTopic: {
    color: '#363636',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sermonImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)'",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: 120,
  },
  loadingText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#087E8B"
  },
  sermonDateText: {
    color: '#b7b7b7',
    fontSize: 12,
    fontWeight: '800',
  },

});
export { styles };
