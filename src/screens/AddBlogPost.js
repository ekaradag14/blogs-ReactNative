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
  Alert,
} from "react-native";

const AddBlogPost = ({ navigation }) => {
  const { postBlogPost, getBlogPosts } = useContext(Context);
  // const { data, dispatch } = useContext(BlogContextUseReducer);
  const [newInput, setInput] = React.useState({
    title: "",
    content: "",
  });

  function titleChanged(value, name) {
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

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
        onPress={() => {
          if (newInput.title.length > 0 && newInput.content.length > 0) {
            //No queremos llamara navigacion immediamente, porque tal vez nosotros tendremos una lamada de API para guardar la informacion.
            // Y cuando tendramos esa llamada de API necesitaremos que esparala completar. Y por eso pasamos la funcion como un callback
            postBlogPost(newInput, () => {
              navigation.navigate("Index");
            });
          } else {
            Alert.alert(
              "Missing Information",
              "Please complete missing blog post fields.",
              [{ text: "OK", onPress: () => console.log("OK Pressed") }],
              { cancelable: false }
            );
          }
        }}
        title="Add"
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

export default AddBlogPost;
