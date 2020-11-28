import * as React from "react";
import { FlatList, StyleSheet } from "react-native";

import { View } from "../components/Themed";
import users from "../data/Users";
import ContactListItem from "../components/ContactListItem";

export default function Contacts() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={users}
        renderItem={({ item }) => (
          <ContactListItem user={item}></ContactListItem>
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
