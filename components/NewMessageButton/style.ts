import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
      backgroundColor:Colors.light.tint,
    flexDirection: "row",
    borderRadius:50,
    width:50,
    height:50,
    padding:10,
    justifyContent:"center",
    alignItems: "center",
    position:"absolute",
    bottom:10,
    right:20,
  },
  
});

export default styles;
