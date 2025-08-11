import { createContext, useContext, useEffect, useState } from "react";

// 1 Create the context
const timeLocationContext = createContext();
// 2 Create hook to use Context
export const useTimeLocation = () => {
  const context = useContext(timeLocationContext);
  if (!context) {
    throw new Error("useTimeLocation mjust be used within teh provider");
  }
  return context;
};
// 3 Create the Provider
export const TimeLocationProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("http://worldtimeapi.org/api/ip");
      if (!response.ok) {
        throw new Error(`HTTP no good ! status : ${response.status} `);
      }
      const newData = await response.json();
      setData(newData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
      setError(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const value = {
    data,
    loading,
    error,
    fetchData,
  };

  return (
    <timeLocationContext.Provider value={value}>
      {children}
    </timeLocationContext.Provider>
  );
};
