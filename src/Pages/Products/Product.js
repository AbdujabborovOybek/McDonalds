import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { ProductCompnent } from "../../Components/Product/product";
import { getData } from "./Data";
import "animate.css";

export function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box
      id="mainProductBox"
      style={myStyle.mainBox}
      className="animate__animated animate__fadeIn"
    >
      <ProductCompnent data={data} />
    </Box>
  );
}

const myStyle = {
  mainBox: {
    width: "100%",
    height: "calc(100% - 55px)",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "3%",
    overflowY: "auto",
    alignContent: "flex-start",
    gap: "1% 2%",
    bagroundColor: "aliceblue",
  },
};
