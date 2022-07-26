import f11 from "./Img/sundae.jfif";
import f12 from "./Img/Hot Caramel Sundae.jfif";
import f13 from "./Img/Hot Fudge Sundae.jfif";
import f14 from "./Img/oreo.jfif";
import f15 from "./Img/mms.jfif";
import f16 from "./Img/Strawberry Shake.jfif";
import f17 from "./Img/Vanilla Shake.jfif";

export const getData = async () => {
  return [
    {
      id: 1,
      name: "Sundae Cone",
      img: f11,
      price: "5000",
      type: "sundae",
    },
    {
      id: 2,
      name: "Hot Caramel Sundae",
      img: f12,
      price: "8000",
      type: "sundae",
    },
    {
      id: 3,
      name: "Hot Fudge Sundae",
      img: f13,
      price: "9000",
      type: "sundae",
    },
    {
      id: 4,
      name: "McFlurry® with OREO® cookies",
      img: f14,
      price: "12000",
      type: "shake",
    },
    {
      id: 5,
      name: "McFlurry® with M&M'S® Candies",
      img: f15,
      price: "8500",
      
    },
    {
      id: 6,
      name: "Strawberry Shake",
      img: f16,
      price: "3000",
    },
    {
      id: 7,
      name: "Vanilla Shake",
      img: f17,
      price: "4500",
    },
    {
      id: 8,
      name: "Vanilla Shake",
      img: f17,
      price: "4000",
    },
    {
      id: 9,
      name: "Vanilla Shake",
      img: f17,
      price: "7000",
    },
  ];
};
