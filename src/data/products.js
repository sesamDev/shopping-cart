import gpu from "../assets/images/gpu.webp";
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
