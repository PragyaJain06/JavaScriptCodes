import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 20;
  const [paginated, setPaginated] = useState([]);

  // Fetch data when the component is mounted
  const fetchApi = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=1000` // Fetch a large set of data
    );
    if (!response.ok) return;

    try {
      const result = await response.json();
      setData(result.products);
    } catch (err) {
      console.log("Error while fetching the API data!", err);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // Pagination Logic
  useEffect(() => {
    const startIndex = (page - 1) * limit; // Correct calculation of startIndex
    const endIndex = startIndex + limit; // Correct calculation of endIndex
    setPaginated(data.slice(startIndex, endIndex)); // Set the paginated data
  }, [page, data]); // Recalculate whenever the page or data changes

  // Handle Next button click
  const handleNext = () => {
    if (page * limit < data.length) {
      setPage((prev) => prev + 1); // Increase page number
    }
  };

  // Handle Previous button click
  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1); // Decrease page number
    }
  };

  return (
    <div>
      {/* Render paginated data */}
      {paginated.map((item, index) => (
        <Card
          sx={{ minWidth: 275, padding: "5px", margin: "10px" }}
          key={index}
        >
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              {item?.title}
            </Typography>
            <Typography variant="h5" component="div">
              {item?.description}
            </Typography>
          </CardContent>
        </Card>
      ))}

      {/* Pagination Controls */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePrev} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNext} disabled={page * limit >= data.length}>
          Next
        </button>
      </div>
    </div>
  );
}

export default InfiniteScroll;
