import { createContext, useContext, useEffect, useState } from 'react';

const AppContext: any = createContext({
  events: null,
});
export const useApp = () => {
  return useContext(AppContext);
};

export default function AppContextProvider({ children }: { children: any }) {
  const [error, setError] = useState(false);
  const [events, setEvents] = useState([]);

  return (
    <AppContext.Provider value={{ events }}>{children}</AppContext.Provider>
  );
}
