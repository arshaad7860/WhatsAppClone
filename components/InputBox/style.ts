import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    marginRight: 10,
    borderRadius: 50,
    flex:1,
    alignItems:"center",
  },
  textInput:{
    flex:1,
    marginHorizontal:10,
  },
  icons:{
    marginHorizontal:5,
  },
  buttonContainer: {
    backgroundColor: Colors.light.tint,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    
  },
});

export default styles;
