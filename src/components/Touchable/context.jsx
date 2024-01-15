import React, {createContext} from 'react';

export const TouchableContext = createContext({hasFocus: false});

export const TouchableContextProvider = props => {
  const {children, hasFocus} = props;

  return (
    <TouchableContext.Provider value={{hasFocus}}>
      {children}
    </TouchableContext.Provider>
  );
};
