import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Message } from "../../types";
import styles from "./style";
import moment from "moment";
import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

export type InputBoxProps = {
  message: Message;
};

const InputBox = () => {
  const [message, setMessage] = useState("");
  const onMicrophonePress =()=>{
    console.warn("mic pressed")
  }
  const onSendPress =()=>{
    console.warn(`sending: ${message}`)
    //send a message to backend
    setMessage("")
  }
  const onPress =()=>{
    if(!message){
      onMicrophonePress();
    }
    else{
      onSendPress();
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey"></FontAwesome5>
        <TextInput
          placeholder={"Enter a message"}
          multiline
          value={message}
          onChangeText={setMessage}
          style={styles.textInput}
        ></TextInput>

        <Entypo
          Entypo
          style={styles.icons}
          name="attachment"
          size={24}
          color="grey"
        ></Entypo>
        {!message && (
          <Fontisto
            style={styles.icons}
            name="camera"
            size={24}
            color="grey"
          ></Fontisto>
        )}
      </View>

      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons
              name="microphone"
              size={28}
              color="white"
            ></MaterialCommunityIcons>
          ) : (
            <MaterialIcons name="send" size={28} color="white"></MaterialIcons>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default InputBox;
