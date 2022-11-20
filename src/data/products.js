import appleWatchUltra from "../assets/images/apple-watch-ultra.jpeg";
import gpu from "../assets/images/gpu.webp";
import ipadPro from "../assets/images/ipad-pro.webp";
import iphone14 from "../assets/images/iphone14.webp";
import keyboard from "../assets/images/keyboard.webp";
import macbook from "../assets/images/macbook.webp";
import processor from "../assets/images/processor.webp";
import uniqid from "uniqid";

export const products = {
  category: {
    apple: {
      title: "Apple",
      img: macbook,
      id: uniqid(),
      items: {
        iphone14: {
          title: "Iphone 14",
          img: iphone14,
          price: 1200,
        },
        ipadPro: {
          title: "iPad Pro",
          img: ipadPro,
          price: 1700,
        },
        appleWatchUltra: {
          title: "Apple Watch Ultra",
          img: appleWatchUltra,
          price: 999,
        },
        macbookPro: {
          title: "MacBook Pro",
          img: macbook,
          price: 2200,
        },
      },
    },
    processors: {
      title: "CPU's",
      img: processor,
      id: uniqid(),
    },
    graphicsCards: {
      title: "GPU's",
      img: gpu,
      id: uniqid(),
    },
    keyboards: {
      title: "Keyboards",
      img: keyboard,
      id: uniqid(),
    },
  },
};
