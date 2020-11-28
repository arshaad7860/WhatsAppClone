import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;

  const navigation = useNavigation();

  const user = chatRoom.users[1];

  const onClick = () => {
    navigation.navigate("ChatRoom", { id: chatRoom.id, 
      name: user.name });
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
            style={styles.lastMessage}
            numberOfLines={1}
            ellipsizeMode={"tail"}
          >
            {chatRoom.lastMessage.content}
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.time}>
            {moment(chatRoom.lastMessage.createdAt).format("YYYY/MM/DD")}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
