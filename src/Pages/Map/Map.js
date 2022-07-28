import React from "react";
import { Box } from "@mui/material";

export function Map() {
  return (
    <Box style={myStyle.contener}>
      <iframe
        style={myStyle.myMap}
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20257.48579824117!2d71.65573135441623!3d40.996952232828086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1659009200454!5m2!1sru!2s"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
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
