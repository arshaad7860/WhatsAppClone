import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import styles from "./style";

const NewMessageButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Contacts");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          name="message-reply-text"
          size={28}
          color="white"
        ></MaterialCommunityIcons>
      </TouchableOpacity>
    </View>
  );
};

export default NewMessageButton;
