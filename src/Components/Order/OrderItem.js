import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import NumberFormat from "react-number-format";

export function OrderItem({ order }) {
  return (
    <>
      {order.map((item) => {
        return (
          <Card style={myStyle.orderItem} key={item.id}>
            <CardMedia
              style={myStyle.orderItemImg}
              component="img"
              image={item.img}
              alt=""
            />
            <CardContent style={myStyle.orderItemCardContent}>
              <Typography variant="body2">{reName(item.name)}</Typography>
              <Typography variant="caption">
                Miqdori: x{item.quantity}
              </Typography>
              <Typography variant="caption">
                Narxi:{" "}
                <NumberFormat
                  value={item.price}
                  displayType="text"
                  thousandSeparator={true}
                  suffix=" sum"
                />
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}

const myStyle = {
  orderItem: {
    width: "100%",
    height: "120px",
    margin: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3%",
    marginBottom: "3%",
  },

  orderItemImg: {
    width: "100px",
    height: "100px",
    borderRadius: "10px",
  },

  orderItemCardContent: {
    width: "calc(100% - 100px)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "0 3%",
  },
};

function reName(name) {
  const arr = name.split("");
  return arr.slice(0, 60).join("") + "...";
}
