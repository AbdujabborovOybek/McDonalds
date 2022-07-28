import React from "react";
import { Box } from "@mui/material";

export function Map() {
  return (
    <Box style={myStyle.contener}>
      <iframe
        style={myStyle.myMap}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20257.48579824117!2d71.65573135441623!3d40.996952232828086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4a397db19cc7%3A0x3573ff83551d97df!2z0KHQv9C-0YDRgtC40LLQvdGL0Lkg0KTQuNGC0L3QtdGBINCa0L7QvNC_0LvQtdC60YEi0JDQu9C_0L7QvNC40Ygi!5e0!3m2!1sru!2s!4v1659008516743!5m2!1sru!2s"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="This is a unique title"
      />
    </Box>
  );
}

const myStyle = {
  contener: {
    width: "100%",
    height: "calc(100vh - 55px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  myMap: {
    width: "100%",
    height: "100%",
  },
};
