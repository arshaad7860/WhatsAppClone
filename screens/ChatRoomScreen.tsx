import React from "react";
import { Text } from "react-native";

import { useRoute } from "@react-navigation/native";

import { View } from "../components/Themed";

const ChatRoomScreen = () => {
  const route = useRoute();

  return <Text>Chat Room</Text>;
};
export default ChatRoomScreen;
