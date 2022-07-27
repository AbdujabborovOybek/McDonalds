import React from "react";
import "./product.css";
import {
  CardActionArea,
  Typography,
  Box,
  Card,
  CardMedia,
} from "@mui/material";
import { acOpenSwDrawer } from "../../Redux/OpenMenu";
import { useDispatch } from "react-redux";
import { acSelectProduct } from "../../Redux/SelectProduct";

export function ProductCompnent({ data }) {
  const dispatch = useDispatch();

  return (
    <>
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            sx={myStyle.myStyle}
            onClick={() => {
              dispatch(acOpenSwDrawer(true));
              dispatch(acSelectProduct(item));
            }}
            id="productCatd"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={item.img}
                alt="green iguana"
                style={myStyle.mainBoxImg}
                id="productCatd"
              />
              <Box style={myStyle.TextItem}>
                <Typography
                  variant="body2"
                  sx={{
                    width: "100%",
                    textAlign: "end",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  {item.price}
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
}

const myStyle = {
  mainBox: {
    width: "220px",
    height: "220px",
    margin: "10px",
    position: "relative",
  },
  mainBoxImg: {
    width: "220px",
    height: "220px",
    padding: "5%",
  },
  TextItem: {
    width: "100%",
    position: "absolute",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "4%",
  },
};
