import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text, FAB, List } from "react-native-paper";
import Header from "../src/components/Header";

const ViewNotes: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [notes, setNotes] = useState<any[]>([]);

  const addNote = (note: any) => {
    note.id = notes.length + 1;
    setNotes([...notes, note]);
  };

  return (
    <>
      <Header titleText="Simple Note Taker" />
      <View style={styles.container}>
        {notes.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You do not have any notes yet</Text>
          </View>
        ) : (
          <FlatList
            data={notes}
            renderItem={({ item }) => (
              <List.Item
                title={item.noteTitle}
                description={item.noteValue}
                descriptionNumberOfLines={1}
                titleStyle={styles.listTitle}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
        <FAB
          style={styles.fab}
          small
          icon="plus"
          label="Add New Note"
          onPress={() =>
            navigation.navigate("AddNotes", {
              addNote,
            })
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 10,
  },
  listTitle: {
    fontSize: 20,
  },
});

export default ViewNotes;
