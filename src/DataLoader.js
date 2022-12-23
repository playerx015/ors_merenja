import React, { useEffect } from "react";

export const DataLoaderContext = React.createContext();
//const apiUrl = "apiurl"

export const DataLoader = (props) => {
  const [data, setData] = React.useState({ v: 0, p: 0, t:0 });

  const loadData = () => {
    // fetch('http://example.com/movies.json')
    // .then((response) => response.json())
    // .then((data) => setData(data));

    setData({ v: 40, p: 980, t: 20 });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <DataLoaderContext.Provider value={data}>
      {props.children}
    </DataLoaderContext.Provider>
  );
};
