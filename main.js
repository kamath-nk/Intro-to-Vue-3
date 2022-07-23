const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2200,
          color: "green",
        },
        {
          id: 2211,
          color: "blue",
        },
      ],
      sizes: ["S", "M", "L", "XL"],
    };
  },
});
