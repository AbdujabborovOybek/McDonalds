import React from "react";
import { Box } from "@mui/material";
import { ProductCompnent } from "../../Components/Product/product";

export function Products() {
  return (
    <Box style={myStyle.mainBox}>
      <ProductCompnent />
      <ProductCompnent />
      <ProductCompnent />
      <ProductCompnent />
      <ProductCompnent />
      <ProductCompnent />
      <ProductCompnent />
      <ProductCompnent />
      <ProductCompnent />
      <ProductCompnent />
      <ProductCompnent />
    </Box>
  );
}

const myStyle = {
  mainBox: {
    width: "100%",
    height: "calc(100% - 55px)",
    backgroundColor: "#ccc",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "3%",
    overflowY: "auto",
    gap: "1% 3%",
  },
};
