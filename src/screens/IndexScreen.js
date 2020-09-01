import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";
import { withNavigation } from "react-navigation";
// import { Context as BlogContext } from "../context/BlogContext"; // Si tenemos contextos diferentes podemos nombralos esa manera
const IndexScreen = ({ navigation }) => {
  //useContext context kullanabilmek için oluşturulan bir hook
  //burada kullanılan destructuring blog context ten ilettiğimiz objeler için
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();

    //Aqui decimos que cuando esta pantalla es la primera en monton de vistas(stack view) llamar getBlogPosts
    //For ejemplo cuando regresamos pantalla de anadir llamamos getBlogPosts
    const listener = navigation.addListener("didFocus", () => {
      getBlogPosts();
    });

    //Esta funcion se llama cuando esta pantalla es eliminando completamente de applicacion. Asi no tendramos innecesarios oyentos en la applicacion
    return () => {
      listener.remove();
    };
  }, []);
  const renderItem = ({ item }) => (
    <>
      <View style={styles.blogListItem}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Edit", {
              itemID: item.id,
            })
          }
          style={styles.blogTitleTouchableStyle}
        >
          <Text style={styles.blogTitleStyle}>
            {item.title} - {item.id}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            deleteBlogPost(item.id);
          }}
        >
          <AntDesign
            style={{ marginHorizontal: 10 }}
            name="delete"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lineStyle} />
    </>
  );

  const [value, onChangeText] = React.useState("");

  return (
    <View>
      <FlatList
        data={state}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        onPress={() => navigation.navigate("AddBlogPost")}
      >
        <MaterialIcons name="add" size={30} color="black" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  blogTitleTouchableStyle: {
    flex: 1,
  },
  blogListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
  },
  blogTitleStyle: {
    fontSize: 20,
    marginLeft: 10,
  },
  lineStyle: {
    borderBottomWidth: 1.5,
    borderColor: "rgb(200, 200, 200)",
    marginRight: 10,
    marginLeft: 10,
  },
});

export default IndexScreen;
