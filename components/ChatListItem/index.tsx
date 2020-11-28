
import React from "react";
import { View, Text, Image } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";
import moment from 'moment';
moment().format();

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;

  const user = chatRoom.users[1];
  return (
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
         {chatRoom.lastMessage.createdAt}
          </Text>
      </View>
    </View>
  );
};

export default ChatListItem;
