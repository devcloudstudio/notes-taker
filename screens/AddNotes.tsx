import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { IconButton, TextInput, FAB, Text } from "react-native-paper";
import { FadeFromBottomAndroid } from "react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/TransitionPresets";
import Header from "../src/components/Header";

const AddNotes: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [noteTitle, setNoteTitle] = useState<string>("");
  const [noteValue, setNoteValue] = useState<string>("");

  const onSaveNote = () => {
    navigation.state.params.addNote({ noteTitle, noteValue });
    navigation.goBack();
  };

  return (
    <>
      <Header titleText="Add a new note" />
      <IconButton
        icon="close"
        size={25}
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
        color="red"
      />
      <View style={styles.container}>
        <TextInput
          label="Add title here"
          value={noteTitle}
          mode="outlined"
          onChangeText={setNoteTitle}
          style={styles.title}
        />
        <TextInput
          label="Add Note Here"
          value={noteValue}
          onChangeText={setNoteValue}
          mode="flat"
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyType="done"
          blurOnSubmit={true}
        />
        <FAB
          small
          style={styles.fab}
          icon="check"
          disabled={noteTitle == "" ? true : false}
          onPress={() => onSaveNote()}
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
    fontSize: 24,
    marginBottom: 20,
  },
  iconButton: {
    backgroundColor: "rgba(46, 113, 102, 0.8)",
    position: "absolute",
    right: 0,
    top: 20,
    margin: 10,
  },
  text: {
    paddingTop: 10,
    height: 300,
    fontSize: 16,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
});

export default AddNotes;
