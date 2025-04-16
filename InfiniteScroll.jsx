import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchApi = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${(page - 1) * 20}`
    );
    if (!response.ok) return;

    try {
      const result = await response.json();
      setData((prev) => [...prev, ...result.products]);
    } catch (err) {
      console.log("error while fetching the api data!", err);
    }
  };

  const handleListener = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 5) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleListener);
    return () => window.removeEventListener("scroll", handleListener);
  }, []);

  useEffect(() => {
    fetchApi();
  }, [page]);

  return data.map((item, index) => (
    <Card sx={{ minWidth: 275, padding: "5px", margin: "10px" }} key={index}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {item.title}
        </Typography>
        <Typography variant="h5" component="div">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  ));
}

export default InfiniteScroll;
