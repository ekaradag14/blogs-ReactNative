import jsonServer from "../api/jsonServer";

import createDataContext from "./createDataContext";
//Extrajimos el contexto de data al otro componente, de este manera podemos utilizar el con muchas otras componentes

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      console.log(state);
      return action.payload;

    case "add_blogpost":
      console.log(action.payload);
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: ` ${action.payload.title}`,
          content: `${action.payload.content}`,
        },
      ];
    case "delete_blogpost":
      return state.filter((item) => item.id !== action.payload);
    case "update_blogpost":
      return state.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      });

    default:
      return state;
  }
};

const postBlogPost = (dispatch) => {
  return async (newInput, callback) => {
    const response = await jsonServer.post("/blogposts", newInput);
    if (callback) {
      callback();
    }
  };
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

// const addBlogPost = (dispatch) => {
//   return (newInput, callback) => {
//     dispatch({ type: "add_blogpost", payload: newInput });
//     if (callback) {
//       callback();
//     }
//   };
// };

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    const response = await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};
const updateBlogPost = (dispatch) => {
  return async (newInput, callback) => {
    const response = await jsonServer.patch(
      `/blogposts/${newInput.id}`,
      newInput
    );
    if (callback) {
      callback();
    }
  };
};

//Aqui llamamos el componente para crear el data contexta. pasamos funciona de reducer, una funciona para cambiar el estado y un estado inicial
export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    deleteBlogPost,
    updateBlogPost,
    getBlogPosts,
    postBlogPost,
  },
  // Aqui tenemos el estado inicial de nuestro data contexto
  []
);
