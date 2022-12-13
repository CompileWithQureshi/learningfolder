import React from 'react';

export const MyContext = React.createContext({ Name: "Qureshi", Value: "1" });

export const Provider = MyContext.Provider;
