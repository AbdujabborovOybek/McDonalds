import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { acOpenSwDrawer } from "../../Redux/OpenMenu";
import { useDispatch } from "react-redux";

export function ProductCompnent() {
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        width: "145px",
        height: "140px",
      }}
      onClick={() => {
        dispatch(acOpenSwDrawer(true));
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200px"
          width="350px"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
  );
}
