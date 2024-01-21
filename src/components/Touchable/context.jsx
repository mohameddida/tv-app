import React, {createContext} from 'react';

export const TouchableContext = createContext({hasFocus: true});

export const TouchableContextProvider = props => {
  const {children, hasFocus} = props;

  return (
    <TouchableContext.Provider value={{hasFocus}}>
      {children}
    </TouchableContext.Provider>
  );
};
