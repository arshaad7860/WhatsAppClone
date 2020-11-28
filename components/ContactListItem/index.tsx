import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { User } from "../../types";
import styles from "./style";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

export type ContactListItemProps = {
  user: User;
};

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;

  const navigation = useNavigation();

  const onClick = () => {
    //navigate to chatroom with this user
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar}></Image>
        </View>
        <View style={styles.midContainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text
            style={styles.status}
            numberOfLines={1}
            ellipsizeMode={"tail"}
          >
            {user.status}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;
