
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Services/Population/Providers/dataSlice";
import DataBlock from "../components/DataBlock";

const Home = () => {
  const dispatch = useDispatch();

  const { data, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData()); // Fetch data when the component mounts
    }
  }, [status, dispatch]);

  console.log("data", data);

  return (
    <div className="w-full h-screen overflow-y-auto">
      <div className="w-full h-full flex flex-col items-center p-5 container mx-auto">
        <h1>Population Data</h1>
        <div className="w-full flex flex-wrap">
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p>Error: {error}</p>}
          {status === "succeeded" &&
            data &&
            data.map((item, index) => (
              <DataBlock
                key={index}
                year={item.Year}          // Dynamically passing year
                population={item.Population} // Dynamically passing population
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
