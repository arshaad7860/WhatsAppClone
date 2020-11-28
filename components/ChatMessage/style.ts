import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    borderRadius: 5,
    padding: 10,
  },
  name: {
    fontWeight: "bold",
    color: Colors.light.tint,
    marginBottom: 3,
  },
  message: {},
  time: {
    alignSelf: "flex-end",
    color: "gray",
    fontSize: 10,
  },
});

export default styles;
