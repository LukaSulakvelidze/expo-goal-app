import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const InputView = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (enteredText) => {
    setInputValue(enteredText);
  };

  const addGoalHandler = () => {
    props.addGoal(inputValue);
    setInputValue("");
  };

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputIndexContainer}>
        <Text>Enter Your Goal Below</Text>
        <Image style={styles.image} source={require("../assets/favicon.png")} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={handleInput}
            autoCorrect={false}
            value={inputValue}
          />
          <Button onPress={addGoalHandler} title="Add Goal" />
        </View>
      </View>
      <View style={styles.cancelButtonContainer}>
        <Button onPress={props.modalStatHandler} title="Cancel" color={"red"} />
      </View>
    </Modal>
  );
};

export default InputView;

const styles = StyleSheet.create({
  inputIndexContainer: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
    paddingBottom: 70,
    borderBottomWidth: 2,
    borderBottomColor: "#cccc",
  },

  image: {
    marginVertical: 20,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },

  input: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 16,
    padding: 8,
    backgroundColor: "#e4d0ff",
    color: "whitesa",
  },

  cancelButtonContainer: {
    flex: 1,
  },
});
