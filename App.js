import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import AddBlogPost from "./src/screens/AddBlogPost";
import EditScreen from "./src/screens/EditScreen";
import TryScreen from "./src/screens/TryScreen";
// curly  braces kullanmamın sebebi default olarak onu export etmemiş olmam
import { Provider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    AddBlogPost: AddBlogPost,
    Edit: EditScreen,
    Try: TryScreen,
  },
  {
    initialRouteName: "Try",
    defaultNavigationOptions: {
      title: "Blog List",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  // Burada da app i blogProvider a bir obje verir gibi veriyoruzki Bütün app içinde data direkt olarak BlogProvider'dan aksın
  return (
    <Provider>
      <App />
    </Provider>
  );
};
