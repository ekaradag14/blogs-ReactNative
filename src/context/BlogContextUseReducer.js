import React, { useReducer } from "react";

const BlogContextUseReducer = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      //payload=newObject
      return [...state, action.payload];

    case "delete":
      //payload=title
      return state.filter((item) => {
        return item.title !== action.payload;
      });

    case "edit":
      //payload=title
      // state[foundIndex].title =
      //  state[foundIndex].title =
      var foundIndex = state.findIndex((x) => x.id == action.payload);

    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(reducer, []);
  const addBlogPost = () => {
    dispatch({ type: "add" });
    console.log(blogPosts);
  };
  return (
    <BlogContextUseReducer.Provider
      value={{ data: blogPosts, dispatch: addBlogPost }}
    >
      {children}
    </BlogContextUseReducer.Provider>
  );
};

export default BlogContextUseReducer;
