import { createContext, useContext, useEffect, useState } from "react";

export const timeLocationContext = createContext();

// Custom hook
export const useTimeLocation = () => {
  const context = useContext(timeLocationContext);
  if (!context) {
    throw new Error("useTimeLocation must be used within TimeLocationProvider");
  }
  return context;
};

export const TimeLocationProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTimeLocationData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("http://worldtimeapi.org/api/ip");
      if (!response.ok) {
        throw new Error("HTTP ERROR !", response.error);
      }
      const newData = await response.json();
      setData(newData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTimeLocationData();
  }, []);

  const value = {
    data,
    loading,
    error,
    fetchTimeLocationData,
  };
  return (
    <timeLocationContext.Provider value={value}>
      {children}
    </timeLocationContext.Provider>
  );
};
