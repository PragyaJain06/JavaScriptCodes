import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia, Typography } from "@mui/material";
function MyCard({ ele }) {
  const [page, setPage] = useState(1);

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image={ele?.image_url}
          alt={ele?.region}
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {ele?.name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default MyCard;
