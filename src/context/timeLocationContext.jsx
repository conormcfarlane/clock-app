import { createContext, useEffect, useState } from "react";

const timeLocationContext = createContext();

export const timeLocationProvider = ({ children }) => {
  const [timeData, setTimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTimeLocation = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("http://worldtimeapi.org/api/ip");
      if (!response.ok) {
        throw new Error(`HTTP Error ! : ${response.status}`);
      }
      const data = response.json();
      setTimeData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTimeLocation();
  }, []);

  return (
    <timeLocationContext.Provider
      value={{
        timeData,
        loading,
        error,
      }}
    >
      {children}
    </timeLocationContext.Provider>
  );
};
