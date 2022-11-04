import { createContext, useState } from "react";

import PAINTING_DATA from "../utils/paintingData";



export const PaintingsContext = createContext({
  paintings: [],
});

export const PaintingsProvider = ({ children }) => {
  const [paintings, setPaintings] = useState(PAINTING_DATA);
  const value = { paintings };
  return (
    <PaintingsContext.Provider value={value}> 
    {children} 
    </PaintingsContext.Provider>
 )

}
