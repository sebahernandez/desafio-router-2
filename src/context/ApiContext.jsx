import { createContext, useState, useEffect } from "react";
import { fetchMortyData } from "../api/api";
import PropTypes from "prop-types";

export const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchMortyData();
      console.log("Data: ", data.results);
      setData(data.results);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [setData]);

  return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>;
};

ApiContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiContextProvider;
