import appleWatchUltra from "../assets/images/apple-watch-ultra.jpeg";
import corei7 from "../assets/images/corei7.webp";
import corei9 from "../assets/images/corei9.webp";
import gpu from "../assets/images/gpu.webp";
import ipadPro from "../assets/images/ipad-pro.webp";
import iphone14 from "../assets/images/iphone14.webp";
import keyboard from "../assets/images/keyboard.webp";
import keychron from "../assets/images/keychron.webp";
import macbook from "../assets/images/macbook.webp";
import mxkeys from "../assets/images/mxkeys.jpeg";
import processor from "../assets/images/processor.webp";
import rtx3060 from "../assets/images/3060.webp";
import rtx3070 from "../assets/images/3070ti.jpeg";
import rtx3080 from "../assets/images/3080.webp";
import rtx4090 from "../assets/images/4090.webp";
import ryzen5 from "../assets/images/ryzen5.webp";
import ryzen7 from "../assets/images/ryzen7.webp";
import steelseries from "../assets/images/steelseries.webp";
import uniqid from "uniqid";

export const products = [
  {
    category: "Apple",
    img: macbook,
    id: uniqid(),
    items: [
      [
        {
          title: "Iphone 14",
          img: iphone14,
          price: 1200,
        },
      ],
      [
        {
          title: "iPad Pro",
          img: ipadPro,
          price: 1700,
        },
      ],
      [
        {
          title: "Apple Watch Ultra",
          img: appleWatchUltra,
          price: 999,
        },
      ],
      [
        {
          title: "MacBook Pro",
          img: macbook,
          price: 2200,
        },
      ],
    ],
  },
  {
    category: "Graphics cards",
    img: gpu,
    id: uniqid(),
    items: [
      {
        title: "ASUS TUF GeForce RTX 4090 24GB Gaming OC",
        img: rtx4090,
        price: 2600,
      },
      {
        title: "ASUS TUF GeForce RTX 3080 10GB Gaming OC V2 (LHR)",
        img: rtx3080,
        price: 1100,
      },
      {
        title: "ASUS GeForce RTX 3060 12GB PHOENIX V2 (LHR)",
        img: rtx3060,
        price: 400,
      },
      {
        title: "ASUS ROG Strix GeForce RTX 3070 Ti Gaming OC 8GB",
        img: rtx3070,
        price: 1000,
      },
    ],
  },

  {
    category: "Processors",
    img: processor,
    id: uniqid(),
    items: [
      {
        title: "AMD Ryzen 7 5800X3D",
        img: ryzen7,
        price: 400,
      },
      {
        title: "IAMD Ryzen 5 5600X",
        img: ryzen5,
        price: 200,
      },
      {
        title: "Intel Core i7-13700K",
        img: corei7,
        price: 600,
      },
      {
        title: "Intel Core i9-13900K",
        img: corei9,
        price: 800,
      },
    ],
  },
  {
    category: "Keyboards",
    img: keyboard,
    id: uniqid(),
    items: [
      {
        title: "Logitech MX Keys",
        img: mxkeys,
        price: 120,
      },
      {
        title: "Razer Blackwidow V3",
        img: keyboard,
        price: 130,
      },
      {
        title: "Keychron K2v2 RGB Aluminium Hot-Swap Gateron Brown",
        img: keychron,
        price: 120,
      },
      {
        title: "Steelseries Apex 3 TKL",
        img: steelseries,
        price: 60,
      },
    ],
  },
];
