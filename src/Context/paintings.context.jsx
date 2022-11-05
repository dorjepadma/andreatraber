import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "../utils/Firebase/firebase.utils.js";

export const PaintingsContext = createContext({
  paintings: [],
});

export const PaintingsProvider = ({ children }) => {
  const [paintings, setPaintings] = useState([]);

  const value = { paintings };
  return (
    <PaintingsContext.Provider value={value}> 
    {children} 
    </PaintingsContext.Provider>
 )

}
