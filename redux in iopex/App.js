import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiCall } from "./Redux";
import Card from "./Card";
import Filter from "./Filter";
function App() {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => {
    return state.data.items;
  });

  useEffect(() => {
    dispatch(fetchApiCall());
  }, [dispatch]);
  return (
    <div className="App">
      <Filter />
      {apiData &&
        apiData?.length > 0 &&
        apiData?.map((item, index) => <Card ele={item} key={index} />)}
    </div>
  );
}

export default App;
