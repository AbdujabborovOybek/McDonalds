import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { ProductCompnent } from "../../Components/Product/product";
import { getData } from "./Data";
import "animate.css";
import { useSelector } from "react-redux";

export function Products() {
  const [data, setData] = useState([]);
  const type = useSelector((state) => state.reTypeProduct);

  useEffect(() => {
    getData()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const result = data.filter((item) => {
    if (item.type === type) {
      return item;
    }
    return null;
  });

  return (
    <Box
      id="mainProductBox"
      style={myStyle.mainBox}
      className="animate__animated animate__fadeIn"
    >
      <ProductCompnent data={result} />
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
    gap: "2% 3.5%",
    bagroundColor: "aliceblue",
  },
};
