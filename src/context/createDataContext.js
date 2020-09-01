//Buradan dümdüz bir fonksiyon alacağımız için küçük harfle başlattık adını
//comenzamos con una letra pequena porque solo tomaremos una función plana
import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    //Tek başına state olmasının sebebi orada state:state yazması
    //La razon tenemos solo state alli es porque normalmente escribimos state:state
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
