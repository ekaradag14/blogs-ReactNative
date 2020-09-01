import React, { useContext } from "react";
import { Context } from "../context/BlogContext";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Form,
  Linking, // para pasar informacion con navigacion
} from "react-native";

const EditScreen = ({ navigation }) => {
  //Aqui cogemos la informacion que viene de la otra pantalla
  const itemID = navigation.getParam("itemID");
  const { state, updateBlogPost, getBlogPosts } = useContext(Context);
  var foundIndex = state.findIndex((item) => item.id == itemID);

  const [newInput, setInput] = React.useState({
    title: state[foundIndex].title,
    content: state[foundIndex].content,
    id: state[foundIndex].id,
  });

  function titleChanged(value, name) {
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  // function updatePressed() {
  //   dispatch({ type: "update", payload: newInput.id });
  //   setInput({
  //     title: "",
  //     content: "",
  //   });
  // }

  return (
    <View>
      <Text>Enter Title:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginTop: 10,
        }}
        onChangeText={(change) => titleChanged(change, "title")}
        value={newInput.title}
      />
      <Text>Enter Content:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginTop: 10,
        }}
        onChangeText={(change) => titleChanged(change, "content")}
        value={newInput.content}
      />
      <Button
        onPress={() =>
          updateBlogPost(newInput, () => {
            //Pop es una funcion para eliminar la ultima pantalla en monton de vistas(view stack)
            //Como eliminar el ultimo elemento de una coleccion(array)

            navigation.pop();
          })
        }
        title="Update"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 170,
    height: 100,
    borderRadius: 10,
  },
});

export default EditScreen;
